import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  ArrowUpRight 
} from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A261D] text-slate-300 border-t border-emerald-950 relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group">
              <div className="bg-white rounded-xl px-4 py-3 inline-block shadow-md group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/ogta_logo.png" 
                  alt="Old Greenwich Tennis Academy (OGTA)" 
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-sans">
              Fairfield County's premier indoor Har-Tru clay tennis facility. Providing championship junior development, dynamic adult clinics, private instruction, seasonal court reservations, and competitive Point Play for over four decades.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime-300 shrink-0 mt-0.5" />
                <span>{CLUB_INFO.address} (At Old Greenwich Train Station)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lime-300 shrink-0" />
                <a href={`tel:${CLUB_INFO.phone}`} className="hover:text-white transition-colors">
                  {CLUB_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-lime-300 shrink-0" />
                <a href={`mailto:${CLUB_INFO.email}`} className="hover:text-white transition-colors">
                  {CLUB_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Junior & Adult Programs */}
          <div>
            <h4 className="font-serif text-white text-base font-semibold mb-4 tracking-wide border-b border-emerald-900 pb-2">
              Junior Tennis
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/juniorprograms" className="hover:text-lime-300 transition-colors">
                  Junior Programs Hub
                </Link>
              </li>
              <li>
                <Link to="/fall-clinics" className="hover:text-lime-300 transition-colors">
                  Fall Clinics (16 Weeks)
                </Link>
              </li>
              <li>
                <Link to="/winter-clinics" className="hover:text-lime-300 transition-colors">
                  Winter Clinics (18 Weeks)
                </Link>
              </li>
              <li>
                <Link to="/cirriculum-structure" className="hover:text-lime-300 transition-colors">
                  Curriculum Structure
                </Link>
              </li>
              <li>
                <Link to="/free-assessments" className="hover:text-lime-300 transition-colors font-medium text-emerald-300">
                  Free Level Assessments
                </Link>
              </li>
              <li>
                <Link to="/junior-fall-registration-form" className="hover:text-lime-300 transition-colors font-medium text-[#C85A32]">
                  Junior Registration Form
                </Link>
              </li>
              <li>
                <Link to="/private-lessons" className="hover:text-lime-300 transition-colors">
                  Private & Semi-Private Lessons
                </Link>
              </li>
            </ul>
          </div>

          {/* Adult Programs & Court Rentals */}
          <div>
            <h4 className="font-serif text-white text-base font-semibold mb-4 tracking-wide border-b border-emerald-900 pb-2">
              Adults & Courts
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/adultprograms" className="hover:text-lime-300 transition-colors">
                  Adult Programs Hub
                </Link>
              </li>
              <li>
                <Link to="/adult-clinics" className="hover:text-lime-300 transition-colors">
                  Adult Clinics (1.0 – 4.0+)
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-lime-300 transition-colors font-medium text-lime-300">
                  Weekly Point Play ($60)
                </Link>
              </li>
              <li>
                <Link to="/usta-adult-teams" className="hover:text-lime-300 transition-colors">
                  USTA League Teams
                </Link>
              </li>
              <li>
                <Link to="/self-rating-guide" className="hover:text-lime-300 transition-colors">
                  NTRP Self-Rating Guide
                </Link>
              </li>
              <li>
                <Link to="/seasoncourts" className="hover:text-lime-300 transition-colors">
                  Season Court Leases
                </Link>
              </li>
              <li>
                <Link to="/hourly-rentals" className="hover:text-lime-300 transition-colors">
                  Hourly Open Court ($90/hr)
                </Link>
              </li>
              <li>
                <Link to="/evening-rental" className="hover:text-lime-300 transition-colors">
                  Weekend Evening Buyout ($850)
                </Link>
              </li>
            </ul>
          </div>

          {/* Club Info & Pro Shop */}
          <div>
            <h4 className="font-serif text-white text-base font-semibold mb-4 tracking-wide border-b border-emerald-900 pb-2">
              Club & Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-lime-300 transition-colors">
                  About Our Club
                </Link>
              </li>
              <li>
                <Link to="/meet-the-staff" className="hover:text-lime-300 transition-colors">
                  Meet the Staff & Pros
                </Link>
              </li>
              <li>
                <Link to="/pro-shop" className="hover:text-lime-300 transition-colors">
                  Susi O's Pro Shop & 24hr Stringing
                </Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-lime-300 transition-colors">
                  Club Policies & Clay Footwear
                </Link>
              </li>
              <li>
                <Link to="/coach-resources" className="hover:text-lime-300 transition-colors">
                  Coach Resources
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-lime-300 transition-colors">
                  Contact Us & Directions
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-emerald-900/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Hours of Operation
              </span>
              <p className="text-xs text-slate-300">
                Mon – Fri: 7:00 AM – 10:00 PM<br />
                Sat – Sun: 7:00 AM – 9:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Old Greenwich Tennis Academy (OGTA). All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/policies" className="hover:text-white transition-colors">
              Privacy & Policies
            </Link>
            <Link to="/contact-us" className="hover:text-white transition-colors">
              Facility Location
            </Link>
            <Link to="/free-assessments" className="hover:text-white transition-colors">
              Assessment Booking
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
