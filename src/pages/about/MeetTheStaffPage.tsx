import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, CheckCircle2, Calendar, Phone, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COACHES } from '../../data/ogtaData';

export function MeetTheStaffPage() {
  // Mapping downloaded staff media images
  const coachImages: Record<string, string> = {
    susi: '/images/media_22.jpg',
    darren: '/images/media_23.jpg',
    alex: '/images/media_24.jpg',
    jared: '/images/media_25.jpg',
    leo: '/images/media_26.jpg',
    raphe: '/images/media_27.jpg',
    james: '/images/media_2.jpg',
  };

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F7F9F6] via-white to-white overflow-hidden border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F392B] font-semibold text-xs tracking-wider uppercase mb-4">
              <Users className="w-3.5 h-3.5 text-[#0F392B]" />
              Our Leadership & Pros
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F392B] tracking-tight mb-6">
              Meet the OGTA Coaching Staff
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our world-class tennis staff brings collegiate NCAA Division I championships, international European clay court heritage, and elite USPTA & PTR certifications right here to Old Greenwich. Meet the passionate professionals dedicated to transforming your game.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/private-lessons"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F392B] text-white font-medium hover:bg-[#18523f] transition-all shadow-md shadow-emerald-950/10"
              >
                <span>Book a Private Lesson</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/free-assessments"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-all shadow-sm"
              >
                <span>Free Junior Assessment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {COACHES.map((coach, index) => {
              const imageSrc = coachImages[coach.id] || '/images/media_1.jpg';
              const isEven = index % 2 === 1;

              return (
                <div
                  key={coach.id}
                  className={`bg-[#FBFBFA] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Photo Column */}
                  <div className="w-full lg:w-1/3 shrink-0">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-slate-200">
                      <img
                        src={imageSrc}
                        alt={coach.name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-[#0F392B] text-xs font-bold rounded-full shadow-sm border border-slate-200/60">
                          {coach.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio & Details Column */}
                  <div className="w-full lg:w-2/3 space-y-4">
                    <div>
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                        {coach.role}
                      </span>
                      <h2 className="text-3xl font-serif font-bold text-[#0F392B]">
                        {coach.name}
                      </h2>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed font-sans">
                      {coach.bio}
                    </p>

                    {/* Credentials */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                        Key Credentials & Experience
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.credentials.map((cred, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-950 text-xs font-medium border border-emerald-200/80"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                            {cred}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Link
                        to="/private-lessons"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F392B] hover:text-emerald-700 transition-colors"
                      >
                        <span>Schedule Lesson with {coach.name.split(' ')[0]}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join the Team / Inquiries Banner */}
      <section className="py-16 bg-[#F7F9F6] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F392B] mb-3">
            Interested in Private Instruction?
          </h3>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-sm">
            Our teaching professionals are available for 1-hour and 1.5-hour private and semi-private lessons tailored to your technical and strategic goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/private-lessons"
              className="px-7 py-3.5 rounded-xl bg-[#0F392B] text-white font-medium hover:bg-[#18523f] transition-all shadow-md shadow-emerald-950/10"
            >
              View Private Lesson Rates
            </Link>
            <a
              href="tel:2036373398"
              className="px-7 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-all shadow-sm"
            >
              Call (203) 637-3398
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
