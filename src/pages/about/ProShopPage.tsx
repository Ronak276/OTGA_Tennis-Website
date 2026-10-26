import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap, Award, Sparkles, CheckCircle2, Phone, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProShopPage() {
  const strings = [
    { name: 'Luxilon ALU Power / 4G', type: 'Premium Co-Poly', bestFor: 'Ultimate spin, control & durability' },
    { name: 'Babolat RPM Blast / Rough', type: 'Octagonal Co-Poly', bestFor: 'Heavy topspin & crisp feedback' },
    { name: 'Wilson NXT / Champions Choice', type: 'Multifilament / Natural Gut Hybrid', bestFor: 'Maximum comfort & arm-friendly feel' },
    { name: 'Solinco Hyper-G / Confidential', type: 'Square Poly', bestFor: 'Bite, tension retention & control' },
    { name: 'Head Hawk Touch / Lynx Tour', type: 'Monofilament', bestFor: 'Precision placement & soft feel' },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F7F9F6] via-white to-white overflow-hidden border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F392B] font-semibold text-xs tracking-wider uppercase mb-4">
              <ShoppingBag className="w-3.5 h-3.5 text-[#0F392B]" />
              Susi O's Pro Shop
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F392B] tracking-tight mb-6">
              Full-Service Pro Shop & 24-Hour Stringing
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Welcome to Susi O's Pro Shop, located on-site at Old Greenwich Tennis Academy. For over 25 years, Susi has delivered master racquet customization, 24-hour professional stringing turn-around, clay court footwear, and high-performance equipment to Greenwich and Fairfield County tennis players.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#stringing"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F392B] text-white font-medium hover:bg-[#18523f] transition-all shadow-md shadow-emerald-950/10"
              >
                <span>View Stringing Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:2036373398"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#0F392B]" />
                <span>Call (203) 637-3398</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Susi O & The Shop */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
                Master Stringing & Equipment
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F392B]">
                Your Game Deserves Precision Tuning
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The tension and type of strings you play with determine over 50% of your racquet’s performance. At Susi O’s Pro Shop, we treat every racquet with Tour-level attention to detail, using electronic constant-pull machines and premium string selections.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you’re recovering from tennis elbow and require ultra-plush arm protection, or looking for pinpoint control and heavy topspin for tournament play, Susi will guide you to the perfect setup.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F7F9F6] border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <Clock className="w-4 h-4 text-emerald-700" />
                    <span>24-Hour Turnaround</span>
                  </div>
                  <p className="text-xs text-slate-600">Drop off today, play tomorrow. Rush service available.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F9F6] border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <Sparkles className="w-4 h-4 text-emerald-700" />
                    <span>Custom Tension Calibration</span>
                  </div>
                  <p className="text-xs text-slate-600">Hybrid setups, gut blends, and gauge optimization.</p>
                </div>
              </div>
            </div>

            {/* Pro Shop Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="/images/media_7.jpg"
                  alt="Susi O's Pro Shop at OGTA"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-lime-300">On-Site at OGTA</p>
                    <h3 className="text-2xl font-serif font-bold">Susi O's Pro Shop</h3>
                    <p className="text-xs text-slate-200 mt-1">Greenwich's trusted racquet headquarters for 25+ years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* String Menu & Demo Program */}
      <section id="stringing" className="py-20 bg-[#FBFBFA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2 block">
              String Selection
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#0F392B]">
              Top Tournament Strings in Stock
            </h2>
            <p className="text-slate-600 mt-2">
              We carry a complete line of high-performance monofilament, multifilament, and natural gut strings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {strings.map((str, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                    {str.type}
                  </div>
                  <h4 className="font-serif font-bold text-lg text-slate-900 mb-2">
                    {str.name}
                  </h4>
                  <p className="text-xs text-slate-600 mb-4">
                    {str.bestFor}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Service: String + Labor</span>
                  <span className="font-bold text-emerald-900">In Stock</span>
                </div>
              </div>
            ))}

            {/* Own String Labor */}
            <div className="bg-emerald-50/60 rounded-2xl p-6 border border-emerald-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                  Customer Provided String
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0F392B] mb-2">
                  Labor-Only Restringing
                </h4>
                <p className="text-xs text-slate-600 mb-4">
                  Bring your own set or reel of string, and our master technician will professionally mount and pull it to your exact requested tension.
                </p>
              </div>
              <div className="pt-4 border-t border-emerald-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-600">Turnaround</span>
                <span className="font-bold text-[#0F392B]">24 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Racquets & Footwear Card */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Demo Program */}
            <div className="bg-[#FBFBFA] rounded-3xl p-8 sm:p-10 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#0F392B] mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0F392B] mb-3">
                Racquet Demo Program
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Never guess which frame fits your swing. Take out the latest models from Wilson (Pro Staff, Blade, Clash), Babolat (Pure Aero, Pure Drive, Pure Strike), and Head to test directly on our Har-Tru courts before committing to a purchase.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free demo trial with our coaching staff</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Demo fee applied directly to your new racquet purchase</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Grip size sizing and overgrip installation</span>
                </li>
              </ul>
            </div>

            {/* Clay Court Footwear */}
            <div className="bg-[#FBFBFA] rounded-3xl p-8 sm:p-10 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#0F392B] mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0F392B] mb-3">
                Approved Har-Tru Clay Footwear
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Playing on Har-Tru green clay requires specialized flat herringbone treads. We stock top clay-court models from Wilson, Babolat, K-Swiss, and Asics to keep your movement secure, balanced, and compliant with club rules.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full range of adult and junior clay court shoes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dampeners, overgrips, wristbands, and tournament balls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Expert on-site sizing and fit recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
