import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, CheckCircle2, ChevronRight, ArrowRight, Phone, Mail } from 'lucide-react';
import { JUNIOR_CLINICS, CLUB_INFO } from '../../data/ogtaData';

export const JuniorProgramsPage: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-tennis-clayLight text-tennis-clayDark border border-tennis-clay/30">
            <Trophy className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Greenwich Junior Tennis</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            JUNIOR PROGRAMS
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Junior Tennis Clinics, Lessons, Camps, Private Lessons in Greenwich, Connecticut.
          </p>
          <div className="pt-2 text-xs text-gray-500">
            Contact Us Today to Schedule Tennis Lessons! <a href={`tel:${CLUB_INFO.phone}`} className="font-bold text-tennis-green hover:underline">{CLUB_INFO.phone}</a> | <a href={`mailto:${CLUB_INFO.email}`} className="text-tennis-clay hover:underline">{CLUB_INFO.email}</a>
          </div>
        </div>

        {/* Quick Links Menu Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs font-bold">
          <Link to="/fall-clinics" className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-tennis-clay text-tennis-clay transition-colors shadow-sm">
            Fall Clinics
          </Link>
          <Link to="/winter-clinics" className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-tennis-clay text-tennis-clay transition-colors shadow-sm">
            Winter Clinics
          </Link>
          <Link to="/junior-fall-registration-form" className="px-4 py-2 rounded-xl bg-tennis-clay text-white hover:bg-tennis-clayDark transition-colors shadow-sm">
            Junior Fall Registration Form
          </Link>
          <Link to="/cirriculum-structure" className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-tennis-green text-tennis-green transition-colors shadow-sm">
            Curriculum Structure
          </Link>
          <Link to="/free-assessments" className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-tennis-green text-tennis-green transition-colors shadow-sm">
            Free Assessments
          </Link>
          <Link to="/private-lessons" className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-tennis-green text-tennis-green transition-colors shadow-sm">
            Private Lessons
          </Link>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay">Session 1</span>
            <h2 className="font-serif text-2xl font-bold text-tennis-green">
              Junior Fall Clinics
            </h2>
            <p className="text-sm text-gray-600">
              September 10, 2026 to January 8, 2027. Red Ball 1 & 2, Orange Ball, Green Ball, Yellow Ball, and High Performance.
            </p>
            <div className="pt-2">
              <Link to="/fall-clinics" className="inline-flex items-center gap-1.5 text-xs font-bold text-tennis-clay hover:underline">
                <span>View Full Fall Clinic Schedules & Tuition</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay">Session 2</span>
            <h2 className="font-serif text-2xl font-bold text-tennis-green">
              Junior Winter Clinics
            </h2>
            <p className="text-sm text-gray-600">
              January 11, 2027 to May 2, 2027. Progressive age-appropriate instruction across 16 weeks of winter indoor clay training.
            </p>
            <div className="pt-2">
              <Link to="/winter-clinics" className="inline-flex items-center gap-1.5 text-xs font-bold text-tennis-clay hover:underline">
                <span>View Full Winter Clinic Schedules & Tuition</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="p-8 rounded-3xl bg-tennis-sand/70 border border-gray-200 text-center space-y-3">
          <h3 className="font-serif text-2xl font-bold text-tennis-green">Ready to Enroll?</h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
            Fill out our online junior registration form to reserve your child's spot. We will follow up via phone for level confirmation and payment.
          </p>
          <div className="pt-2">
            <Link
              to="/junior-fall-registration-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-tennis-clay text-white font-bold text-xs hover:bg-tennis-clayDark transition-colors shadow"
            >
              <span>Go to Online Junior Registration Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
