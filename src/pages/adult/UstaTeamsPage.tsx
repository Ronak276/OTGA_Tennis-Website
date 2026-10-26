import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Trophy, Mail, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';

export const UstaTeamsPage: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-tennis-sand text-tennis-darkGreen border border-gray-200">
            <Trophy className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Competitive Adult Tennis Leagues</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            USTA Adult Teams
          </h1>

          <div className="text-xs text-gray-500">
            Contact Us Today to Schedule Tennis Lessons! <a href={`tel:${CLUB_INFO.phone}`} className="font-bold text-tennis-green hover:underline">{CLUB_INFO.phone}</a> | <a href={`mailto:${CLUB_INFO.email}`} className="text-tennis-clay hover:underline">{CLUB_INFO.email}</a>
          </div>
        </div>

        {/* Authentic Content Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Joining a team is a great opportunity to meet and compete against your neighbors and peers. OGTA offers team tennis for players of all levels starting <strong>2.5 through 4.0</strong>.
          </p>

          <p className="leading-relaxed">
            Our teams practice locally in Fairfield & Westchester County. <a href="mailto:darren@oldgreenwichtennisacademy.com?subject=USTA Team Tennis" className="font-bold text-tennis-clay hover:underline">Darren</a> also runs the Town of Greenwich 3.0/3.5 team that competes in the Fairfield County summer league. Please contact Darren if you’re interested!
          </p>

          <div className="p-6 bg-tennis-lightGreen/50 rounded-2xl border border-tennis-green/20 space-y-3">
            <h3 className="font-serif text-xl font-bold text-tennis-green">
              Team Highlights & Eligibility:
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tennis-clay shrink-0" />
                <span>NTRP brackets: 2.5, 3.0, 3.5, and 4.0 teams</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tennis-clay shrink-0" />
                <span>Local practices and home matches held on our 5 indoor Har-Tru clay courts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tennis-clay shrink-0" />
                <span>Fairfield County and Westchester County inter-club competitions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tennis-clay shrink-0" />
                <span>Directed by USPTA Elite Pro Darren Lavallee</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <a
              href="mailto:darren@oldgreenwichtennisacademy.com?subject=USTA Team Tennis"
              className="px-6 py-3 rounded-xl bg-tennis-clay text-white font-bold text-xs hover:bg-tennis-clayDark transition-colors shadow flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Darren About Joining A Team</span>
            </a>
            <a
              href={`tel:${CLUB_INFO.phone}`}
              className="px-5 py-3 rounded-xl border border-gray-200 text-gray-800 text-xs font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-tennis-green" />
              <span>Call 203-637-3398</span>
            </a>
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
