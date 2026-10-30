import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  role: 'customer' | 'admin' | 'staff';
  player_level?: string;
  dob?: string;
  emergency_contact?: string;
  emergency_phone?: string;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signUp: (
    email: string,
    password: string,
    metadata?: { full_name?: string; phone?: string; player_type?: string }
  ) => Promise<{ error: AuthError | null; user: User | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: AuthError | null }>;
  updateUserProfile: (updates: {
    full_name?: string;
    phone?: string;
    dob?: string;
    player_type?: string;
    emergency_contact?: string;
    emergency_phone?: string;
  }) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      if (!error && data) {
        setProfile(data as UserProfile);
      }
    } catch (e) {
      console.warn('Error fetching user profile:', e);
    }
  };

  useEffect(() => {
    // 1. Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    // 2. Real-time auth listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signUp = async (
    email: string,
    password: string,
    metadata?: { full_name?: string; phone?: string; player_type?: string }
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: 'customer',
          full_name: metadata?.full_name || '',
          phone: metadata?.phone || '',
          player_type: metadata?.player_type || 'Adult',
        },
      },
    });

    // If user is created, also create or link player record
    if (data.user && !error) {
      try {
        await supabase.from('players').insert([
          {
            name: metadata?.full_name || email.split('@')[0],
            email,
            phone: metadata?.phone || '',
            type: metadata?.player_type || 'Adult',
          },
        ]);
      } catch (err) {
        console.warn('Player profile creation note:', err);
      }
    }

    return { error, user: data.user };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    });
    return { error };
  };

  const updateUserProfile = async (updates: {
    full_name?: string;
    phone?: string;
    dob?: string;
    player_type?: string;
    emergency_contact?: string;
    emergency_phone?: string;
  }) => {
    try {
      if (!user) throw new Error('Not logged in');

      // 1. Update Auth user metadata
      const { data: authData, error: authErr } = await supabase.auth.updateUser({
        data: {
          full_name: updates.full_name,
          phone: updates.phone,
          dob: updates.dob,
          player_type: updates.player_type,
        },
      });
      if (authErr) throw authErr;
      if (authData.user) {
        setUser(authData.user);
      }

      // 2. Update or insert player record in Supabase
      const email = user.email || '';
      const { data: existingPlayers } = await supabase
        .from('players')
        .select('*')
        .eq('email', email);

      const existing = existingPlayers && existingPlayers.length > 0 ? existingPlayers[0] : null;

      // Maintain notes with DOB formatted
      let notes = existing?.notes || '';
      if (updates.dob) {
        if (/DOB:\s*[^\s|;]+/i.test(notes)) {
          notes = notes.replace(/DOB:\s*[^\s|;]+/i, `DOB: ${updates.dob}`);
        } else {
          notes = notes ? `${notes} | DOB: ${updates.dob}` : `DOB: ${updates.dob}`;
        }
      }

      if (existing) {
        const { error: pErr } = await supabase
          .from('players')
          .update({
            name: updates.full_name || existing.name,
            phone: updates.phone ?? existing.phone,
            type: updates.player_type || existing.type,
            emergency_contact: updates.emergency_contact ?? existing.emergency_contact,
            emergency_phone: updates.emergency_phone ?? existing.emergency_phone,
            notes,
          })
          .eq('id', existing.id);
        if (pErr) console.warn('Player table sync warning:', pErr);
      } else {
        const { error: pErr } = await supabase.from('players').insert([
          {
            name: updates.full_name || user.email?.split('@')[0],
            email,
            phone: updates.phone || '',
            type: updates.player_type || 'Adult',
            emergency_contact: updates.emergency_contact || null,
            emergency_phone: updates.emergency_phone || null,
            notes,
          },
        ]);
        if (pErr) console.warn('Player insert sync warning:', pErr);
      }

      // 3. Update local profile state
      if (profile) {
        setProfile({
          ...profile,
          full_name: updates.full_name || profile.full_name,
          phone: updates.phone || profile.phone,
          dob: updates.dob || profile.dob,
          emergency_contact: updates.emergency_contact || profile.emergency_contact,
          emergency_phone: updates.emergency_phone || profile.emergency_phone,
        });
      }

      return { error: null };
    } catch (err: any) {
      console.error('Update profile error:', err);
      return { error: err };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        session,
        loading,
        signIn,
        signUp,
        signOut,
        resetPassword,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
