import React from 'react';
import { Trophy, Phone, Mail, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';

export const PrivateLessonsPage: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-tennis-sand text-tennis-darkGreen border border-gray-200">
            <Trophy className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Private Instruction & Packages</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            PRIVATE LESSONS
          </h1>

          <div className="text-xs text-gray-500">
            Contact Us Today to Schedule Tennis Lessons! <a href={`tel:${CLUB_INFO.phone}`} className="font-bold text-tennis-green hover:underline">{CLUB_INFO.phone}</a> | <a href={`mailto:${CLUB_INFO.email}`} className="text-tennis-clay hover:underline">{CLUB_INFO.email}</a>
          </div>
        </div>

        {/* Individual Rates Matrix */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-400">Duration</th>
                  <th className="py-3 px-4 font-serif text-lg font-bold text-tennis-green">OGTA Staff Pro</th>
                  <th className="py-3 px-4 font-serif text-lg font-bold text-tennis-clay">Tennis Director</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800">
                <tr>
                  <td className="py-4 px-4 font-semibold">60 Minutes</td>
                  <td className="py-4 px-4 font-bold text-base text-tennis-green">$150.00</td>
                  <td className="py-4 px-4 font-bold text-base text-tennis-clay">$190.00</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">30 Minutes</td>
                  <td className="py-4 px-4 font-bold text-base text-tennis-green">$85.00</td>
                  <td className="py-4 px-4 font-bold text-base text-tennis-clay">$95.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700">
            Additional Player(s) - Add $40 (1hr)
          </div>
        </div>

        {/* Private Lesson Packages (Buy 10 Get 1 Free) */}
        <div className="bg-gradient-to-br from-tennis-sand to-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-luxury space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
              Value Packages
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tennis-darkGreen">
              PRIVATE LESSON PACKAGES
            </h2>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-tennis-clay text-white shadow-sm mt-1">
              Buy 10 Get 1 Free
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-white rounded-2xl border border-gray-200 space-y-1">
              <span className="text-xs text-gray-500 font-medium block">60 Minutes Staff Pro</span>
              <span className="text-xl font-bold text-tennis-green">$1,500.00</span>
              <span className="text-[11px] text-gray-400 block">11 lessons total</span>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gray-200 space-y-1">
              <span className="text-xs text-gray-500 font-medium block">60 Minutes Director of Tennis</span>
              <span className="text-xl font-bold text-tennis-clay">$1,900.00</span>
              <span className="text-[11px] text-gray-400 block">11 lessons total</span>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gray-200 space-y-1">
              <span className="text-xs text-gray-500 font-medium block">30 Minutes Staff Pro</span>
              <span className="text-xl font-bold text-tennis-green">$850.00</span>
              <span className="text-[11px] text-gray-400 block">11 lessons total</span>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gray-200 space-y-1">
              <span className="text-xs text-gray-500 font-medium block">30 Minutes Director of Tennis</span>
              <span className="text-xl font-bold text-tennis-clay">$950.00</span>
              <span className="text-[11px] text-gray-400 block">11 lessons total</span>
            </div>
          </div>

          {/* Cancellation Policy Box */}
          <div className="p-4 bg-red-50/70 border border-red-200/80 rounded-2xl text-xs text-red-900 leading-relaxed">
            <strong>Lesson Cancellation Policy:</strong> 24 hours notice must be given for all cancellations. Late cancellations will be charged in full.
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <a
              href={`tel:${CLUB_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-tennis-green text-white font-bold text-xs hover:bg-tennis-forest transition-colors shadow flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-tennis-volt" />
              <span>Call 203-637-3398 to Book Lesson</span>
            </a>
            <a
              href={`mailto:${CLUB_INFO.email}?subject=Private Tennis Lesson Inquiry`}
              className="px-5 py-3 rounded-xl border border-gray-200 text-gray-800 text-xs font-semibold hover:bg-gray-50 transition-colors"
            >
              Email Us Regarding Times
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
