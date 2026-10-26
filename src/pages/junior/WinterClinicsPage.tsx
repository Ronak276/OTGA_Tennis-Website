import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Percent,
  Phone
} from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';
import { SpotlightCard } from '../../components/skiper/SpotlightCard';

export const WinterClinicsPage: React.FC = () => {
  const clinics = [
    {
      id: 'winter-red-1',
      name: 'RED BALL 1',
      age: 'Ages 4 – 6',
      ballType: 'Red Ball (36\' Court)',
      ballColor: 'bg-red-500',
      badgeClass: 'bg-red-50 text-red-700 border-red-200',
      description: 'Introductory 18-week winter clinic focusing on hand-eye agility, fundamentals, and rally confidence on a 36-foot court with 75% low-compression balls.',
      schedules: [
        { day: 'Monday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM'] },
        { day: 'Tuesday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM'] },
        { day: 'Wednesday', times: ['3:30 – 4:15 PM'] },
        { day: 'Thursday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM'] },
        { day: 'Friday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM'] },
        { day: 'Sunday', times: ['12:15 – 1:00 PM'] },
      ],
      pricing: [
        { label: '1 × 45-Min Clinic (18 Wks)', price: '$875.00' },
        { label: '2 × 45-Min Clinics (18 Wks)', price: '$1,575.00', discount: '20% Off' },
      ],
      popular: false,
    },
    {
      id: 'winter-red-2',
      name: 'RED BALL 2',
      age: 'Ages 6 – 8',
      ballType: 'Red Ball (36\' Court)',
      ballColor: 'bg-red-500',
      badgeClass: 'bg-red-50 text-red-700 border-red-200',
      description: 'Building sustained rallies, contact point consistency, and overhead tracking for young players ready to direct the ball crosscourt and down the line.',
      schedules: [
        { day: 'Monday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM'] },
        { day: 'Tuesday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM'] },
        { day: 'Wednesday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM'] },
        { day: 'Thursday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM'] },
        { day: 'Friday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM'] },
        { day: 'Sunday', times: ['12:15 – 1:00 PM'] },
      ],
      pricing: [
        { label: '1 × 45-Min Clinic (18 Wks)', price: '$875.00' },
        { label: '2 × 45-Min Clinics (18 Wks)', price: '$1,575.00', discount: '20% Off' },
        { label: '1 × 45-Min + Sat 1:30 Match Play', price: '$1,350.00' },
      ],
      popular: false,
    },
    {
      id: 'winter-orange-1-2',
      name: 'ORANGE BALL 1 & 2',
      age: '10 & Under (Ages 8 – 10)',
      ballType: 'Orange Ball (60\' Court)',
      ballColor: 'bg-orange-500',
      badgeClass: 'bg-orange-50 text-orange-700 border-orange-200',
      description: '60-foot court play with 50% low-compression orange balls. Refines topspin groundstrokes, transitional volleys, serves, and strategic match play.',
      schedules: [
        { day: 'Monday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM', '5:00 – 6:00 PM'] },
        { day: 'Tuesday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM'] },
        { day: 'Wednesday', times: ['4:15 – 5:00 PM', '5:00 – 6:00 PM'] },
        { day: 'Thursday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM'] },
        { day: 'Friday', times: ['3:30 – 4:15 PM', '4:15 – 5:00 PM'] },
        { day: 'Sunday', times: ['1:00 – 2:00 PM'] },
      ],
      pricing: [
        { label: '1 × 45-Min Clinic', price: '$875.00' },
        { label: '2 × 45-Min Clinics', price: '$1,575.00', discount: '20% Off' },
        { label: '1 × 60-Min Clinic', price: '$1,170.00' },
        { label: '2 × 60-Min Clinics', price: '$2,100.00', discount: '20% Off' },
        { label: '1 × 60-Min + Sat 1:30 Match Play', price: '$1,630.00' },
      ],
      popular: true,
    },
    {
      id: 'winter-green-ball',
      name: 'GREEN BALL',
      age: '12 & Under (Ages 10 – 12)',
      ballType: 'Green Dot (Full 78\' Court)',
      ballColor: 'bg-emerald-600',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      description: 'Full 78-foot championship Har-Tru court with green dot balls. Teaches shot depth, angle creation, net approaches, overheads, and competitive singles.',
      schedules: [
        { day: 'Monday', times: ['5:00 – 6:00 PM'] },
        { day: 'Tuesday', times: ['4:30 – 6:00 PM'] },
        { day: 'Wednesday', times: ['5:00 – 6:00 PM'] },
        { day: 'Thursday', times: ['5:00 – 6:00 PM'] },
        { day: 'Friday', times: ['5:00 – 6:00 PM'] },
        { day: 'Sunday', times: ['2:00 – 3:00 PM'] },
      ],
      pricing: [
        { label: '1 × 60-Min Clinic', price: '$1,170.00' },
        { label: '2 × 60-Min Clinics', price: '$2,100.00', discount: '20% Off' },
        { label: '1 × 90-Min Clinic', price: '$1,755.00' },
        { label: '2 × 90-Min Clinics', price: '$3,150.00', discount: '20% Off' },
      ],
      popular: false,
    },
    {
      id: 'winter-yellow-ball-1',
      name: 'YELLOW BALL 1',
      age: '13 – 17 Years Old',
      ballType: 'Yellow Ball (Full 78\' Court)',
      ballColor: 'bg-lime-500',
      badgeClass: 'bg-lime-50 text-lime-900 border-lime-300',
      description: 'Standard yellow tournament balls. High school varsity prep, technical refinement, serve pace, tactical positioning, and mental match toughness.',
      schedules: [
        { day: 'Monday', times: ['3:30 – 5:00 PM', '6:00 – 7:30 PM'] },
        { day: 'Wednesday', times: ['3:30 – 5:00 PM', '6:00 – 7:30 PM'] },
        { day: 'Thursday', times: ['6:00 – 7:30 PM'] },
        { day: 'Friday', times: ['3:30 – 5:00 PM'] },
        { day: 'Sunday', times: ['2:00 – 3:30 PM'] },
      ],
      pricing: [
        { label: '1 × 90-Min Clinic', price: '$1,755.00' },
        { label: '2 × 90-Min Clinics', price: '$3,150.00', discount: '20% Off' },
        { label: '1 × 90-Min + Sat 12:00 Match Play', price: '$2,205.00' },
        { label: '2 × 90-Min + Sat 12:00 Match Play', price: '$3,600.00', discount: '20% Off' },
      ],
      popular: false,
    },
    {
      id: 'winter-high-performance',
      name: 'HIGH PERFORMANCE',
      age: '12 – 17 Years Old',
      ballType: 'Tournament Performance',
      ballColor: 'bg-[#C85A32]',
      badgeClass: 'bg-orange-50 text-[#C85A32] border-[#C85A32]/30',
      description: 'Elite training for tournament competitors. High-intensity situational pressure drills, video feedback, periodized fitness, and match execution.',
      schedules: [
        { day: 'Monday', times: ['3:30 – 5:00 PM', '6:00 – 7:30 PM'] },
        { day: 'Wednesday', times: ['3:30 – 5:00 PM', '6:00 – 7:30 PM'] },
        { day: 'Thursday', times: ['6:00 – 7:30 PM'] },
        { day: 'Friday', times: ['3:30 – 5:00 PM'] },
      ],
      pricing: [
        { label: '1 × 90-Min + Sat 12:00 Match Play', price: '$2,205.00' },
        { label: '2 × 90-Min + Sat 12:00 Match Play', price: '$3,600.00', discount: '20% Off' },
      ],
      popular: true,
      evaluationNotice: 'Mandatory evaluation required prior to admission.',
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 pb-20">
      
      {/* 1. LUXURY EDITORIAL HERO SECTION */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-[#F7F9F6] via-white to-white border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#0F392B] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/juniorprograms" className="hover:text-[#0F392B] transition-colors">Junior Programs</Link>
            <span>/</span>
            <span className="text-blue-800">Winter Clinics</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-900 border border-blue-200 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-blue-700" />
                <span>18-Week Comprehensive Winter Term • Ages 4 to 17</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F392B] leading-[1.1]"
              >
                Winter Junior <span className="text-[#C85A32]">Tennis Clinics</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <div className="text-xl sm:text-2xl font-serif font-bold text-slate-800">
                  January 11, 2027 to May 2, 2027
                </div>
                <p className="text-sm text-slate-600 font-sans max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Train in full climate-controlled warmth through the winter months. Continuous progressive development on championship Har-Tru green clay.
                </p>
              </motion.div>

              {/* Informational Feature Chips */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F7F9F6] border border-slate-200 font-semibold text-slate-700">
                  <Percent className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>10% Discount on 3rd Sibling</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F7F9F6] border border-slate-200 font-semibold text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  <span>18 Weeks Duration</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F7F9F6] border border-slate-200 font-semibold text-slate-700">
                  <Trophy className="w-3.5 h-3.5 text-blue-700" />
                  <span>Saturday Match Play Included</span>
                </span>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5"
              >
                <Link
                  to="/junior-fall-registration-form"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C85A32] text-white font-bold text-sm hover:bg-[#b04a25] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-orange-950/20 flex items-center justify-center gap-2"
                >
                  <span>Online Junior Winter Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/free-assessments"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl border border-slate-300 bg-white text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span>Free Skill Assessment</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Hero Visual Card with Real Media */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-100 group"
              >
                <img
                  src="/images/media_1.jpg"
                  alt="OGTA Har-Tru Courts Winter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0F392B] text-xs font-bold border border-white/60 shadow-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Winter Term Registration Open</span>
                  </span>
                </div>
              </motion.div>
            </div>

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
                  to="/junior-fall-registration-form"
                  className="font-bold text-[#0F392B] underline underline-offset-4 hover:text-[#C85A32] transition-colors"
                >
                  online registration form
                </Link>{' '}
                and we will call for payment.
              </p>
              <p className="text-slate-600">
                Students are grouped by age and ability. If you are unsure which clinic is best,{' '}
                <Link
                  to="/free-assessments"
                  className="font-semibold text-[#C85A32] underline underline-offset-4 hover:text-orange-700 transition-colors"
                >
                  contact us for a free assessment
                </Link>{' '}
                or other questions.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/junior-fall-registration-form"
                className="px-5 py-2.5 rounded-xl bg-[#0F392B] text-white font-semibold text-xs hover:bg-[#18523f] transition-all shadow-sm"
              >
                Registration Form
              </Link>
              <Link
                to="/free-assessments"
                className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-all shadow-sm"
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLINICS GRID WITH RICH SKIPER SPOTLIGHT CARDS */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clinics.map((clinic) => (
              <SpotlightCard
                key={clinic.id}
                className={`p-5 sm:p-6 flex flex-col justify-between ${
                  clinic.popular
                    ? 'border-2 border-[#C85A32]/60 ring-4 ring-[#C85A32]/5 shadow-lg'
                    : 'border border-slate-200'
                }`}
              >
                <div>
                  {/* Top Header Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${clinic.badgeClass}`}>
                      {clinic.age}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <span className={`w-2 h-2 rounded-full ${clinic.ballColor}`}></span>
                      <span>{clinic.ballType.split(' ')[0]} Ball</span>
                    </div>
                  </div>

                  {/* Clinic Name */}
                  <h3 className="font-serif text-xl font-bold text-[#0F392B] mb-1 tracking-tight">
                    {clinic.name}
                  </h3>

                  {clinic.evaluationNotice && (
                    <div className="mb-2 px-2.5 py-1 rounded-md bg-orange-50 text-[#C85A32] text-[11px] font-bold border border-orange-200 inline-block">
                      {clinic.evaluationNotice}
                    </div>
                  )}

                  <p className="text-xs text-slate-600 leading-normal mb-3 font-sans">
                    {clinic.description}
                  </p>

                  {/* Schedules Section */}
                  <div className="pt-2.5 border-t border-slate-100 mb-3.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2">
                      <Clock className="w-3.5 h-3.5 text-[#0F392B]" />
                      <span>Weekly Class Schedules:</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      {clinic.schedules.map((sched, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-center justify-between py-0.5 border-b border-slate-50 gap-0.5"
                        >
                          <span className="font-semibold text-slate-800 w-24 shrink-0 text-xs">
                            {sched.day}:
                          </span>
                          <span className="text-slate-600 font-medium text-xs">
                            {sched.times.join(' or ')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Box */}
                  <div className="bg-[#F7F9F6] rounded-xl p-3 border border-slate-200/80 mb-4 space-y-1">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                      18-Week Session Rates
                    </div>
                    {clinic.pricing.map((p, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-slate-700 font-medium">{p.label}:</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-[#0F392B]">{p.price}</span>
                          {p.discount && (
                            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                              {p.discount}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div>
                  <Link
                    to="/junior-fall-registration-form"
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-sm ${
                      clinic.popular
                        ? 'bg-[#C85A32] text-white hover:bg-[#b04a25]'
                        : 'bg-[#0F392B] text-white hover:bg-[#18523f]'
                    }`}
                  >
                    <span>Register for {clinic.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DISCOUNTS, SIBLINGS & POLICIES FOOTNOTE BANNER */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#FBFBFA] border border-slate-200 text-center">
              <Percent className="w-6 h-6 text-[#C85A32] mx-auto mb-2" />
              <h4 className="font-serif font-bold text-sm text-slate-900 mb-1">10% Sibling Discount</h4>
              <p className="text-xs text-slate-600">Applied automatically to the third registered sibling in any term.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBFBFA] border border-slate-200 text-center">
              <Sparkles className="w-6 h-6 text-emerald-700 mx-auto mb-2" />
              <h4 className="font-serif font-bold text-sm text-slate-900 mb-1">Free Skill Evaluation</h4>
              <p className="text-xs text-slate-600">Unsure of placement? Meet our pros for a free 15-minute on-court assessment.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBFBFA] border border-slate-200 text-center">
              <Phone className="w-6 h-6 text-[#0F392B] mx-auto mb-2" />
              <h4 className="font-serif font-bold text-sm text-slate-900 mb-1">Registration Assistance</h4>
              <p className="text-xs text-slate-600">Call (203) 637-3398 or email info@oldgreenwichtennisacademy.com</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
