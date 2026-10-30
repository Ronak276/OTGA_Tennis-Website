import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, Calendar, Phone, Mail, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';
import { useSiteContent } from '../../context/SiteContentContext';
import { SpotlightCard } from '../../components/skiper/SpotlightCard';

export const AdultClinicsPage: React.FC = () => {
  const adultTiers = [
    {
      level: '1.0 – 2.0 Beginner',
      subtitle: 'Introduction to Tennis Fundamentals',
      rateText: '8-Week Session: $520 (60 mins) or $780 (90 mins)',
      sessionDates: 'Session 1: Sept 10 – Nov 6 • Session 2: Nov 9 – Jan 8',
      focus: 'Foundational grips, athletic footwork, basic swing paths, and learning to sustain crosscourt rallies with confidence.',
      schedules: [
        { day: 'Monday', times: ['10:30 AM – 12:00 PM'] },
        { day: 'Tuesday', times: ['10:30 AM – 12:00 PM', '6:00 – 7:00 PM'] },
        { day: 'Thursday', times: ['9:30 – 10:30 AM'] },
        { day: 'Friday', times: ['9:30 – 10:30 AM', '5:00 – 6:00 PM'] },
      ],
    },
    {
      level: '2.5 Low Intermediate',
      subtitle: 'Consistency & Directional Control',
      rateText: '16-Week Fall Session: $1,040 (60 mins) or $1,560 (90 mins)',
      sessionDates: 'Full 16-Week Term: September 10, 2026 to January 8, 2027',
      focus: 'Topspin mechanics, directional depth, approach shots, transitional volleys, and doubles court positioning.',
      schedules: [
        { day: 'Monday', times: ['9:30 – 10:30 AM', '1:00 – 2:30 PM', '6:00 – 7:30 PM'] },
        { day: 'Tuesday', times: ['9:00 – 10:30 AM', '7:00 – 8:30 PM'] },
        { day: 'Wednesday', times: ['10:30 AM – 12:00 PM', '1:00 – 2:30 PM', '6:00 – 7:30 PM'] },
        { day: 'Thursday', times: ['10:30 AM – 12:00 PM', '7:00 – 8:30 PM'] },
        { day: 'Friday', times: ['10:30 AM – 12:00 PM', '1:00 – 2:30 PM', '6:00 – 7:30 PM'] },
      ],
    },
    {
      level: '3.0 Intermediate',
      subtitle: 'Pace Control & Doubles Strategy',
      rateText: '16-Week Fall Session: $1,040 (60 mins) or $1,560 (90 mins)',
      sessionDates: 'Full 16-Week Term: September 10, 2026 to January 8, 2027',
      focus: 'Aggressive net play, poaching, directional serving, second serve spin, lob defense, and situational pressure play.',
      schedules: [
        { day: 'Monday', times: ['9:00 – 10:30 AM', '12:00 – 1:30 PM', '7:30 – 9:00 PM'] },
        { day: 'Tuesday', times: ['10:30 AM – 12:00 PM', '1:00 – 2:30 PM', '6:00 – 7:30 PM'] },
        { day: 'Wednesday', times: ['9:00 – 10:30 AM', '6:00 – 7:30 PM'] },
        { day: 'Thursday', times: ['9:00 – 10:30 AM', '1:00 – 2:30 PM', '7:30 – 9:00 PM'] },
        { day: 'Friday', times: ['9:00 – 10:30 AM', '12:00 – 1:30 PM', '6:00 – 7:30 PM'] },
      ],
    },
    {
      level: '3.5 – 4.0+ Advanced',
      subtitle: 'High Tempo Match Construction',
      rateText: '16-Week Fall Session: $1,560 (90 mins)',
      sessionDates: 'Full 16-Week Term: September 10, 2026 to January 8, 2027',
      focus: 'Heavy topspin, slice variations, serve-and-volley, handling heavy pace, and USTA league match tactics.',
      schedules: [
        { day: 'Monday', times: ['10:30 AM – 12:00 PM', '7:30 – 9:00 PM'] },
        { day: 'Tuesday', times: ['9:00 – 10:30 AM', '7:30 – 9:00 PM'] },
        { day: 'Wednesday', times: ['9:00 – 10:30 AM', '7:30 – 9:00 PM'] },
        { day: 'Thursday', times: ['10:30 AM – 12:00 PM', '7:30 – 9:00 PM'] },
        { day: 'Friday', times: ['9:00 – 10:30 AM', '7:30 – 9:00 PM'] },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-[#F7F9F6] via-white to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-[#0F392B] border border-emerald-200 shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Levels 1.0 to 4.0+ • 8 & 16-Week Progressions</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F392B]">
            Adult Clinics
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            OGTA offers Fall/Winter 1hr and 1.5hr clinics for levels from beginner to a 4.0-rated USTA player. Our staff of professionals set a progression of drills over that time period to achieve goals set at the start of the season. The clinics cover everything from serve and volley to technical groundstroke work, from singles or doubles strategy to proper footwork and movement on the court.
          </p>

          <div className="pt-2">
            <Link
              to="/adult-fall-registration-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0F392B] text-white font-bold text-sm hover:bg-[#18523f] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-emerald-950/15"
            >
              <span>Online Adult Registration Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. AUTHENTIC PROMPT NOTIFICATION SECTION ("TO SECURE A SPACE...") */}
      <section className="pt-6 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FBFBFA] border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 text-center md:text-left text-sm text-slate-700 leading-relaxed font-sans">
              <p className="font-medium text-slate-900">
                To secure a space, fill out the{' '}
                <Link
                  to="/adult-fall-registration-form"
                  className="font-bold text-[#0F392B] underline underline-offset-4 hover:text-[#C85A32] transition-colors"
                >
                  online registration form
                </Link>{' '}
                and we will call for payment.
              </p>
              <p className="text-slate-600">
                Students are grouped by age and ability. If you are unsure which clinic is best,{' '}
                <Link
                  to="/contact-us"
                  className="font-semibold text-[#C85A32] underline underline-offset-4 hover:text-orange-700 transition-colors"
                >
                  contact us for a free assessment
                </Link>{' '}
                or other questions.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/adult-fall-registration-form"
                className="px-5 py-2.5 rounded-xl bg-[#0F392B] text-white font-semibold text-xs hover:bg-[#18523f] transition-all shadow-sm"
              >
                Registration Form
              </Link>
              <Link
                to="/self-rating-guide"
                className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-all shadow-sm"
              >
                NTRP Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ADULT CLINICS TIERS GRID WITH SKIPER SPOTLIGHT CARDS */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {adultTiers.map((tier, idx) => (
              <SpotlightCard
                key={idx}
                className="p-8 flex flex-col justify-between border border-slate-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-900 border border-emerald-200">
                      NTRP {tier.level.split(' ')[0]}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Championship Har-Tru Clay
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#0F392B] mb-1">
                    {tier.level}
                  </h3>
                  <p className="text-xs font-semibold text-[#C85A32] uppercase tracking-wider mb-4">
                    {(tier as any).subtitle || (tier as any).name}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-sans">
                    {tier.focus}
                  </p>

                  {/* Rates and Sessions */}
                  <div className="bg-[#F7F9F6] rounded-2xl p-4 border border-slate-200/80 mb-6 space-y-1.5">
                    <div className="text-xs font-bold text-[#0F392B]">
                      {(tier as any).rateText || (tier as any).rates}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {tier.sessionDates}
                    </div>
                  </div>

                  {/* Weekly Schedules */}
                  <div className="pt-2 border-t border-slate-100 mb-6">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                      <Clock className="w-3.5 h-3.5 text-[#0F392B]" />
                      <span>Weekly Schedule Options:</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      {tier.schedules.map((sched, i) => (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-slate-50 gap-1"
                        >
                          <span className="font-semibold text-slate-900 w-28 shrink-0">
                            {sched.day}:
                          </span>
                          <span className="text-slate-600 font-medium">
                            {sched.times.join(' • ')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Link
                    to="/adult-fall-registration-form"
                    className="w-full py-3.5 rounded-xl bg-[#0F392B] text-white text-xs font-bold hover:bg-[#18523f] transition-all text-center flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Register for {tier.level.split(' ')[0]} Clinic</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POINT PLAY CALLOUT BANNER */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FBFBFA] rounded-3xl p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-[#C85A32] uppercase tracking-wider block mb-1">
                Also Interested in Drop-In Live Ball?
              </span>
              <h4 className="font-serif font-bold text-xl text-[#0F392B] mb-1">
                Join Weekly Point Play ($60)
              </h4>
              <p className="text-xs text-slate-600">
                90 minutes of fast doubles games on Monday, Wednesday, Thursday & Sunday without session commitments.
              </p>
            </div>
            <Link
              to="/signup"
              className="px-6 py-3.5 rounded-xl bg-[#C85A32] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#b04a25] transition-all shrink-0 shadow-sm"
            >
              Book Point Play
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
