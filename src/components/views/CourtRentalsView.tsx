import React from 'react';
import { 
  Layers, 
  Clock, 
  Calendar, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  PartyPopper,
  ShieldCheck,
  Download
} from 'lucide-react';
import { CLUB_INFO, SEASON_COURT_RATES, HOURLY_RENTAL_RATES } from '../../data/ogtaData';
import { SeasonCourtCalculator } from '../calculators/SeasonCourtCalculator';

interface CourtRentalsViewProps {
  onOpenBookingModal: () => void;
}

export const CourtRentalsView: React.FC<CourtRentalsViewProps> = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-tennis-clayLight text-tennis-clayDark border border-tennis-clay/30">
            <Layers className="w-3.5 h-3.5 text-tennis-clay" />
            <span>5 Indoor Har-Tru Courts • No Membership Fees</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            Court Rentals & 2026/2027 Season Courts
          </h1>

          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Play on Greenwich's premier indoor green clay courts with consistent bounce, climate-controlled comfort, and no required membership dues.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-gray-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-tennis-clay" />
              <span>No Initiation or Membership Dues</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-tennis-clay" />
              <span>32-Week Guaranteed Season Slots</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-tennis-clay" />
              <span>Full Locker Rooms & Showers</span>
            </span>
          </div>
        </div>

        {/* Season Court Rates Table */}
        <div id="season-courts" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                Contracted Weekly Play
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tennis-green">
                2026 / 2027 Season Court Rates
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Season begins: <strong>Thursday, September 10, 2026</strong> • Season ends: <strong>May 7, 2027</strong>
              </p>
            </div>
            <a
              href={`tel:${CLUB_INFO.phone}`}
              className="px-5 py-2.5 rounded-xl bg-tennis-green text-white text-xs font-bold hover:bg-tennis-forest transition-colors self-start md:self-auto flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-tennis-volt" />
              <span>Call 203-637-3398 to Inquire</span>
            </a>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-tennis-darkGreen text-white text-xs uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-4 px-6">Days</th>
                  <th className="py-4 px-6">Time Slot</th>
                  <th className="py-4 px-6">1.0 Hour Season Rate</th>
                  <th className="py-4 px-6">1.5 Hours Season Rate</th>
                  <th className="py-4 px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {SEASON_COURT_RATES.map((rate, idx) => (
                  <tr key={idx} className="hover:bg-tennis-sand/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-900">{rate.days}</td>
                    <td className="py-4 px-6 text-gray-700">{rate.timeSlot}</td>
                    <td className="py-4 px-6 font-extrabold text-tennis-clay text-base">
                      ${rate.oneHourTotal.toLocaleString()}
                    </td>
                    <td className="py-4 px-6 font-extrabold text-tennis-green text-base">
                      ${rate.onePointFiveHourTotal.toLocaleString()}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-green-50 text-green-700 border border-green-200">
                        Inquire
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-1">
            <p>
              * <strong>Per Court Pricing:</strong> Rates are charged per court. Divide total cost by group size (e.g., 4 doubles players).
            </p>
            <p>
              * <strong>Ball Package:</strong> A fresh can of balls provided each week for $250.00 per season.
            </p>
            <p>
              * <strong>Blackout Dates:</strong> Thanksgiving Day (Nov 26, 2026) and Dec 24, 2026 – Jan 1, 2027. Season courts resume Jan 2, 2027.
            </p>
          </div>
        </div>

        {/* Season Court Calculator */}
        <div id="calculator">
          <SeasonCourtCalculator />
        </div>

        {/* Hourly Open Rentals Section */}
        <div id="hourly-rentals" className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
              Spontaneous & Flexible Play
            </span>
            <h2 className="font-serif text-3xl font-bold text-tennis-darkGreen">
              Hourly Open Court Rentals
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Need a court for singles practice, hitting with family, or a match? Book unreserved open court slots at transparent hourly rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="text-xs font-bold uppercase text-tennis-green tracking-wider">
                Short Notice Booking (Within 72 Hours)
              </div>
              <div className="font-serif text-4xl font-extrabold text-tennis-darkGreen">
                ${HOURLY_RENTAL_RATES.shortNotice.rate}.00
                <span className="text-xs text-gray-500 font-sans font-normal"> / hour</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Reserve any unbooked open court within 72 hours of your play time. Ideal for spontaneous matches.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="text-xs font-bold uppercase text-tennis-clay tracking-wider">
                Advance Booking (More than 72 Hours)
              </div>
              <div className="font-serif text-4xl font-extrabold text-tennis-clayDark">
                ${HOURLY_RENTAL_RATES.advanceBooking.rate}.00
                <span className="text-xs text-gray-500 font-sans font-normal"> / hour</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Lock in your court time in advance for guaranteed scheduling without a full season contract.
              </p>
            </div>
          </div>

          <div className="text-xs text-gray-500 italic">
            * Court rental cancellations must be made at least 24 hours in advance.
          </div>
        </div>

        {/* Saturday / Sunday Full Club Party Rental */}
        <div id="party-rental" className="bg-gradient-to-br from-tennis-clayDark to-tennis-clay text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm">
              <PartyPopper className="w-3.5 h-3.5" />
              Private Events & Tournaments
            </div>

            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                Saturday & Sunday Full Club Party Rental
              </h2>
              <div className="text-2xl font-extrabold text-tennis-volt mt-2">
                $850.00 Total Flat Rate
              </div>
            </div>

            <p className="text-sm text-gray-100 leading-relaxed">
              Rent out the entire Old Greenwich Tennis Academy facility for your next social party, birthday, corporate tournament, or charity round-robin.
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs uppercase tracking-wider font-bold text-tennis-volt block">
                What's Included In Your $850 Rental:
              </span>
              {HOURLY_RENTAL_RATES.partyRental.features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-tennis-volt shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={`tel:${CLUB_INFO.phone}`}
                className="px-6 py-3 rounded-xl bg-white text-tennis-clayDark font-bold text-xs hover:bg-tennis-sand transition-colors shadow flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 203-637-3398 to Book Date</span>
              </a>
              <a
                href={`mailto:${CLUB_INFO.email}?subject=Club Party Rental Inquiry`}
                className="px-6 py-3 rounded-xl bg-tennis-darkGreen text-white font-bold text-xs hover:bg-tennis-green transition-colors shadow flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Party Inquiry</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
