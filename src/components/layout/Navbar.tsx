import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,
  Trophy,
  ArrowRight,
  Calendar,
  Users,
  Clock,
  ShieldCheck,
  ShoppingBag,
  User,
  LogOut
} from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';
import { useAuth } from '../../context/AuthContext';
import { useSiteContent } from '../../context/SiteContentContext';

export const Navbar: React.FC = () => {
  const { user, profile, signOut } = useAuth();
  const { announcement } = useSiteContent();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setUserMenuOpen(false);
  }, [location.pathname]);

  // Close user dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const displayName = profile?.full_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Member';

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-1.5 xl:px-2.5 2xl:px-3.5 py-1.5 xl:py-2 text-[12px] xl:text-[13px] 2xl:text-sm font-medium transition-colors whitespace-nowrap inline-flex items-center shrink-0 rounded-lg ${
      isActive
        ? 'text-[#0F392B] bg-emerald-50 font-bold'
        : 'text-slate-700 hover:text-[#0F392B] hover:bg-slate-50'
    }`;

  const isJuniorActive = [
    '/juniorprograms',
    '/fall-clinics',
    '/winter-clinics',
    '/junior-fall-registration-form',
    '/junior-registration',
    '/cirriculum-structure',
    '/curriculum-structure',
    '/free-assessments',
  ].some((path) => location.pathname.startsWith(path));

  const isAdultActive = [
    '/adultprograms',
    '/adult-clinics',
    '/adult-fall-registration-form',
    '/adult-registration',
    '/usta-adult-teams',
    '/self-rating-guide',
  ].some((path) => location.pathname.startsWith(path));

  const isRentalsActive = [
    '/courtrentals',
    '/court-rentals',
    '/seasoncourts',
    '/season-courts',
    '/hourly-rentals',
    '/evening-rental',
  ].some((path) => location.pathname.startsWith(path));

  const isAboutActive = [
    '/about',
    '/meet-the-staff',
    '/staff',
    '/pro-shop',
    '/policies',
    '/coach-resources',
    '/contact-us',
    '/contact',
  ].some((path) => location.pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-slate-200/80 shadow-sm">
      {/* Dynamic Top Announcement Strip (Controlled by CMS) */}
      {announcement.enabled && announcement.message && (
        <div className="bg-[#0F392B] text-white py-1.5 px-4 text-xs font-medium text-center flex items-center justify-center gap-2 border-b border-emerald-950">
          {announcement.badge && (
            <span className="px-2 py-0.5 text-[10px] font-bold bg-[#D8F231] text-[#0F392B] shrink-0">
              {announcement.badge}
            </span>
          )}
          <span className="truncate">{announcement.message}</span>
          {announcement.ctaText && (
            <Link to={announcement.ctaLink || '/courtrentals'} className="underline font-bold text-[#D8F231] hover:text-white ml-1 shrink-0">
              {announcement.ctaText} →
            </Link>
          )}
        </div>
      )}

      {/* Main Navbar - Full width for extreme left logo and right CTAs */}
      <div className="w-full px-4 sm:px-6 lg:px-4 xl:px-6 2xl:px-10">
        <div className="flex items-center justify-between h-20 gap-2 xl:gap-4 2xl:gap-8">
          {/* Official Horizontal Website Logo - Extreme Left */}
          <Link 
            to="/"
            className="flex items-center text-left group shrink-0 py-1"
          >
            <img 
              src="/images/ogta_logo.png" 
              alt="Old Greenwich Tennis Academy (OGTA)" 
              className="h-9 xl:h-11 2xl:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2 shrink-0">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            {/* Junior Programs Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('juniors')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-1.5 xl:px-2.5 2xl:px-3 py-1.5 xl:py-2 rounded-lg text-[12px] xl:text-[13px] 2xl:text-sm font-medium inline-flex items-center gap-0.5 xl:gap-1 whitespace-nowrap shrink-0 transition-colors ${
                  isJuniorActive
                    ? 'text-[#0F392B] bg-emerald-50 font-bold'
                    : 'text-slate-700 hover:text-[#0F392B] hover:bg-slate-50'
                }`}
              >
                <span>Junior Programs</span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:rotate-180 text-slate-500" />
              </button>

              {activeDropdown === 'juniors' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200/80 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32]">Junior Pathways (Ages 4-17)</p>
                  </div>
                  <Link
                    to="/juniorprograms"
                    className="block px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    Junior Programs Overview
                  </Link>
                  <Link
                    to="/fall-clinics"
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B] flex items-center justify-between"
                  >
                    <span>Fall Clinics</span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">16 Wks</span>
                  </Link>
                  <Link
                    to="/winter-clinics"
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B] flex items-center justify-between"
                  >
                    <span>Winter Clinics</span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">18 Wks</span>
                  </Link>
                  <Link
                    to="/cirriculum-structure"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    Curriculum Structure & Philosophy
                  </Link>
                  <Link
                    to="/free-assessments"
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B] flex items-center justify-between"
                  >
                    <span>Free Level Assessment</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Free</span>
                  </Link>
                  <Link
                    to="/private-lessons"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    Private Lessons & 10-Packs
                  </Link>
                  <div className="pt-2 px-3 pb-1 border-t border-slate-100 mt-1">
                    <Link
                      to="/junior-fall-registration-form"
                      className="w-full py-2 px-3 text-xs font-bold rounded-xl bg-[#C85A32] text-white hover:bg-[#b04a25] transition-colors flex items-center justify-center gap-1 shadow-sm"
                    >
                      <span>Junior Online Registration</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Adult Programs Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('adults')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-1.5 xl:px-2.5 2xl:px-3 py-1.5 xl:py-2 rounded-lg text-[12px] xl:text-[13px] 2xl:text-sm font-medium inline-flex items-center gap-0.5 xl:gap-1 whitespace-nowrap shrink-0 transition-colors ${
                  isAdultActive
                    ? 'text-[#0F392B] bg-emerald-50 font-bold'
                    : 'text-slate-700 hover:text-[#0F392B] hover:bg-slate-50'
                }`}
              >
                <span>Adult Programs</span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:rotate-180 text-slate-500" />
              </button>

              {activeDropdown === 'adults' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200/80 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32]">Adult Clinics & Leagues</p>
                  </div>
                  <Link
                    to="/adultprograms"
                    className="block px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    Adult Programs Overview
                  </Link>
                  <Link
                    to="/adult-clinics"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    Adult Clinics (1.0 – 4.0+)
                  </Link>
                  <Link
                    to="/usta-adult-teams"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    USTA Adult League Teams
                  </Link>
                  <Link
                    to="/self-rating-guide"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    NTRP Self-Rating Guide
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B] flex items-center justify-between"
                  >
                    <span>Weekly Point Play</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">$60</span>
                  </Link>
                  <div className="pt-2 px-3 pb-1 border-t border-slate-100 mt-1">
                    <Link
                      to="/adult-fall-registration-form"
                      className="w-full py-2 px-3 text-xs font-bold rounded-xl bg-[#0F392B] text-white hover:bg-[#18523f] transition-colors flex items-center justify-center gap-1 shadow-sm"
                    >
                      <span>Adult Online Registration</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Court Rentals Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('rentals')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-1.5 xl:px-2.5 2xl:px-3 py-1.5 xl:py-2 rounded-lg text-[12px] xl:text-[13px] 2xl:text-sm font-medium inline-flex items-center gap-0.5 xl:gap-1 whitespace-nowrap shrink-0 transition-colors ${
                  isRentalsActive
                    ? 'text-[#0F392B] bg-emerald-50 font-bold'
                    : 'text-slate-700 hover:text-[#0F392B] hover:bg-slate-50'
                }`}
              >
                <span>Court Rentals</span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:rotate-180 text-slate-500" />
              </button>

              {activeDropdown === 'rentals' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200/80 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32]">Har-Tru Court Options</p>
                  </div>
                  <Link
                    to="/courtrentals"
                    className="block px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    Court Rentals Overview
                  </Link>
                  <Link
                    to="/seasoncourts"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    Season Courts (Guaranteed Weekly)
                  </Link>
                  <Link
                    to="/hourly-rentals"
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B] flex items-center justify-between"
                  >
                    <span>Hourly Open Play</span>
                    <span className="text-[10px] bg-slate-100 text-slate-800 font-bold px-1.5 py-0.5 rounded">$90/hr</span>
                  </Link>
                  <Link
                    to="/evening-rental"
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B] flex items-center justify-between"
                  >
                    <span>Sat & Sun Evening Buyout</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">$850</span>
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-1.5 xl:px-2.5 2xl:px-3 py-1.5 xl:py-2 rounded-lg text-[12px] xl:text-[13px] 2xl:text-sm font-medium inline-flex items-center gap-0.5 xl:gap-1 whitespace-nowrap shrink-0 transition-colors ${
                  isAboutActive
                    ? 'text-[#0F392B] bg-emerald-50 font-bold'
                    : 'text-slate-700 hover:text-[#0F392B] hover:bg-slate-50'
                }`}
              >
                <span>About</span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:rotate-180 text-slate-500" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full right-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200/80 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32]">Our Club & Staff</p>
                  </div>
                  <Link
                    to="/about"
                    className="block px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    About OGTA
                  </Link>
                  <Link
                    to="/meet-the-staff"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    Meet the Staff & Pros
                  </Link>
                  <Link
                    to="/pro-shop"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    Susi O's Pro Shop & Stringing
                  </Link>
                  <Link
                    to="/policies"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    Club Policies & Clay Footwear
                  </Link>
                  <Link
                    to="/coach-resources"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    Coach Resources
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B]"
                  >
                    Contact & Directions
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Book Online Tab */}
            <NavLink to="/book-online" className={navLinkClass}>
              Book Online
            </NavLink>

            {/* Direct Contact Tab */}
            <NavLink to="/contact-us" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop Right CTA - Extreme Right */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3 shrink-0">
            {!user && (
              <Link
                to="/login"
                className="inline-flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-[11px] xl:text-xs font-semibold text-slate-700 hover:text-[#0F392B] hover:bg-slate-50 transition-colors border border-slate-200 rounded whitespace-nowrap shrink-0"
              >
                <User className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Sign In</span>
              </Link>
            )}

            <Link
              to="/book-online"
              className="inline-flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3.5 py-1.5 xl:py-2 bg-[#0F392B] text-white font-medium hover:bg-[#18523f] transition-all text-[11px] xl:text-xs shadow-sm whitespace-nowrap shrink-0 rounded"
            >
              <Calendar className="w-3.5 h-3.5 text-lime-300 shrink-0" />
              <span>Book Point Play ($60)</span>
            </Link>

            {user && (
              <div ref={userMenuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 xl:py-2 text-[11px] xl:text-xs font-semibold text-slate-700 hover:text-[#0F392B] hover:bg-slate-50 transition-colors border border-slate-200 rounded whitespace-nowrap shrink-0 cursor-pointer"
                  aria-expanded={userMenuOpen}
                  aria-haspopup="true"
                >
                  <User className="w-3.5 h-3.5 text-[#0F392B] shrink-0" />
                  <span className="max-w-[85px] xl:max-w-[130px] truncate text-slate-800">
                    {displayName}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      userMenuOpen ? 'rotate-180 text-[#0F392B]' : ''
                    }`}
                  />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 sm:w-64 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3.5 py-2.5 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-[#0F392B] flex items-center justify-center shrink-0">
                          <User className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-slate-900 truncate">
                            {displayName}
                          </p>
                          <p className="text-[11px] text-slate-500 truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      {profile?.role && profile.role !== 'customer' && (
                        <span className="inline-block mt-2 px-2 py-0.5 text-[9px] uppercase tracking-wider font-extrabold rounded bg-emerald-100 text-[#0F392B]">
                          {profile.role}
                        </span>
                      )}
                    </div>

                    <div className="py-1">
                      <Link
                        to="/profile"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-emerald-50 hover:text-[#0F392B] transition-colors border-b border-slate-100/80 mb-1"
                      >
                        <User className="w-3.5 h-3.5 text-[#0F392B]" />
                        <span>Profile & Settings</span>
                      </Link>
                      <Link
                        to="/book-online"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3.5 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B] transition-colors"
                      >
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>Book Point Play ($60)</span>
                      </Link>
                      <Link
                        to="/courtrentals"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3.5 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B] transition-colors"
                      >
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>Court Rentals</span>
                      </Link>
                      <Link
                        to="/contact-us"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3.5 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-[#0F392B] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-500" />
                        <span>Contact & Directions</span>
                      </Link>
                    </div>

                    <div className="border-t border-slate-100 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setUserMenuOpen(false);
                          signOut();
                        }}
                        className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors text-left"
                      >
                        <LogOut className="w-3.5 h-3.5 text-red-500" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {user ? (
              <button
                onClick={() => signOut()}
                className="px-2.5 py-1.5 border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 flex items-center gap-1"
              >
                <LogOut className="w-3 h-3 text-red-600" />
                <span>Sign Out</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="px-2.5 py-1.5 border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50"
              >
                Sign In
              </Link>
            )}
            <Link
              to="/book-online"
              className="px-3 py-1.5 bg-[#0F392B] text-white text-xs font-semibold"
            >
              Book Play
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0F392B] hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            className="block py-2 text-base font-semibold text-slate-900 hover:text-[#0F392B]"
          >
            Home
          </Link>

          {/* Junior Section Mobile */}
          <div className="border-t border-slate-100 pt-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-2">Junior Programs</p>
            <div className="pl-2 space-y-2 text-sm">
              <Link to="/juniorprograms" className="block text-slate-700 hover:text-[#0F392B]">Overview</Link>
              <Link to="/fall-clinics" className="block text-slate-700 hover:text-[#0F392B]">Fall Clinics</Link>
              <Link to="/winter-clinics" className="block text-slate-700 hover:text-[#0F392B]">Winter Clinics</Link>
              <Link to="/junior-fall-registration-form" className="block font-semibold text-[#C85A32]">Junior Registration Form</Link>
              <Link to="/cirriculum-structure" className="block text-slate-700 hover:text-[#0F392B]">Curriculum Structure</Link>
              <Link to="/free-assessments" className="block text-emerald-800 font-semibold">Free Assessments</Link>
              <Link to="/private-lessons" className="block text-slate-700 hover:text-[#0F392B]">Private Lessons</Link>
            </div>
          </div>

          {/* Adult Section Mobile */}
          <div className="border-t border-slate-100 pt-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-2">Adult Programs</p>
            <div className="pl-2 space-y-2 text-sm">
              <Link to="/adultprograms" className="block text-slate-700 hover:text-[#0F392B]">Overview</Link>
              <Link to="/adult-clinics" className="block text-slate-700 hover:text-[#0F392B]">Adult Clinics</Link>
              <Link to="/adult-fall-registration-form" className="block font-semibold text-[#0F392B]">Adult Registration Form</Link>
              <Link to="/usta-adult-teams" className="block text-slate-700 hover:text-[#0F392B]">USTA Teams</Link>
              <Link to="/self-rating-guide" className="block text-slate-700 hover:text-[#0F392B]">Self-Rating Guide</Link>
            </div>
          </div>

          {/* Court Rentals Mobile */}
          <div className="border-t border-slate-100 pt-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-2">Court Rentals</p>
            <div className="pl-2 space-y-2 text-sm">
              <Link to="/courtrentals" className="block text-slate-700 hover:text-[#0F392B]">Overview</Link>
              <Link to="/seasoncourts" className="block text-slate-700 hover:text-[#0F392B]">Season Courts</Link>
              <Link to="/hourly-rentals" className="block text-slate-700 hover:text-[#0F392B]">Hourly Rentals ($90/hr)</Link>
              <Link to="/evening-rental" className="block text-slate-700 hover:text-[#0F392B]">Evening Buyout ($850)</Link>
            </div>
          </div>

          {/* About Mobile */}
          <div className="border-t border-slate-100 pt-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-2">About & Services</p>
            <div className="pl-2 space-y-2 text-sm">
              <Link to="/about" className="block text-slate-700 hover:text-[#0F392B]">About OGTA</Link>
              <Link to="/meet-the-staff" className="block text-slate-700 hover:text-[#0F392B]">Meet the Staff</Link>
              <Link to="/pro-shop" className="block text-slate-700 hover:text-[#0F392B]">Susi O's Pro Shop</Link>
              <Link to="/policies" className="block text-slate-700 hover:text-[#0F392B]">Club Policies</Link>
              <Link to="/coach-resources" className="block text-slate-700 hover:text-[#0F392B]">Coach Resources</Link>
              <Link to="/contact-us" className="block text-slate-700 hover:text-[#0F392B]">Contact Us</Link>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-4 space-y-2.5">
            {user ? (
              <div className="space-y-2">
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-2.5 bg-emerald-50 text-[#0F392B] text-center font-bold text-sm border border-emerald-200 rounded"
                >
                  My Profile & Settings ({displayName})
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut();
                  }}
                  className="block w-full py-2 text-red-600 text-center font-semibold text-xs hover:bg-red-50 rounded cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-2.5 bg-slate-50 text-slate-800 text-center font-bold text-sm border border-slate-200 hover:bg-slate-100 rounded"
              >
                Member Sign In / Register
              </Link>
            )}
            <Link
              to="/book-online"
              className="block w-full py-2.5 bg-[#0F392B] text-white text-center font-bold text-sm hover:bg-[#18523f]"
            >
              Book Weekly Point Play ($60)
            </Link>
            <Link
              to="/free-assessments"
              className="block w-full py-2.5 bg-emerald-50 text-[#0F392B] text-center font-bold text-sm border border-emerald-200"
            >
              Book Free Junior Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
