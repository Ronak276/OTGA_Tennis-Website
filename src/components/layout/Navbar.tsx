import React, { useState, useEffect } from 'react';
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

export const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
  }, [location.pathname]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-medium transition-colors whitespace-nowrap inline-flex items-center shrink-0 ${
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
      {/* Main Navbar - Full width for extreme left logo and right CTAs */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20 gap-4 xl:gap-8">
          {/* Official Horizontal Website Logo - Extreme Left */}
          <Link 
            to="/"
            className="flex items-center text-left group shrink-0 py-1"
          >
            <img 
              src="/images/ogta_logo.png" 
              alt="Old Greenwich Tennis Academy (OGTA)" 
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
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
                className={`px-2.5 xl:px-3 py-2 rounded-lg text-[13px] xl:text-sm font-medium inline-flex items-center gap-1 whitespace-nowrap shrink-0 transition-colors ${
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
                className={`px-2.5 xl:px-3 py-2 rounded-lg text-[13px] xl:text-sm font-medium inline-flex items-center gap-1 whitespace-nowrap shrink-0 transition-colors ${
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
                className={`px-2.5 xl:px-3 py-2 rounded-lg text-[13px] xl:text-sm font-medium inline-flex items-center gap-1 whitespace-nowrap shrink-0 transition-colors ${
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
                className={`px-2.5 xl:px-3 py-2 rounded-lg text-[13px] xl:text-sm font-medium inline-flex items-center gap-1 whitespace-nowrap shrink-0 transition-colors ${
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
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {user ? (
              <div className="inline-flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 whitespace-nowrap">
                  <User className="w-3.5 h-3.5 text-[#0F392B] shrink-0" />
                  <span className="max-w-[140px] truncate">
                    {user.user_metadata?.full_name || user.email?.split('@')[0]}
                  </span>
                </span>
                <button
                  onClick={() => signOut()}
                  title="Sign Out"
                  className="p-2 text-slate-500 hover:text-red-700 hover:bg-red-50 border border-slate-200 transition-colors shrink-0"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#0F392B] hover:bg-slate-50 transition-colors border border-slate-200 whitespace-nowrap shrink-0"
              >
                <User className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Sign In</span>
              </Link>
            )}

            <Link
              to="/book-online"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0F392B] text-white font-medium hover:bg-[#18523f] transition-all text-xs shadow-sm whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-lime-300 shrink-0" />
              <span>Book Point Play ($60)</span>
            </Link>
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
            <Link
              to="/login"
              className="block w-full py-2.5 bg-slate-50 text-slate-800 text-center font-bold text-sm border border-slate-200 hover:bg-slate-100"
            >
              Member Sign In / Register
            </Link>
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
