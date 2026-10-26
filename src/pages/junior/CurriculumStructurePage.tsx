import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, CheckCircle2, Play, ArrowRight } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';

export const CurriculumStructurePage: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-tennis-sand text-tennis-darkGreen border border-gray-200">
            <Trophy className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Philosophy & Progression</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            Curriculum Structure
          </h1>

          <div className="text-xs text-gray-500">
            Contact Us Today to Schedule Tennis Lessons! <a href={`tel:${CLUB_INFO.phone}`} className="font-bold text-tennis-green hover:underline">{CLUB_INFO.phone}</a> | <a href={`mailto:${CLUB_INFO.email}`} className="text-tennis-clay hover:underline">{CLUB_INFO.email}</a>
          </div>
        </div>

        {/* Authentic Content Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
          <div className="p-6 bg-tennis-lightGreen/40 rounded-2xl border border-tennis-green/20 space-y-3">
            <h2 className="font-serif text-2xl font-bold text-tennis-green">
              The Games Based Approach
            </h2>
            <p>
              OGTA uses a <strong>Games Based Approach</strong>. The Games Based Approach focuses on getting students to understand how to play the game first and then uses technique as a tool to get them to perform better.
            </p>
            <p>
              Along with learning clinics during the week, every student has an opportunity (and is encouraged) to play practice matches against other kids of similar level.
            </p>
            <p className="text-xs text-gray-500 italic">
              (view structure below as an example of how our Red Ball and Orange Ball clinics are structured)
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="font-serif text-xl font-bold text-tennis-darkGreen">
              In the learning clinics, students will be able to:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-tennis-green text-white font-bold flex items-center justify-center text-sm">
                  1
                </div>
                <div className="font-bold text-tennis-green text-base">Rally with other students</div>
                <p className="text-xs text-gray-600">Sending and receiving skills, ball tracking, and footwork consistency.</p>
              </div>

              <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-tennis-green text-white font-bold flex items-center justify-center text-sm">
                  2
                </div>
                <div className="font-bold text-tennis-green text-base">Start the point with a serve</div>
                <p className="text-xs text-gray-600">And learn proper return of serve positioning and split step.</p>
              </div>

              <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-tennis-green text-white font-bold flex items-center justify-center text-sm">
                  3
                </div>
                <div className="font-bold text-tennis-green text-base">Play the net</div>
                <p className="text-xs text-gray-600">Approach shots, punch volleys, directional touch, and overheads.</p>
              </div>

              <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-tennis-green text-white font-bold flex items-center justify-center text-sm">
                  4
                </div>
                <div className="font-bold text-tennis-green text-base">Play points</div>
                <p className="text-xs text-gray-600">Play-Practice-Play methodology to build instinctive competitive intelligence.</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/free-assessments"
              className="px-6 py-2.5 rounded-xl border border-tennis-green text-tennis-green font-bold text-xs hover:bg-tennis-lightGreen"
            >
              Request Free Assessment
            </Link>
            <Link
              to="/junior-fall-registration-form"
              className="px-6 py-2.5 rounded-xl bg-tennis-clay text-white font-bold text-xs hover:bg-tennis-clayDark flex items-center gap-1.5 shadow"
            >
              <span>Register for Junior Clinics</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center text-xs text-gray-500 pt-4">
          151 Sound Beach Ave, Old Greenwich CT 203.637.3398 | <a href={`mailto:${CLUB_INFO.email}`} className="text-tennis-clay hover:underline">{CLUB_INFO.email}</a><br />
          Monday, Tuesday, Wednesday, Thursday 8:00-10:00, Friday 8:00am-6:30pm, Saturday and Sunday 8:00am-6:00pm<br />
          ©2026 Old Greenwich Tennis Academy.
        </div>

      </div>
    </div>
  );
};
