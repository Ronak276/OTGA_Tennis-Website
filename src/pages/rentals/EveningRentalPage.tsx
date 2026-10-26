import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Users, Music, Trophy, Sparkles, CheckCircle2, Phone, Calendar, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EveningRentalPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0F392B] via-[#144737] to-[#0F392B] text-white overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/media_1.jpg"
            alt="Evening Court"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/60 border border-emerald-500/30 text-emerald-200 font-semibold text-xs tracking-wider uppercase mb-4"
            >
              <Moon className="w-3.5 h-3.5 text-lime-300" />
              Private Club Buyout
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight mb-6"
            >
              Saturday & Sunday <br className="hidden sm:inline" />
              Evening Club Rentals
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-emerald-100/90 leading-relaxed font-sans mb-8"
            >
              Host your exclusive tennis party, corporate social, fundraiser, or milestone celebration with total private access to all five indoor championship Har-Tru clay courts and viewing lounge.
            </motion.p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#inquire"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-lime-300 text-[#0F392B] font-bold hover:bg-lime-200 transition-all shadow-lg"
              >
                <span>Inquire About Your Date</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:2036373398"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call (203) 637-3398</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Key Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2 block">
                Exclusive Weekend Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F392B] mb-6">
                The Entire Club is Yours for the Evening
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                Looking for a unique, memorable venue for your next gathering? Old Greenwich Tennis Academy offers private evening facility rentals on Saturday and Sunday nights. You and your guests will have unrestricted, private access to our five championship indoor Har-Tru clay courts and comfortable viewing lounge.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 font-sans">
                Whether you're organizing a competitive round-robin tournament, celebrating a 40th or 50th birthday, hosting a charity exhibition, or organizing a team-building company outing, our facility provides the perfect blend of sport, socializing, and fun.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F9F6] border border-emerald-900/10">
                  <Trophy className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">All 5 Courts Included</h4>
                    <p className="text-xs text-slate-600">Ample room for up to 20+ simultaneous players.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F9F6] border border-emerald-900/10">
                  <Users className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Viewing Lounge & Social Hub</h4>
                    <p className="text-xs text-slate-600">Leather seating, tables for food and beverages.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F9F6] border border-emerald-900/10">
                  <Music className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Sound System & Ambiance</h4>
                    <p className="text-xs text-slate-600">Plug in your custom playlist throughout the club.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F9F6] border border-emerald-900/10">
                  <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Optional Pro Coaching</h4>
                    <p className="text-xs text-slate-600">Hire an OGTA pro to organize games & drills.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 rounded-3xl p-8 sm:p-10 border-2 border-emerald-700/20 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl"></div>

                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  Weekend Package
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0F392B] mb-2">
                  Full Club Buyout Rate
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-serif font-bold text-[#0F392B]">$850</span>
                  <span className="text-slate-500 font-medium">/ evening</span>
                </div>

                <div className="space-y-4 py-4 border-t border-b border-emerald-900/10 mb-6 text-sm text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Available Days:</span>
                    <span className="font-semibold text-slate-900">Saturdays & Sundays</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Typical Timing:</span>
                    <span className="font-semibold text-slate-900">6:30 PM – 10:30 PM (4 hrs)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Courts:</span>
                    <span className="font-semibold text-slate-900">All 5 Har-Tru Courts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Catering / BYO:</span>
                    <span className="font-semibold text-emerald-800">Welcome & Permitted</span>
                  </div>
                </div>

                <a
                  href="#inquire"
                  className="w-full block py-4 rounded-xl bg-[#0F392B] text-white text-center font-bold hover:bg-[#18523f] transition-all shadow-md shadow-emerald-950/10"
                >
                  Request Reservation Date
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquire" className="py-20 bg-[#FBFBFA] border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F392B] mb-2">
              Reserve Your Evening Rental
            </h2>
            <p className="text-slate-600 text-sm mb-8">
              Evening rentals book up quickly during the fall, winter, and spring seasons. Fill out the form below or call the club directly to check available dates.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0F392B] mb-2">Inquiry Submitted!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Thank you! Our club manager will review your date request and reach out within 24 hours to coordinate details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(203) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Date (Sat / Sun)
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Event Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B] bg-white">
                      <option>Birthday Party / Celebration</option>
                      <option>Adult Social / Round Robin</option>
                      <option>Corporate Outing / Team Building</option>
                      <option>Charity / Fundraiser Exhibition</option>
                      <option>Junior Milestone / Team Party</option>
                      <option>Other Private Event</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Estimated Guest Count
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 24"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Event Details or Special Requests
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event, whether you'd like a tennis professional to run drills, catering arrangements, etc."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0F392B] text-white font-bold hover:bg-[#18523f] transition-all shadow-md shadow-emerald-950/10 text-base"
                >
                  Submit Evening Rental Request ($850)
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
