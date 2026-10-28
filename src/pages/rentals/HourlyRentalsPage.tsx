import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ShieldCheck, CheckCircle2, DollarSign, Info, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteContent } from '../../context/SiteContentContext';

export function HourlyRentalsPage() {
  const { courtRates } = useSiteContent();
  const [hours, setHours] = useState(1);
  const [bookingType, setBookingType] = useState<'advance' | 'within72'>('within72');
  const [selectedDay, setSelectedDay] = useState('weekday');
  const [selectedTime, setSelectedTime] = useState('09:00 AM');
  const [requested, setRequested] = useState(false);

  const ratePerHour = bookingType === 'within72' ? (courtRates.hourlyRate || 90) : (courtRates.hourlyRate || 90) + 20;
  const totalPrice = ratePerHour * hours;

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F7F9F6] via-white to-white overflow-hidden border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F392B] font-semibold text-xs tracking-wider uppercase mb-4"
            >
              <Clock className="w-3.5 h-3.5 text-[#0F392B]" />
              Court Rentals
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-serif font-bold text-[#0F392B] tracking-tight leading-tight mb-6"
            >
              Hourly Open Court Rentals
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed font-sans mb-8"
            >
              Play on Fairfield County's finest climate-controlled Har-Tru clay courts.
              OGTA welcomes members and non-members alike with zero initiation fees, guest fees, or long-term commitments.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#booking-calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F392B] text-white font-medium hover:bg-[#18523f] transition-all shadow-md shadow-emerald-950/10"
              >
                <span>Calculate & Reserve</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/seasoncourts"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-all shadow-sm"
              >
                <span>View Season Courts</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Court Graphic Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block">
          <img
            src="/images/media_1.jpg"
            alt="Tennis Court"
            className="w-full h-full object-cover object-center filter grayscale"
          />
        </div>
      </section>

      {/* Pricing Comparison Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#0F392B] mb-3">Straightforward Hourly Pricing</h2>
            <p className="text-slate-600">Enjoy transparent court booking rates with no hidden fees or membership dues.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Within 72 Hours Rate */}
            <div className="bg-emerald-50/50 rounded-2xl p-8 border-2 border-emerald-600/30 shadow-lg relative flex flex-col justify-between">
              <div className="absolute -top-3.5 right-6 px-3 py-1 bg-[#0F392B] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                Most Popular
              </div>
              <div>
                <div className="flex items-center gap-2 text-emerald-800 text-sm font-semibold mb-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  Short Notice Booking
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0F392B] mb-1">Within 72 Hours</h3>
                <p className="text-slate-600 text-sm mb-6">Book open courts 1 to 3 days in advance.</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-serif font-bold text-[#0F392B]">${courtRates.hourlyRate || 90}</span>
                  <span className="text-slate-500 font-medium">/ hour</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Any open court during operating hours</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>No membership or guest fees required</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>24-hour cancellation policy</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Championship indoor Har-Tru clay surface</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setBookingType('within72');
                  const el = document.getElementById('booking-calculator');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3.5 rounded-xl bg-[#0F392B] text-white font-medium hover:bg-[#18523f] transition-all text-center"
              >
                Select Within 72 Hrs
              </button>
            </div>

            {/* In Advance Rate */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold mb-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  Advance Planning
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1">More Than 72 Hours Ahead</h3>
                <p className="text-slate-600 text-sm mb-6">Lock in your court guaranteed well ahead of time.</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-serif font-bold text-slate-900">${courtRates.advanceRate || 110}</span>
                  <span className="text-slate-500 font-medium">/ hour</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>Guarantee your preferred day and time slot</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>Ideal for special matches or visiting partners</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>Full locker room & lounge access</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>Free loaner demo racquets available</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setBookingType('advance');
                  const el = document.getElementById('booking-calculator');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3.5 rounded-xl bg-slate-100 text-slate-800 font-medium hover:bg-slate-200 transition-all text-center"
              >
                Select Advance Booking
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Booking Estimator & Request Form */}
      <section id="booking-calculator" className="py-16 bg-[#FBFBFA] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F392B] mb-2">
              Reserve Your Hourly Court
            </h2>
            <p className="text-slate-600 text-sm mb-8">
              Select your booking preferences below. Our desk will confirm your court availability immediately.
            </p>

            {requested ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0F392B] mb-2">Reservation Request Received!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Thank you! Our club front desk will contact you within 2 business hours to confirm your court number and booking details.
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-[#0F392B] font-semibold bg-white px-4 py-2 rounded-lg border border-emerald-200 shadow-sm">
                  <Phone className="w-4 h-4" />
                  <span>Immediate questions? Call (203) 637-3398</span>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setRequested(false)}
                    className="text-xs text-slate-500 hover:text-slate-800 underline"
                  >
                    Submit another booking request
                  </button>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setRequested(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Booking Advance Window */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Booking Window
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setBookingType('within72')}
                        className={`p-3 rounded-xl border text-left text-sm transition-all ${
                          bookingType === 'within72'
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold shadow-sm'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="block font-bold">Within 72h</span>
                        <span className="text-xs text-slate-500">$90/hr</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingType('advance')}
                        className={`p-3 rounded-xl border text-left text-sm transition-all ${
                          bookingType === 'advance'
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold shadow-sm'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="block font-bold">&gt; 72h in Advance</span>
                        <span className="text-xs text-slate-500">$110/hr</span>
                      </button>
                    </div>
                  </div>

                  {/* Duration Hours */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Duration (Hours)
                    </label>
                    <div className="flex gap-2">
                      {[1, 1.5, 2, 2.5, 3].map((h) => (
                        <button
                          key={h}
                          type="button"
                          onClick={() => setHours(h)}
                          className={`flex-1 py-3 rounded-xl border text-sm font-semibold transition-all ${
                            hours === h
                              ? 'border-[#0F392B] bg-[#0F392B] text-white shadow-sm'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {h}h
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Preferred Day / Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent bg-white"
                    >
                      <option>07:00 AM – 08:00 AM</option>
                      <option>08:00 AM – 09:00 AM</option>
                      <option>09:00 AM – 10:00 AM</option>
                      <option>10:00 AM – 11:00 AM</option>
                      <option>11:00 AM – 12:00 PM</option>
                      <option>12:00 PM – 01:00 PM</option>
                      <option>01:00 PM – 02:00 PM</option>
                      <option>02:00 PM – 03:00 PM</option>
                      <option>03:00 PM – 04:00 PM</option>
                      <option>04:00 PM – 05:00 PM</option>
                      <option>05:00 PM – 06:00 PM</option>
                      <option>06:00 PM – 07:00 PM</option>
                      <option>07:00 PM – 08:00 PM</option>
                      <option>08:00 PM – 09:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Michael Smith"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(203) 000-0000"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Price Summary Banner */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
                      Estimated Court Total
                    </span>
                    <span className="text-slate-600 text-xs">
                      {hours} hour(s) × ${ratePerHour}/hr ({bookingType === 'within72' ? 'Within 72h' : 'Advance'})
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-serif font-bold text-[#0F392B]">
                      ${totalPrice}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0F392B] text-white font-medium hover:bg-[#18523f] transition-all shadow-md shadow-emerald-950/10 text-base"
                >
                  Submit Hourly Court Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Important Court Regulations */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <Info className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-sm text-slate-700 space-y-2">
              <h4 className="font-bold text-amber-950">Har-Tru Clay Court Footwear Policy</h4>
              <p>
                To protect our championship Har-Tru clay surface, all players must wear smooth, flat-soled tennis sneakers with herringbone tread. Running sneakers, cross-trainers, or deeply grooved soles are strictly prohibited on the clay courts.
              </p>
              <p className="text-xs text-amber-900 font-medium">
                24-Hour Notice: Open court time cancellations require a minimum of 24 hours advance notification to avoid full charge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
