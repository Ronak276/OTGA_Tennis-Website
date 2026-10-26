import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, CheckCircle2, Download, Phone, Calendar, ArrowRight } from 'lucide-react';
import { CLUB_INFO, SEASON_COURT_RATES } from '../../data/ogtaData';
import { SeasonCourtCalculator } from '../../components/calculators/SeasonCourtCalculator';

export const CourtRentalsPage: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-tennis-sand text-tennis-darkGreen border border-gray-200">
            <Layers className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Greenwich Indoor Tennis Facility</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            COURT RENTALS
          </h1>

          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Five indoor championship Har-Tru tennis courts available for seasonal contracts, hourly open play, and full club private weekend rentals.
          </p>

          <div className="pt-2 text-xs text-gray-500">
            Contact Us Today to Schedule Tennis Lessons! <a href={`tel:${CLUB_INFO.phone}`} className="font-bold text-tennis-green hover:underline">{CLUB_INFO.phone}</a> | <a href={`mailto:${CLUB_INFO.email}`} className="text-tennis-clay hover:underline">{CLUB_INFO.email}</a>
          </div>
        </div>

        {/* Quick Links Menu Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs font-bold">
          <Link to="/seasoncourts" className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-tennis-clay text-tennis-clay transition-colors shadow-sm">
            Season Courts
          </Link>
          <Link to="/hourly-rentals" className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-tennis-green text-tennis-green transition-colors shadow-sm">
            Hourly Rentals
          </Link>
          <Link to="/evening-rental" className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-tennis-green text-tennis-green transition-colors shadow-sm">
            Saturday / Sunday Full Club Party Rental
          </Link>
          <a
            href="https://www.oldgreenwichtennisacademy.com/_files/ugd/1c365b_42beca4379c44c0d802e2fe6ec73ca6f.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-tennis-green text-white hover:bg-tennis-forest transition-colors shadow-sm flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-tennis-volt" />
            <span>Download Season Court Brochure</span>
          </a>
        </div>

        {/* Club Amenities Checklist (Exact from OGTA) */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="font-serif text-2xl font-bold text-tennis-darkGreen">
            Facility Features:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-tennis-clay shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">5 indoor Har-Tru championship tennis courts</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-tennis-clay shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Spacious lounge with viewing area</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-tennis-clay shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Dressing rooms with showers and towels</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-tennis-clay shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Skilled Pros offer group and private lessons</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-tennis-clay shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Complete Pro Shop and stringing service</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-tennis-clay shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">A small service kitchen</span>
            </div>
          </div>
        </div>

        {/* 2026/2027 SEASON (Exact Text & Matrix) */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl font-bold text-tennis-green">
              2026/2027 SEASON
            </h2>
            <p className="text-sm text-gray-700">
              No membership fee – Rates are per court. For cost per person divide total cost by the number of players in your group. Ball package is $250.00.
            </p>
            <div className="p-4 bg-tennis-sand/60 rounded-2xl border border-gray-200 text-xs text-gray-700 space-y-1">
              <div className="font-bold text-tennis-green">DATES: 2026/2027 Season</div>
              <div>Begins: Thursday, September 10, 2026 • Ends: May 7, 2027</div>
              <div>No season courts: Thanksgiving Day November 26, 2026</div>
              <div>Thursday, December 24 – Friday January 1, 2027</div>
              <div>Season courts resume Saturday, January 2, 2027</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1 Hour Table */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-tennis-green text-white p-4 font-bold text-sm">
                1 Hour Season Rates
              </div>
              <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                <div className="p-4 flex justify-between">
                  <div>
                    <div className="font-bold text-gray-900">Monday - Friday</div>
                    <div className="text-gray-500">7:00am - 9:00am</div>
                  </div>
                  <div className="font-bold text-tennis-clay text-base">$2,900</div>
                </div>
                <div className="p-4 flex justify-between">
                  <div>
                    <div className="font-bold text-gray-900">Monday - Friday</div>
                    <div className="text-gray-500">9:00am - 3:30pm</div>
                  </div>
                  <div className="font-bold text-tennis-clay text-base">$3,600</div>
                </div>
                <div className="p-4 flex justify-between">
                  <div>
                    <div className="font-bold text-gray-900">Monday - Friday</div>
                    <div className="text-gray-500">3:30pm - 10:00pm</div>
                  </div>
                  <div className="font-bold text-tennis-clay text-base">$4,000</div>
                </div>
                <div className="p-4 flex justify-between">
                  <div>
                    <div className="font-bold text-gray-900">Saturday - Sunday</div>
                    <div className="text-gray-500">8:00am - closing</div>
                  </div>
                  <div className="font-bold text-tennis-clay text-base">$4,000</div>
                </div>
              </div>
            </div>

            {/* 1.5 Hours Table */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-tennis-clay text-white p-4 font-bold text-sm">
                1.5 Hours Season Rates
              </div>
              <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                <div className="p-4 flex justify-between">
                  <div>
                    <div className="font-bold text-gray-900">Monday - Friday</div>
                    <div className="text-gray-500">7:00am - 9:00am</div>
                  </div>
                  <div className="font-bold text-tennis-green text-base">$4,350</div>
                </div>
                <div className="p-4 flex justify-between">
                  <div>
                    <div className="font-bold text-gray-900">Monday - Friday</div>
                    <div className="text-gray-500">9:00am - 3:30pm</div>
                  </div>
                  <div className="font-bold text-tennis-green text-base">$5,400</div>
                </div>
                <div className="p-4 flex justify-between">
                  <div>
                    <div className="font-bold text-gray-900">Monday - Friday</div>
                    <div className="text-gray-500">3:30pm - 10:00pm</div>
                  </div>
                  <div className="font-bold text-tennis-green text-base">$6,000</div>
                </div>
                <div className="p-4 flex justify-between">
                  <div>
                    <div className="font-bold text-gray-900">Saturday - Sunday</div>
                    <div className="text-gray-500">8:00am - closing</div>
                  </div>
                  <div className="font-bold text-tennis-green text-base">$6,000</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center">
            <a
              href="https://www.oldgreenwichtennisacademy.com/_files/ugd/1c365b_42beca4379c44c0d802e2fe6ec73ca6f.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-tennis-clay hover:underline"
            >
              <Download className="w-4 h-4" />
              <span>Download Season Court Brochure 2026/2027 (PDF)</span>
            </a>
          </div>
        </div>

        {/* Embedded Calculator */}
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
