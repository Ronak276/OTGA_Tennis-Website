import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Download, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { CLUB_INFO, SEASON_COURT_RATES } from '../../data/ogtaData';
import { SeasonCourtCalculator } from '../../components/calculators/SeasonCourtCalculator';

export const SeasonCourtsPage: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-tennis-sand text-tennis-darkGreen border border-gray-200">
            <Layers className="w-3.5 h-3.5 text-tennis-clay" />
            <span>September 10, 2026 to May 7, 2027</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            Season Courts
          </h1>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
            No membership fee – Rates are per court. For cost per person divide total cost by the number of players in your group. Ball package is $250.00.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${CLUB_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-tennis-green text-white font-bold text-xs hover:bg-tennis-forest transition-colors shadow flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-tennis-volt" />
              <span>Call 203-637-3398 to Reserve Court</span>
            </a>
            <a
              href="https://www.oldgreenwichtennisacademy.com/_files/ugd/1c365b_42beca4379c44c0d802e2fe6ec73ca6f.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl border border-gray-200 text-gray-800 font-semibold text-xs hover:bg-gray-50 flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-tennis-clay" />
              <span>Download 2026/27 Brochure (PDF)</span>
            </a>
          </div>
        </div>

        {/* Season Court Dates Callout */}
        <div className="bg-tennis-sand/60 rounded-3xl p-8 border border-gray-200 space-y-3 max-w-4xl mx-auto text-xs sm:text-sm text-gray-700">
          <h2 className="font-serif text-xl font-bold text-tennis-green">
            DATES: 2026/2027 Season
          </h2>
          <div className="space-y-1">
            <div>• Begins: <strong>Thursday, September 10, 2026</strong></div>
            <div>• Ends: <strong>May 7, 2027</strong></div>
            <div>• No season courts: <strong>Thanksgiving Day November 26, 2026</strong></div>
            <div>• Holiday closure: <strong>Thursday, December 24 – Friday January 1, 2027</strong></div>
            <div>• Season courts resume: <strong>Saturday, January 2, 2027</strong></div>
          </div>
        </div>

        {/* Pricing Tables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 1 Hour Table */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-tennis-green text-white p-5 font-serif text-lg font-bold">
              1 Hour Rates
            </div>
            <div className="divide-y divide-gray-100 text-xs sm:text-sm">
              <div className="p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">Monday - Friday</div>
                  <div className="text-gray-500 text-xs">7:00am - 9:00am</div>
                </div>
                <div className="font-bold text-tennis-clay text-lg">$2,900</div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">Monday - Friday</div>
                  <div className="text-gray-500 text-xs">9:00am - 3:30pm</div>
                </div>
                <div className="font-bold text-tennis-clay text-lg">$3,600</div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">Monday - Friday</div>
                  <div className="text-gray-500 text-xs">3:30pm - 10:00pm</div>
                </div>
                <div className="font-bold text-tennis-clay text-lg">$4,000</div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">Saturday - Sunday</div>
                  <div className="text-gray-500 text-xs">8:00am - closing</div>
                </div>
                <div className="font-bold text-tennis-clay text-lg">$4,000</div>
              </div>
            </div>
          </div>

          {/* 1.5 Hours Table */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-tennis-clay text-white p-5 font-serif text-lg font-bold">
              1.5 Hours Rates
            </div>
            <div className="divide-y divide-gray-100 text-xs sm:text-sm">
              <div className="p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">Monday - Friday</div>
                  <div className="text-gray-500 text-xs">7:00am - 9:00am</div>
                </div>
                <div className="font-bold text-tennis-green text-lg">$4,350</div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">Monday - Friday</div>
                  <div className="text-gray-500 text-xs">9:00am - 3:30pm</div>
                </div>
                <div className="font-bold text-tennis-green text-lg">$5,400</div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">Monday - Friday</div>
                  <div className="text-gray-500 text-xs">3:30pm - 10:00pm</div>
                </div>
                <div className="font-bold text-tennis-green text-lg">$6,000</div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">Saturday - Sunday</div>
                  <div className="text-gray-500 text-xs">8:00am - closing</div>
                </div>
                <div className="font-bold text-tennis-green text-lg">$6,000</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Split Calculator */}
        <SeasonCourtCalculator />

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
