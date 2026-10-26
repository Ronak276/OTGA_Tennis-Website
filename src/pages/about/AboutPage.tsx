import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Shield, MapPin, Award, Heart, CheckCircle2, ArrowRight, Sparkles, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  const highlights = [
    {
      icon: Trophy,
      title: '5 Championship Har-Tru Courts',
      desc: 'Meticulously laser-groomed green clay courts designed to reduce joint stress while offering authentic bounce and strategic slide play.',
    },
    {
      icon: Shield,
      title: 'Climate-Controlled Indoor Comfort',
      desc: 'Play your best game year-round in our heated and cooled facility with uniform tournament LED lighting and zero glare.',
    },
    {
      icon: Users,
      title: 'Community & Decades of Heritage',
      desc: 'Serving Greenwich, Stamford, Darien, and Westchester tennis families for over four decades with warm hospitality and passion.',
    },
    {
      icon: Award,
      title: 'World-Class Coaching Pedigree',
      desc: 'Directed by elite professionals with extensive collegiate and ATP/WTA competitive experience, bringing tailored development to all levels.',
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F7F9F6] via-white to-white overflow-hidden border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F392B] font-semibold text-xs tracking-wider uppercase mb-4"
            >
              <Heart className="w-3.5 h-3.5 text-[#0F392B]" />
              About Our Club
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F392B] tracking-tight leading-tight mb-6"
            >
              Fairfield County's Premier Indoor Tennis Destination
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed font-sans mb-8"
            >
              Located conveniently at the Old Greenwich Train Station, Old Greenwich Tennis Academy (OGTA) provides five championship Har-Tru clay courts, unmatched junior developmental academies, competitive USTA teams, and dynamic adult clinics.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/meet-the-staff"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F392B] text-white font-medium hover:bg-[#18523f] transition-all shadow-md shadow-emerald-950/10"
              >
                <span>Meet Our Professional Staff</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-all shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#0F392B]" />
                <span>Directions & Club Info</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage & Mission Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
                Our Heritage & Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F392B] leading-tight">
                A Tradition of Tennis Excellence, Community, and Character
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Founded with a vision to deliver top-tier tennis instruction in a welcoming, family-focused environment, Old Greenwich Tennis Academy has been a cornerstone of the Fairfield County tennis community for decades.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our philosophy centers on fostering a lifelong love of the game. For our juniors, we cultivate technical mastery, mental resilience, and outstanding sportsmanship through our progressive Red, Orange, Green, and Yellow Ball pathways. For adults, we combine cardiovascular conditioning, point-play mastery, and social camaraderie through leagues, clinics, and season court play.
              </p>
              <div className="pt-2">
                <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                  <div>
                    <span className="text-3xl font-serif font-bold text-[#0F392B] block">5</span>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Har-Tru Courts</span>
                  </div>
                  <div>
                    <span className="text-3xl font-serif font-bold text-[#0F392B] block">40+</span>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Serving CT</span>
                  </div>
                  <div>
                    <span className="text-3xl font-serif font-bold text-[#0F392B] block">100%</span>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Climate Controlled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Mosaic */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img
                      src="/images/media_1.jpg"
                      alt="OGTA Har-Tru Courts"
                      className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img
                      src="/images/media_4.jpg"
                      alt="Junior Tennis Clinic"
                      className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img
                      src="/images/media_5.jpg"
                      alt="Adult Point Play"
                      className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img
                      src="/images/media_7.jpg"
                      alt="Susi O's Pro Shop"
                      className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-20 bg-[#FBFBFA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2 block">
              The OGTA Advantage
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#0F392B]">
              Why Players Choose Old Greenwich
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#0F392B] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amenities & Facility Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-lime-300 mb-3 block">
                Comprehensive Amenities
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
                Designed for Total Comfort, On and Off the Court
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-emerald-100 text-sm mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-300 shrink-0" />
                  <span>5 Championship Har-Tru Green Clay Courts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-300 shrink-0" />
                  <span>Heated & Air-Conditioned Bubble Enclosure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-300 shrink-0" />
                  <span>Susi O's Full-Service Pro Shop & 24hr Stringing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-300 shrink-0" />
                  <span>Elevated Spectator Viewing Lounge & Wi-Fi</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-300 shrink-0" />
                  <span>Clean Locker Rooms with Hot Showers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-300 shrink-0" />
                  <span>Steps from Metro-North Old Greenwich Station</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/pro-shop"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-300 text-[#0F392B] font-bold hover:bg-lime-200 transition-all shadow-md"
                >
                  <span>Visit Susi O's Pro Shop</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/policies"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 transition-all"
                >
                  <span>Read Club Policies</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
