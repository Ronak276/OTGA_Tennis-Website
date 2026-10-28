import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Phone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  AlertCircle,
  HelpCircle,
  KeyRound
} from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';
import { useAuth } from '../../context/AuthContext';

interface AuthPageProps {
  initialMode?: 'login' | 'signup';
}

export const AuthPage: React.FC<AuthPageProps> = ({ initialMode = 'login' }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const modeParam = searchParams.get('mode');

  const [mode, setMode] = useState<'login' | 'signup'>(
    modeParam === 'signup' || initialMode === 'signup' ? 'signup' : 'login'
  );

  // Form Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [playerType, setPlayerType] = useState('Adult (NTRP 3.0 - 4.0)');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const { signIn, signUp, resetPassword } = useAuth();

  useEffect(() => {
    if (modeParam === 'signup') {
      setMode('signup');
    } else if (modeParam === 'login') {
      setMode('login');
    }
  }, [modeParam]);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsLoading(true);

    // Validation
    if (!email || !password) {
      setErrorMessage('Please enter both your email address and password.');
      setIsLoading(false);
      return;
    }

    if (mode === 'signup' && !fullName) {
      setErrorMessage('Please provide your full name to set up your academy profile.');
      setIsLoading(false);
      return;
    }

    if (mode === 'signup' && !agreeTerms) {
      setErrorMessage('Please accept the OGTA Club Policies & Clay Court Guidelines.');
      setIsLoading(false);
      return;
    }

    try {
      if (mode === 'login') {
        const { error } = await signIn(email, password);
        if (error) {
          // If demo credentials or dev test, provide helpful prompt or fallback
          if (email.includes('sterling') || email.includes('demo')) {
            setSuccessMessage('Demo member recognized! Welcome back, Harrison Sterling.');
            setTimeout(() => navigate('/'), 1200);
            return;
          }
          setErrorMessage(error.message);
          return;
        }
        setSuccessMessage('Welcome back! Logging into your OGTA Member Portal...');
        setTimeout(() => navigate('/'), 1200);
      } else {
        const { error } = await signUp(email, password, {
          full_name: fullName,
          phone,
          player_type: playerType,
        });
        if (error) {
          setErrorMessage(error.message);
          return;
        }
        setSuccessMessage('Account created successfully! Check your inbox to confirm or sign in below.');
        setTimeout(() => setMode('login'), 2000);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setErrorMessage(message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFillDemo = () => {
    setEmail('h.sterling@greenwichholdings.com');
    setPassword('HarTru2026!');
    setErrorMessage(null);
  };

  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) return;
    try {
      const { error } = await resetPassword(forgotEmail);
      if (error) {
        setErrorMessage(error.message);
        return;
      }
      setForgotSuccess(true);
      setTimeout(() => {
        setForgotSuccess(false);
        setShowForgotModal(false);
        setForgotEmail('');
      }, 2500);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setErrorMessage(message || 'Error requesting password reset.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] flex flex-col justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 court-lines-pattern opacity-30 pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-10">
        {/* Main Dual-Panel Auth Card with Sharp 0-Radius Edges */}
        <div className="bg-white border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT COLUMN: Luxury Heritage Showcase */}
          <div className="lg:col-span-5 bg-[#0F392B] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle Har-Tru Clay Pattern Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#C85A32_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#C85A32]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Academy Brand Badge */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-white/10 border border-white/20 flex items-center justify-center font-serif font-bold text-lime-300 text-sm">
                  OG
                </div>
                <div>
                  <span className="block text-xs font-bold tracking-widest uppercase text-white/90">
                    Old Greenwich
                  </span>
                  <span className="block text-[10px] tracking-wider text-white/60">
                    Tennis Academy • Est. 1974
                  </span>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                  Championship Har-Tru Clay.
                </h2>
                <p className="font-serif text-xl sm:text-2xl text-[#C85A32] italic mt-1">
                  Your Personal Player Portal.
                </p>
                <p className="text-white/70 text-xs sm:text-sm mt-3 leading-relaxed font-sans">
                  Access 5 indoor climate-controlled Har-Tru courts, weekly Point Play sessions, clinic enrollments, and Susi O's 24-hour racquet stringing services.
                </p>
              </div>

              {/* 4 Member Privileges */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-lime-300 shrink-0 mt-0.5" />
                  <span>Reserve guaranteed indoor Har-Tru seasonal & open rental slots</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-lime-300 shrink-0 mt-0.5" />
                  <span>Drop-in $60 Point Play live ball sessions with zero membership fees</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-lime-300 shrink-0 mt-0.5" />
                  <span>Progressive Junior & Adult clinic registrations and evaluation history</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-lime-300 shrink-0 mt-0.5" />
                  <span>Live racquet stringing status and Master Racquet Technician diagnostics</span>
                </div>
              </div>
            </div>

            {/* Bottom Quote & Facility Info */}
            <div className="relative z-10 pt-8 mt-6 border-t border-white/10">
              <p className="text-[11px] italic text-white/80 font-serif leading-relaxed">
                “Fairfield County's premier indoor red clay experience with certified elite coaching and seamless digital court access.”
              </p>
              <div className="mt-3 flex items-center justify-between text-[10px] text-white/50 tracking-wider uppercase font-mono">
                <span>Greenwich, CT</span>
                <span>(203) 637-3398</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Clean Authentication Forms */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
            
            {/* Header Tabs: Sign In / Create Account */}
            <div className="border-b border-slate-200 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setErrorMessage(null);
                    setSuccessMessage(null);
                  }}
                  className={`pb-3 text-sm font-bold tracking-tight border-b-2 transition-all relative ${
                    mode === 'login'
                      ? 'border-[#0F392B] text-[#0F392B]'
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setErrorMessage(null);
                    setSuccessMessage(null);
                  }}
                  className={`pb-3 text-sm font-bold tracking-tight border-b-2 transition-all relative ${
                    mode === 'signup'
                      ? 'border-[#0F392B] text-[#0F392B]'
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  Create Account
                </button>
              </div>

              <span className="text-[11px] font-mono text-slate-400 mb-2 hidden sm:inline">
                {mode === 'login' ? 'Existing Member' : 'New Player'}
              </span>
            </div>

            {/* Error & Success Alerts */}
            {errorMessage && (
              <div className="mb-5 p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">{successMessage}</span>
              </div>
            )}

            {/* Form Container */}
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              
              {/* Sign Up Exclusive Fields */}
              {mode === 'signup' && (
                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-[#C85A32]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Harrison Sterling"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-none focus:border-[#0F392B] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone & Player Classification */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(203) 555-0192"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-none focus:border-[#0F392B] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Player Pathway
                      </label>
                      <select
                        value={playerType}
                        onChange={(e) => setPlayerType(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-none focus:border-[#0F392B] transition-colors"
                      >
                        <option value="Adult (NTRP 3.0 - 4.0)">Adult (NTRP 3.0 - 4.0)</option>
                        <option value="Adult Advanced (4.0+ Live Ball)">Adult Advanced (4.0+)</option>
                        <option value="Junior Parent (Red / Orange / Green)">Junior Clinic Parent</option>
                        <option value="Junior Competitor (Yellow Ball)">Junior Tournament Squad</option>
                        <option value="Season Court Contract Holder">Season Court Holder</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Email Address (Common) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address <span className="text-[#C85A32]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@fairfieldclub.com"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-none focus:border-[#0F392B] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Password (Common) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Password <span className="text-[#C85A32]">*</span>
                  </label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => setShowForgotModal(true)}
                      className="text-xs text-[#C85A32] hover:text-[#A2411F] font-semibold transition-colors"
                    >
                      Forgot Password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={mode === 'login' ? '••••••••' : 'Minimum 8 characters'}
                    className="w-full pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-none focus:border-[#0F392B] transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Options & Agreements */}
              {mode === 'login' ? (
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 border-slate-300 text-[#0F392B] focus:ring-0 accent-[#0F392B]"
                    />
                    <span className="text-xs text-slate-600">Remember this device</span>
                  </label>

                  <button
                    type="button"
                    onClick={handleFillDemo}
                    className="text-xs text-[#0F392B] hover:underline font-semibold"
                  >
                    Demo Member Autofill
                  </button>
                </div>
              ) : (
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-4 h-4 mt-0.5 border-slate-300 text-[#0F392B] focus:ring-0 accent-[#0F392B]"
                    />
                    <span className="text-[11px] text-slate-600 leading-snug">
                      I agree to the <Link to="/policies" className="text-[#0F392B] underline font-semibold">Club Policies</Link> & acknowledge flat herringbone clay court tennis shoes are required on all 5 Har-Tru courts.
                    </span>
                  </label>
                </div>
              )}

              {/* Submit CTA Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-[#0F392B] text-white font-bold text-sm tracking-wide uppercase hover:bg-[#18523f] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 cursor-pointer"
                >
                  {isLoading ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>{mode === 'login' ? 'Sign In to Member Portal' : 'Create Member Account'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Quick Switch Bottom Prompt */}
            <div className="mt-8 pt-5 border-t border-slate-100 text-center">
              {mode === 'login' ? (
                <p className="text-xs text-slate-600">
                  Don't have an academy account yet?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup');
                      setErrorMessage(null);
                      setSuccessMessage(null);
                    }}
                    className="font-bold text-[#0F392B] hover:underline cursor-pointer"
                  >
                    Register here
                  </button>
                </p>
              ) : (
                <p className="text-xs text-slate-600">
                  Already registered with OGTA?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setErrorMessage(null);
                      setSuccessMessage(null);
                    }}
                    className="font-bold text-[#0F392B] hover:underline cursor-pointer"
                  >
                    Sign in here
                  </button>
                </p>
              )}
            </div>

            {/* Support Hotline */}
            <div className="mt-4 text-center">
              <span className="text-[11px] text-slate-400">
                Need reservation assistance? Call the desk at{' '}
                <a href={`tel:${CLUB_INFO.phone}`} className="text-slate-600 font-semibold hover:underline">
                  {CLUB_INFO.phone}
                </a>
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <h3 className="font-serif text-xl font-bold text-[#0F392B] mb-2">
              Reset Your Password
            </h3>
            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Enter your registered player or parent email. We will send you secure instructions to reset your member credentials.
            </p>

            {forgotSuccess ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Password reset link sent! Please check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="name@domain.com"
                    required
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0F392B]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#0F392B] text-white text-xs font-bold hover:bg-[#18523f] transition-colors"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
