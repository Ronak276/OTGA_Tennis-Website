import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Layers, 
  ChevronRight,
  ShoppingBag,
  Zap,
  Activity,
  Award,
  Footprints,
  Star,
  Quote,
  Flame,
  DollarSign
} from 'lucide-react';
import { CLUB_INFO } from '../data/ogtaData';
import { SpotlightCard } from '../components/skiper/SpotlightCard';
import { Marquee } from '../components/skiper/Marquee';
import { AnimatedCounter } from '../components/skiper/AnimatedCounter';
import { useSiteContent } from '../context/SiteContentContext';

export const HomePage: React.FC = () => {
  const { hero, clubInfo } = useSiteContent();
  // Testimonials
  const testimonials = [
    {
      quote: "The Har-Tru clay courts at OGTA are the best in Fairfield County. So much easier on the knees and joints, and the coaching staff under Darren and Susi is phenomenal.",
      author: "Mark Henderson",
      role: "Season Court Captain & 4.0 League Player",
      tag: "10-Year Player"
    },
    {
      quote: "Both of my daughters started in the Red Ball clinic at age 5 and are now competing on their high school varsity teams. The pathway and individual coaching made all the difference.",
      author: "Caroline Vance",
      role: "Greenwich Tennis Parent",
      tag: "Junior Academy Parent"
    },
    {
      quote: "Point Play on Wednesday nights is the most intense, fun 90-minute cardio workout of my week. Continuous fast feeds and great competitive atmosphere without any drama.",
      author: "David Chen",
      role: "Weekly Point Play Regular (3.5+)",
      tag: "Point Play Member"
    }
  ];

  const marqueeHighlights = [
    "5 Championship Har-Tru Green Clay Courts",
    "USPTA & PTR Elite Coaching Staff",
    "Fall (16-Wk) & Winter (18-Wk) Clinics Open",
    "Susi O's 24-Hour Racquet Stringing",
    "Adjacent to Old Greenwich Metro-North Train",
    "$60 Weekly Live Ball Point Play",
    "Zero Initiation or Membership Fees Required",
    "32-Week Season Court Reservations",
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* HERO SECTION */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 bg-gradient-to-b from-[#F7F9F6] via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & Action CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-[#0F392B] border border-emerald-200 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>{hero.badge}</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F392B] leading-[1.12]"
              >
                {hero.headline}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
              >
                {hero.subheadline}
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <Link
                  to={hero.primaryCtaLink || '/book-online'}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0F392B] text-white font-bold text-sm hover:bg-[#18523f] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-emerald-950/15 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-lime-300" />
                  <span>{hero.primaryCtaText || 'Book Point Play ($60)'}</span>
                </Link>
                <Link
                  to={hero.secondaryCtaLink || '/free-assessments'}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#C85A32] text-white font-bold text-sm hover:bg-[#b04a25] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>{hero.secondaryCtaText || 'Free Junior Assessment'}</span>
                </Link>
                <a
                  href={`tel:${clubInfo.phone}`}
                  className="w-full sm:w-auto px-5 py-4 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#0F392B]" />
                  <span>{clubInfo.phone}</span>
                </a>
              </motion.div>

              {/* Heritage Stats Row with Skiper Animated Counters */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0F392B] block">
                    <AnimatedCounter value={5} suffix="" />
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Har-Tru Courts</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0F392B] block">
                    <AnimatedCounter value={40} suffix="+" />
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Years Serving CT</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0F392B] block">
                    $0
                  </span>
                  <span className="text-xs text-slate-500 font-medium">No Membership Fees</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual with Real Media & Floating Accents */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto max-w-lg lg:max-w-none"
              >
                {/* Main Court Image (Clean and natural) */}
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 aspect-[4/3]">
                  <img
                    src={hero.imageUrl || '/images/media_1.jpg'}
                    alt="Old Greenwich Tennis Academy Har-Tru Courts"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/media_1.jpg';
                    }}
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 SKIPER UI INFINITE MARQUEE TICKER */}
      <section className="py-4 bg-[#0F392B] border-y border-emerald-950 text-white overflow-hidden">
        <Marquee speed={32} pauseOnHover={true}>
          {marqueeHighlights.map((text, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-lime-400"></span>
              <span>{text}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* 3. CORE PROGRAMS MATRIX WITH SKIPER SPOTLIGHT CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              Instruction & Rentals
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F392B]">
              Comprehensive Tennis for All Ages
            </h2>
            <p className="text-sm text-slate-600">
              Select any program below to view schedules, rates, and guaranteed court placements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Junior Fall & Winter Clinics */}
            <SpotlightCard className="p-7 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#C85A32] flex items-center justify-center font-bold group-hover:bg-[#C85A32] group-hover:text-white transition-colors">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32] block">
                    Ages 4 to 17
                  </span>
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#C85A32] transition-colors mt-0.5">
                    Junior Clinics
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Red, Orange, Green, and Yellow Ball developmental clinics plus High Performance tournament prep. 10% 3rd sibling discount.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Fall (16-Wk) & Winter (18-Wk)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free Level Assessment included</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6 flex flex-col gap-2">
                <Link
                  to="/fall-clinics"
                  className="w-full py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors text-center"
                >
                  View Fall Clinics
                </Link>
                <Link
                  to="/junior-fall-registration-form"
                  className="w-full py-2.5 rounded-xl bg-[#C85A32] text-xs font-bold text-white hover:bg-[#b04a25] transition-colors text-center shadow-sm"
                >
                  Register Online
                </Link>
              </div>
            </SpotlightCard>

            {/* Card 2: Adult Clinics & Leagues */}
            <SpotlightCard className="p-7 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold group-hover:bg-[#0F392B] group-hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                    1.0 to 4.0+ USTA Levels
                  </span>
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#0F392B] transition-colors mt-0.5">
                    Adult Clinics
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  8-week beginner and 16-week intermediate & advanced progressions. Master groundstroke depth, net play, and match strategy.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>$520 (60 min) / $780 (90 min)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Competitive USTA League Teams</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6 flex flex-col gap-2">
                <Link
                  to="/adult-clinics"
                  className="w-full py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors text-center"
                >
                  View Adult Clinics
                </Link>
                <Link
                  to="/adult-fall-registration-form"
                  className="w-full py-2.5 rounded-xl bg-[#0F392B] text-xs font-bold text-white hover:bg-[#18523f] transition-colors text-center shadow-sm"
                >
                  Adult Registration Form
                </Link>
              </div>
            </SpotlightCard>

            {/* Card 3: Season Courts */}
            <SpotlightCard className="p-7 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold group-hover:bg-amber-700 group-hover:text-white transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                    32-Week Indoor Season
                  </span>
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors mt-0.5">
                    Season Courts
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Sept 10, 2026 – May 7, 2027. Lock in your exact court hour every single week. Split with friends for under $23/wk.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Early morning, daytime & evening slots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Zero guest or initiation dues</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6 flex flex-col gap-2">
                <Link
                  to="/seasoncourts"
                  className="w-full py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors text-center"
                >
                  Season Rate Matrix
                </Link>
                <Link
                  to="/hourly-rentals"
                  className="w-full py-2.5 rounded-xl bg-amber-700 text-xs font-bold text-white hover:bg-amber-800 transition-colors text-center shadow-sm"
                >
                  Hourly Play ($90/hr)
                </Link>
              </div>
            </SpotlightCard>

            {/* Card 4: Point Play Signup */}
            <SpotlightCard className="p-7 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-lime-100 text-emerald-900 flex items-center justify-center font-bold group-hover:bg-[#0F392B] group-hover:text-white transition-colors">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                    $60 / 1.5 Hour Session
                  </span>
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#0F392B] transition-colors mt-0.5">
                    Point Play Signup
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  High-tempo King of the Court doubles live-ball drills fed continuously by our pro staff. 6 sessions weekly matched by NTRP rating.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Book single dates on-demand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Strict NTRP pairing (2.5 to 5.0+)</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6 flex flex-col gap-2">
                <Link
                  to="/book-online"
                  className="w-full py-3 rounded-xl bg-[#0F392B] text-xs font-bold text-white hover:bg-[#18523f] transition-colors text-center shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Book Point Play ($60)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>

          </div>
        </div>
      </section>

      {/* 4. THE HAR-TRU CLAY ADVANTAGE SECTION */}
      <section className="py-20 bg-[#F7F9F6] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#C85A32] uppercase tracking-wider">
                Surface Superiority
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F392B]">
                Why Playing on Har-Tru Clay Transforms Your Game & Protects Your Body
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Unlike unforgiving asphalt or hard courts, Har-Tru green clay absorbs 85% of initial foot impact, dramatically reducing fatigue and long-term strain on ankles, knees, hips, and the lower back.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200">
                  <Activity className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Joint Preservation & Longer Playing Career</h4>
                    <p className="text-xs text-slate-600">Controlled sliding absorbs force rather than abruptly jarring joints. Play more sets with faster recovery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200">
                  <Trophy className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Tactical Ball Mastery & Longer Rallies</h4>
                    <p className="text-xs text-slate-600">Slightly slower ball speed encourages strategic construction, spin variation, and stamina development.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200">
                  <Footprints className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Daily Laser-Groomed Maintenance</h4>
                    <p className="text-xs text-slate-600">Our courts are brushed, hydrated, and line-swept multiple times daily for uniform tournament bounce.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <img
                    src="/images/media_4.jpg"
                    alt="Tennis Clinic on Har-Tru"
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <img
                    src="/images/media_5.jpg"
                    alt="Adult Match Play"
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 col-span-2">
                  <img
                    src="/images/media_6.jpg"
                    alt="5 Indoor Har-Tru Courts at OGTA"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. JUNIOR PROGRESSION PATHWAY ROADMAP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              NetGeneration Pathway
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F392B]">
              Progressive Junior Development (Ages 4 to 17)
            </h2>
            <p className="text-slate-600 text-sm">
              Tailored ball compressions, court dimensions, and racquet lengths ensure rapid technique mastery and high-energy fun at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            {/* Red Ball */}
            <div className="bg-[#FBFBFA] rounded-2xl p-5 border border-slate-200 text-center flex flex-col justify-between hover:border-red-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 font-bold mx-auto mb-3 flex items-center justify-center">
                  Red
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900 mb-1">Red Ball</h4>
                <p className="text-[11px] font-bold text-[#C85A32] uppercase mb-2">Ages 4 – 7</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  36' Court • 75% Slower Felt Ball. Hand-eye coordination, balance, and basic stroke shapes.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">Mon, Wed, Thu, Sat</span>
            </div>

            {/* Orange Ball */}
            <div className="bg-[#FBFBFA] rounded-2xl p-5 border border-slate-200 text-center flex flex-col justify-between hover:border-orange-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 font-bold mx-auto mb-3 flex items-center justify-center">
                  Org
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900 mb-1">Orange Ball</h4>
                <p className="text-[11px] font-bold text-[#C85A32] uppercase mb-2">Ages 8 – 10</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  60' Court • 50% Slower Ball. Directional control, topspin mechanics, and introductory match play.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">Tue, Thu, Fri, Sat</span>
            </div>

            {/* Green Ball */}
            <div className="bg-[#FBFBFA] rounded-2xl p-5 border border-slate-200 text-center flex flex-col justify-between hover:border-emerald-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold mx-auto mb-3 flex items-center justify-center">
                  Grn
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900 mb-1">Green Ball</h4>
                <p className="text-[11px] font-bold text-emerald-800 uppercase mb-2">Ages 10 – 12</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Full 78' Court • 25% Slower Ball. Tactical depth, approach shots, volleys, and competitive singles.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">Mon, Wed, Fri, Sat</span>
            </div>

            {/* Yellow Ball */}
            <div className="bg-[#FBFBFA] rounded-2xl p-5 border border-slate-200 text-center flex flex-col justify-between hover:border-lime-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-lime-100 text-lime-800 font-bold mx-auto mb-3 flex items-center justify-center">
                  Yel
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900 mb-1">Yellow Ball</h4>
                <p className="text-[11px] font-bold text-slate-700 uppercase mb-2">Ages 12 – 17</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Regulation Ball. High school prep, situational point play, serve speed, and mental toughness.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">Mon, Tue, Thu, Fri, Sat</span>
            </div>

            {/* High Performance */}
            <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-300 text-center flex flex-col justify-between hover:border-[#0F392B] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#0F392B] text-lime-300 font-bold mx-auto mb-3 flex items-center justify-center">
                  HP
                </div>
                <h4 className="font-serif font-bold text-base text-[#0F392B] mb-1">High Performance</h4>
                <p className="text-[11px] font-bold text-emerald-800 uppercase mb-2">Varsity & USTA</p>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Mandatory evaluation. Advanced periodization, high-tempo drills, video analysis, and Saturday match play.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#0F392B]">Evaluation Required</span>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link
              to="/free-assessments"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F392B] text-white font-semibold text-sm hover:bg-[#18523f] transition-all shadow-sm"
            >
              <span>Schedule a Free 15-Minute Level Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WEEKLY POINT PLAY SPOTLIGHT */}
      <section className="py-20 bg-gradient-to-br from-[#0F392B] to-[#144737] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-lime-300 text-[#0F392B] uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" />
                Player Favorite Drop-In
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
                90 Minutes of Non-Stop Live Ball Point Play
              </h2>
              <p className="text-emerald-100 text-base leading-relaxed">
                Tired of routine ball feeds and repetitive line waiting? Point Play is 90 minutes of adrenaline-fueled doubles competition. Our pro staff feeds balls into situational points, and pairs rotate rapidly according to game outcomes.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-sm text-emerald-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-300 shrink-0" />
                  <span>$60 Drop-in Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-300 shrink-0" />
                  <span>No Long-Term Contract</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-300 shrink-0" />
                  <span>NTRP Matched Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-300 shrink-0" />
                  <span>King of the Court Format</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/book-online"
                  className="px-7 py-4 rounded-xl bg-lime-300 text-[#0F392B] font-bold hover:bg-lime-200 transition-all text-sm shadow-lg flex items-center gap-2"
                >
                  <span>View Point Play Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/self-rating-guide"
                  className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 transition-all text-sm"
                >
                  <span>NTRP Rating Guide</span>
                </Link>
              </div>
            </div>

            {/* Quick Schedule Preview Cards */}
            <div className="lg:col-span-6 space-y-3">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-lime-300 uppercase tracking-wider block">Monday 7:30 – 9:00 PM</span>
                  <h4 className="text-base font-bold text-white">Advanced Point Play (4.0 – 5.0+)</h4>
                  <span className="text-xs text-emerald-200">Strict level requirement • High-tempo tournament pacing</span>
                </div>
                <span className="text-xl font-bold font-serif text-lime-300">$60</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-lime-300 uppercase tracking-wider block">Wednesday 7:30 – 9:00 PM</span>
                  <h4 className="text-base font-bold text-white">Evening Point Play (3.5+ Level)</h4>
                  <span className="text-xs text-emerald-200">Fast competitive rallying • Strategy & tactics</span>
                </div>
                <span className="text-xl font-bold font-serif text-lime-300">$60</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-lime-300 uppercase tracking-wider block">Thursday 7:30 – 9:00 PM</span>
                  <h4 className="text-base font-bold text-white">Intermediate Point Play (2.5 – 3.0 Level)</h4>
                  <span className="text-xs text-emerald-200">Confidence building • Doubles positioning & fun</span>
                </div>
                <span className="text-xl font-bold font-serif text-lime-300">$60</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-lime-300 uppercase tracking-wider block">Sunday 9:00 AM & 10:30 AM</span>
                  <h4 className="text-base font-bold text-white">Sunday Morning Weekend Point Play</h4>
                  <span className="text-xs text-emerald-200">Sessions for 2.5-3.0 and 3.5+ levels</span>
                </div>
                <span className="text-xl font-bold font-serif text-lime-300">$60</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. MEET OUR PRO COACHING STAFF PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#C85A32] uppercase tracking-wider block mb-1">
                World-Class Instruction
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F392B]">
                Meet Our Professional Staff
              </h2>
            </div>
            <Link
              to="/meet-the-staff"
              className="text-sm font-bold text-[#0F392B] hover:text-[#C85A32] transition-colors flex items-center gap-1"
            >
              <span>View All 7 Coaches & Bios</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Susi */}
            <SpotlightCard className="overflow-hidden flex flex-col justify-between">
              <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                <img src="/images/media_22.jpg" alt="Susi Orbanowski" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#C85A32] uppercase tracking-wider block">Owner & Director</span>
                  <h4 className="font-serif font-bold text-lg text-slate-900">Susi Orbanowski</h4>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                    PTR certified coach with decades leading Greenwich tennis instruction, junior summer camps, and Pro Shop operations.
                  </p>
                </div>
                <span className="inline-block mt-4 text-xs font-semibold text-emerald-800">PTR Certified Coach</span>
              </div>
            </SpotlightCard>

            {/* Darren */}
            <SpotlightCard className="overflow-hidden flex flex-col justify-between">
              <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                <img src="/images/media_23.jpg" alt="Darren Lavallee" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#C85A32] uppercase tracking-wider block">Director of Tennis</span>
                  <h4 className="font-serif font-bold text-lg text-slate-900">Darren Lavallee</h4>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                    USPTA Elite Pro (highest designation), CP1 Tennis Canada, and dual B.S. in Professional Tennis Management.
                  </p>
                </div>
                <span className="inline-block mt-4 text-xs font-semibold text-emerald-800">USPTA Elite Professional</span>
              </div>
            </SpotlightCard>

            {/* Alex */}
            <SpotlightCard className="overflow-hidden flex flex-col justify-between">
              <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                <img src="/images/media_24.jpg" alt="Alex Orbanowski" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#C85A32] uppercase tracking-wider block">General Manager</span>
                  <h4 className="font-serif font-bold text-lg text-slate-900">Alex Orbanowski</h4>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                    2x State Doubles Champion (Greenwich High), NCAA Division I UConn Big East Academic All-Star.
                  </p>
                </div>
                <span className="inline-block mt-4 text-xs font-semibold text-emerald-800">NCAA Division I UConn</span>
              </div>
            </SpotlightCard>

            {/* Jared */}
            <SpotlightCard className="overflow-hidden flex flex-col justify-between">
              <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                <img src="/images/media_25.jpg" alt="Jared Dye" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#C85A32] uppercase tracking-wider block">Staff Professional</span>
                  <h4 className="font-serif font-bold text-lg text-slate-900">Jared Dye</h4>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                    NCAA Division I full scholarship player at Rutgers, Collegiate Rookie of the Year, and 12+ years of coaching.
                  </p>
                </div>
                <span className="inline-block mt-4 text-xs font-semibold text-emerald-800">Rutgers D1 Rookie of the Year</span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS & REPUTATION SECTION */}
      <section className="py-20 bg-[#F7F9F6] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-[#C85A32] uppercase tracking-wider">
              Trusted for Generations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F392B]">
              Loved by Fairfield County Tennis Players
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <SpotlightCard
                key={idx}
                className="p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h5 className="font-serif font-bold text-slate-900 text-sm">{t.author}</h5>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {t.tag}
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SUSI O'S PRO SHOP BANNER */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F392B] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-lime-300">
                  On-Site Pro Shop
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold">
                  Susi O's Pro Shop & 24-Hour Stringing
                </h3>
                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Get your racquets restrung within 24 hours by Fairfield County's master technician. Stocking Luxilon, Babolat RPM, Wilson NXT, demo frames, and tournament clay footwear.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to="/pro-shop"
                    className="px-6 py-3.5 rounded-xl bg-lime-300 text-[#0F392B] font-bold text-xs uppercase tracking-wider hover:bg-lime-200 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                  >
                    Explore Pro Shop Services
                  </Link>
                  <a
                    href={`tel:${CLUB_INFO.phone}`}
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider border border-white/20 transition-all"
                  >
                    Call Pro Shop
                  </a>
                </div>
              </div>
              <div className="lg:col-span-4 hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 aspect-[4/3]">
                  <img src="/images/media_7.jpg" alt="Susi O's Pro Shop" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. AUTHENTIC CLUB FACILITY OVERVIEW (ORIGINAL TEXT PRESERVED) */}
      <section className="py-20 bg-[#FBFBFA] border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              Old Greenwich, CT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F392B]">
              About The Old Greenwich Tennis Academy
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm text-sm sm:text-base text-slate-700 leading-relaxed space-y-5">
            <p>
              OGTA offers five indoor championship Har-Tru tennis courts with both men's and ladies locker and dressing rooms, shower, and lavatory facilities. A pro-shop is maintained for the convenience of players where balls, tennis clothing, and other incidentals may be purchased, and where reservations can be made for individuals and lessons.
            </p>
            <p>
              OGTA also offers full programming for juniors and adults. Weekly and weekend clinics for children age 4 and up, and fun events year round. For adults, we offer group clinics by the session, private lessons, ladies leagues, singles leagues, cardio tennis, social parties, and Point Play clinics.
            </p>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
              <div>
                <strong>Location:</strong> 151 Sound Beach Ave, Old Greenwich CT (Adjacent to Metro-North Train Station)
              </div>
              <div className="flex items-center gap-4">
                <a href={`tel:${CLUB_INFO.phone}`} className="font-bold text-[#0F392B] hover:underline">
                  (203) 637-3398
                </a>
                <a href={`mailto:${CLUB_INFO.email}`} className="text-[#C85A32] font-semibold hover:underline">
                  {CLUB_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. LOCATION, HOURS & CONTACT CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#F7F9F6] rounded-3xl p-8 sm:p-12 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Ready to Step on the Clay?
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#0F392B]">
                Visit Us at the Old Greenwich Station
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you're looking for junior clinic placement, season courts, or private coaching, we welcome you to visit or give us a call.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact-us"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0F392B] text-white font-bold text-sm hover:bg-[#18523f] hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-md shadow-emerald-950/10"
              >
                Contact & Directions
              </Link>
              <Link
                to="/book-online"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-sm"
              >
                Book Point Play Online ($60)
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
