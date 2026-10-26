import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Trophy, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';

export const AdultProgramsPage: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-tennis-lightGreen text-tennis-green border border-tennis-green/20">
            <Users className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Greenwich Adult Tennis</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            ADULT PROGRAMS
          </h1>

          <p className="text-base text-gray-600 leading-relaxed">
            Progressive clinic tracks from 1.0 Beginner to 4.0 Advanced, Point Play sessions, and competitive USTA teams on indoor Har-Tru clay.
          </p>

          <div className="pt-2 text-xs text-gray-500">
            Contact Us Today to Schedule Tennis Lessons! <a href={`tel:${CLUB_INFO.phone}`} className="font-bold text-tennis-green hover:underline">{CLUB_INFO.phone}</a> | <a href={`mailto:${CLUB_INFO.email}`} className="text-tennis-clay hover:underline">{CLUB_INFO.email}</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs font-bold">
          <Link to="/adult-clinics" className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-tennis-green text-tennis-green transition-colors shadow-sm">
            Fall Clinics
          </Link>
          <Link to="/adult-fall-registration-form" className="px-4 py-2 rounded-xl bg-tennis-green text-white hover:bg-tennis-forest transition-colors shadow-sm">
            Adult Fall Registration Form
          </Link>
          <Link to="/usta-adult-teams" className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-tennis-green text-tennis-green transition-colors shadow-sm">
            USTA Adult Teams
          </Link>
          <Link to="/self-rating-guide" className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-tennis-clay text-tennis-clay transition-colors shadow-sm">
            Self Rating Guide
          </Link>
          <Link to="/private-lessons-1" className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-tennis-green text-tennis-green transition-colors shadow-sm">
            Private Lessons
          </Link>
          <Link to="/signup" className="px-4 py-2 rounded-xl bg-tennis-volt text-tennis-darkGreen hover:bg-tennis-voltHover transition-colors shadow-sm">
            Point Play Clinics ($60)
          </Link>
        </div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-serif text-2xl font-bold text-tennis-green">
              Adult Group Clinics
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Covering everything from serve and volley to technical groundstroke work, from singles or doubles strategy to proper footwork.
            </p>
            <Link to="/adult-clinics" className="inline-flex items-center gap-1.5 text-xs font-bold text-tennis-green hover:underline">
              <span>View Clinic Schedule & Levels</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-serif text-2xl font-bold text-tennis-green">
              Point Play Matchplay
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Coach-fed situational points with continuous doubles rotation. Fast-paced cardio workout with zero long-term commitment.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-1.5 text-xs font-bold text-tennis-clay hover:underline">
              <span>Book Online ($60 / 1.5 hr)</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-serif text-2xl font-bold text-tennis-green">
              USTA League Teams
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Represent OGTA in Fairfield and Westchester County leagues. Competitive team practices and match play for 2.5 to 4.0 players.
            </p>
            <Link to="/usta-adult-teams" className="inline-flex items-center gap-1.5 text-xs font-bold text-tennis-green hover:underline">
              <span>Learn About Our Teams</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center text-xs text-gray-500 pt-8 border-t border-gray-100">
          151 Sound Beach Ave, Old Greenwich CT 203.637.3398 | <a href={`mailto:${CLUB_INFO.email}`} className="text-tennis-clay hover:underline">{CLUB_INFO.email}</a><br />
          Monday, Tuesday, Wednesday, Thursday 8:00-10:00, Friday 8:00am-6:30pm, Saturday and Sunday 8:00am-6:00pm<br />
          ©2026 Old Greenwich Tennis Academy.
        </div>

      </div>
    </div>
  );
};
