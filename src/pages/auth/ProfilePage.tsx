import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Calendar,
  Lock,
  Save,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  LogOut,
  Sparkles,
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../lib/supabase';

export const ProfilePage: React.FC = () => {
  const { user, profile, loading, signOut, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  // Form states
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [playerType, setPlayerType] = useState('Adult');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');

  // Additional player record meta
  const [joinedDate, setJoinedDate] = useState('');
  const [waiverSigned, setWaiverSigned] = useState(false);
  const [playerId, setPlayerId] = useState<string | null>(null);

  // UI feedback states
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login?redirectTo=/profile');
      return;
    }

    if (user) {
      // 1. Initial population from auth user metadata
      const metaName = user.user_metadata?.full_name || profile?.full_name || user.email?.split('@')[0] || '';
      const metaPhone = user.user_metadata?.phone || profile?.phone || '';
      const metaDob = user.user_metadata?.dob || '';
      const metaType = user.user_metadata?.player_type || 'Adult';

      setFullName(metaName);
      setPhone(metaPhone);
      setDob(metaDob);
      setPlayerType(metaType);

      // 2. Fetch linked player record from Supabase table `players`
      const fetchPlayerRecord = async () => {
        try {
          const { data, error } = await supabase
            .from('players')
            .select('*')
            .eq('email', user.email)
            .maybeSingle();

          if (!error && data) {
            setPlayerId(data.id);
            if (data.name) setFullName(data.name);
            if (data.phone) setPhone(data.phone);
            if (data.type) setPlayerType(data.type);
            if (data.emergency_contact) setEmergencyContact(data.emergency_contact);
            if (data.emergency_phone) setEmergencyPhone(data.emergency_phone);
            if (data.joined_date) setJoinedDate(data.joined_date);
            setWaiverSigned(!!data.waiver_signed);

            // Extract DOB from notes if present
            const dobMatch = data.notes?.match(/DOB:\s*([^\s|;]+)/i);
            if (dobMatch && dobMatch[1]) {
              setDob(dobMatch[1]);
            }
          }
        } catch (err) {
          console.warn('Error fetching linked player record:', err);
        } finally {
          setInitialLoading(false);
        }
      };

      fetchPlayerRecord();
    }
  }, [user, loading, profile, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage('Full name or username cannot be blank.');
      return;
    }

    setIsSaving(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const { error } = await updateUserProfile({
        full_name: fullName.trim(),
        phone: phone.trim(),
        dob: dob || undefined,
        player_type: playerType,
        emergency_contact: emergencyContact.trim() || undefined,
        emergency_phone: emergencyPhone.trim() || undefined,
      });

      if (error) throw error;

      setSuccessMessage('Your profile and academy records have been updated successfully!');
      setTimeout(() => setSuccessMessage(null), 5000);
    } catch (err: any) {
      console.error('Failed to update profile:', err);
      setErrorMessage(err.message || 'Failed to update profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (loading || initialLoading) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-[#0F392B] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-semibold text-slate-500">Loading your profile records...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-6 sm:py-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-[#0F392B] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">My Profile & Account Settings</span>
        </nav>

        {/* Top Header Card - Sleek & Compact (No redundant signout/book buttons) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#0F392B] text-white flex items-center justify-center text-lg font-serif font-bold shadow-xs shrink-0">
              {fullName
                ? fullName
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()
                : 'U'}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight font-serif">
                  {fullName || 'Academy Member'}
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-[#0F392B] border border-emerald-200">
                  {playerType || 'Active Member'}
                </span>
                {waiverSigned && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Waiver on File
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-slate-400" />
                  {user?.email}
                </span>
                {joinedDate && (
                  <>
                    <span className="text-slate-300">•</span>
                    <span>Member since {joinedDate}</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Messages */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2.5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-medium shadow-xs"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successMessage}</span>
          </motion.div>
        )}

        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2.5 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 text-xs font-medium shadow-xs"
          >
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{errorMessage}</span>
          </motion.div>
        )}

        {/* Main Profile Form */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-100 bg-slate-50/60 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                Edit Profile & Academy Details
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Update your personal information. Changes are synchronized across your account and academy administration records.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
            {/* Section 1: Core Account Details */}
            <div className="space-y-3.5">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#0F392B]" />
                <span>Account & Personal Information</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Full Name / Username */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Full Name / Username *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Corbin Bosch"
                      required
                      className="w-full h-9 pl-8.5 pr-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#0F392B] focus:ring-1 focus:ring-[#0F392B] transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Email Address (Disabled / Read-Only) */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
                    <span>Email Address</span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-0.5 font-normal">
                      <Lock className="w-2.5 h-2.5" /> Read-Only
                    </span>
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={user?.email || ''}
                      disabled
                      readOnly
                      className="w-full h-9 pl-8.5 pr-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-500 bg-slate-100/80 cursor-not-allowed select-none"
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                    Authentication email is locked.
                  </p>
                </div>

                {/* Contact Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Contact Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. (203) 555-0192"
                      className="w-full h-9 pl-8.5 pr-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#0F392B] focus:ring-1 focus:ring-[#0F392B] transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Date of Birth (DOB) */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
                    <span>Date of Birth (DOB)</span>
                    <span className="text-[10px] text-slate-400 font-normal">Junior/Age Check</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full h-9 pl-8.5 pr-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#0F392B] focus:ring-1 focus:ring-[#0F392B] transition-all bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Player Division & Emergency Info */}
            <div className="space-y-3.5 pt-5 border-t border-slate-100">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#0F392B]" />
                <span>Player Category & Emergency Contact</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Player Division */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Player Category / Level
                  </label>
                  <select
                    value={playerType}
                    onChange={(e) => setPlayerType(e.target.value)}
                    className="w-full h-9 px-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#0F392B] focus:ring-1 focus:ring-[#0F392B] transition-all bg-white"
                  >
                    <option value="Adult">Adult (General)</option>
                    <option value="Adult (NTRP 2.5 - 3.0)">Adult (NTRP 2.5 - 3.0 Low Intermediate)</option>
                    <option value="Adult (NTRP 3.5 - 4.0)">Adult (NTRP 3.5 - 4.0 Intermediate)</option>
                    <option value="Adult High Performance">Adult High Performance (NTRP 4.5+)</option>
                    <option value="Junior">Junior (General)</option>
                    <option value="Junior Red Ball (Ages 4-6)">Junior Red Ball (Ages 4-6)</option>
                    <option value="Junior Orange Ball (Ages 7-9)">Junior Orange Ball (Ages 7-9)</option>
                    <option value="Junior Green Dot (Ages 10-12)">Junior Green Dot (Ages 10-12)</option>
                    <option value="Junior Competitor (Yellow Ball)">Junior Competitor (Yellow Ball)</option>
                    <option value="Season Member">Season Court Member</option>
                    <option value="Point Play Regular">Point Play Regular</option>
                  </select>
                </div>

                {/* Emergency Contact Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Emergency Contact Person
                  </label>
                  <input
                    type="text"
                    value={emergencyContact}
                    onChange={(e) => setEmergencyContact(e.target.value)}
                    placeholder="e.g. Eleanor Bosch"
                    className="w-full h-9 px-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#0F392B] focus:ring-1 focus:ring-[#0F392B] transition-all bg-white"
                  />
                </div>

                {/* Emergency Contact Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Emergency Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={emergencyPhone}
                    onChange={(e) => setEmergencyPhone(e.target.value)}
                    placeholder="e.g. (203) 555-0845"
                    className="w-full h-9 px-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#0F392B] focus:ring-1 focus:ring-[#0F392B] transition-all bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Form Footer Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-[11px] text-slate-400">
                All records are securely encrypted and synchronized with Old Greenwich Tennis Academy.
              </p>

              <button
                type="submit"
                disabled={isSaving}
                className="w-full sm:w-auto px-5 py-2 bg-[#0F392B] hover:bg-[#18523f] text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Quick Academy Links Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/fall-clinics"
            className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0F392B]/40 transition-all group"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
              Junior Academy
            </div>
            <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#0F392B] transition-colors flex items-center justify-between">
              <span>View Junior Fall Clinics</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h4>
            <p className="text-xs text-slate-500 mt-1">Explore Red-to-Yellow ball progression tracks & rates.</p>
          </Link>

          <Link
            to="/adult-clinics"
            className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0F392B]/40 transition-all group"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
              Adult Group Play
            </div>
            <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#0F392B] transition-colors flex items-center justify-between">
              <span>View Adult Clinics</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h4>
            <p className="text-xs text-slate-500 mt-1">Review NTRP 1.0 to 4.0+ group drills and weekly match play.</p>
          </Link>

          <Link
            to="/seasoncourts"
            className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0F392B]/40 transition-all group"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
              Guaranteed Hours
            </div>
            <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#0F392B] transition-colors flex items-center justify-between">
              <span>Season Court Contracts</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h4>
            <p className="text-xs text-slate-500 mt-1">Lock in prime indoor Har-Tru clay hours with no guest fees.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

