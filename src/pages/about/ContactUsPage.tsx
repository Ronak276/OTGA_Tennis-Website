import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Train, Car } from 'lucide-react';

export function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#F7F9F6] via-white to-white border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F392B] font-semibold text-xs tracking-wider uppercase mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#0F392B]" />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0F392B] tracking-tight mb-4">
              Contact Old Greenwich Tennis Academy
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              We're here to answer questions regarding court bookings, junior academy enrollment, adult clinics, or private lessons. Reach out or visit us directly at the station.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info Cards & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Hours */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Info */}
              <div className="bg-[#FBFBFA] rounded-3xl p-8 border border-slate-200 space-y-6">
                <h2 className="text-2xl font-serif font-bold text-[#0F392B]">
                  Club Information
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#0F392B] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Club Location</h4>
                      <p className="text-slate-900 font-medium">151 Sound Beach Ave</p>
                      <p className="text-slate-600 text-sm">Old Greenwich, CT 06870</p>
                      <p className="text-xs text-emerald-800 font-semibold mt-1">Adjacent to Metro-North Train Station</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#0F392B] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</h4>
                      <a href="tel:2036373398" className="text-slate-900 font-semibold hover:text-emerald-800 transition-colors">
                        (203) 637-3398
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#0F392B] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</h4>
                      <a href="mailto:info@oldgreenwichtennisacademy.com" className="text-slate-900 font-medium hover:text-emerald-800 transition-colors text-sm break-all">
                        info@oldgreenwichtennisacademy.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#0F392B] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="w-full">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Operating Hours</h4>
                      <div className="text-sm space-y-1.5 text-slate-700">
                        <div className="flex justify-between">
                          <span>Monday – Friday:</span>
                          <span className="font-semibold text-slate-900">7:00 AM – 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span className="font-semibold text-slate-900">7:00 AM – 9:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-semibold text-slate-900">7:00 AM – 9:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transit & Commute Notice */}
              <div className="bg-emerald-50/60 rounded-2xl p-6 border border-emerald-200/60 space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Train className="w-4 h-4 text-emerald-700" />
                  <span>Commuter Friendly Location</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Stepping off the Metro-North New Haven line at Old Greenwich Station? The club is right beside the tracks. Many of our adult players schedule morning drills before their Manhattan commute or evening matches right after getting off the train!
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium pt-1">
                  <Car className="w-4 h-4" />
                  <span>Free on-site parking directly in front of the club.</span>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F392B] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 text-sm mb-8">
                  Whether you're inquiring about clinic placement, season courts, or private coaching, let us know and we'll reply promptly.
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
                    <h3 className="text-2xl font-serif font-bold text-[#0F392B] mb-2">Message Sent!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                      Thank you for contacting OGTA. A member of our staff will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 underline"
                    >
                      Send another message
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
                          placeholder="John Doe"
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
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Inquiry Subject
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B] bg-white">
                          <option>Junior Programs / Free Assessment</option>
                          <option>Adult Clinics & Point Play</option>
                          <option>Hourly / Season Court Rentals</option>
                          <option>Private Lessons</option>
                          <option>Pro Shop & Stringing</option>
                          <option>General Questions</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Please include details such as player age, tennis experience, preferred days, or specific questions..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F392B]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#0F392B] text-white font-medium hover:bg-[#18523f] transition-all shadow-md shadow-emerald-950/10 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
