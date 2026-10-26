import React from 'react';
import { 
  Trophy, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Layers, 
  Star,
  ChevronRight,
  ShoppingBag
} from 'lucide-react';
import { CLUB_INFO, JUNIOR_CLINICS, ADULT_CLINICS, POINT_PLAY_SERVICES, COACHES } from '../../data/ogtaData';
import { SeasonCourtCalculator } from '../calculators/SeasonCourtCalculator';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  onOpenBookingModal: (sessionId?: string) => void;
  onOpenJuniorModal: (clinicId?: string) => void;
  onOpenAdultModal: (levelId?: string) => void;
  onOpenAssessmentModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setCurrentTab,
  onOpenBookingModal,
  onOpenJuniorModal,
  onOpenAdultModal,
  onOpenAssessmentModal
}) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-white overflow-hidden py-16 sm:py-24">
        {/* Decorative subtle background pattern */}
        <div className="absolute inset-0 court-lines-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-tennis-lightGreen/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-tennis-lightGreen text-tennis-green border border-tennis-green/20">
                <Sparkles className="w-3.5 h-3.5 text-tennis-clay" />
                <span>Premier Indoor Har-Tru Tennis in Greenwich, CT</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-tennis-darkGreen leading-[1.12]">
                Championship Tennis on <span className="text-tennis-clay">Har-Tru Clay</span> Courts
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Welcome to Old Greenwich Tennis Academy. Featuring five indoor championship Har-Tru clay tennis courts, world-class junior development, progressive adult clinics, and open seasonal court rentals in Fairfield County.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button
                  onClick={() => onOpenJuniorModal()}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-tennis-clay text-white font-bold text-sm hover:bg-tennis-clayDark transition-all duration-200 shadow-luxury flex items-center justify-center gap-2 group"
                >
                  <span>Register for Clinics</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => setCurrentTab('book')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-tennis-green text-white font-bold text-sm hover:bg-tennis-forest transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-tennis-volt" />
                  <span>Book Point Play ($60)</span>
                </button>
                <button
                  onClick={onOpenAssessmentModal}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-800 font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Free Assessment
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="font-serif text-2xl font-bold text-tennis-green">5</div>
                  <div className="text-xs text-gray-500 font-medium">Indoor Har-Tru Courts</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-tennis-green">32</div>
                  <div className="text-xs text-gray-500 font-medium">Week Indoor Season</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-tennis-green">7+</div>
                  <div className="text-xs text-gray-500 font-medium">Certified Elite Pros</div>
                </div>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-gray-100">
                <img
                  src="/images/media_6.jpg"
                  alt="Old Greenwich Tennis Academy Har-Tru Courts"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to alternative media if needed
                    (e.target as HTMLImageElement).src = '/images/media_4.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-tennis-volt font-bold block">
                        Indoor Climate Controlled
                      </span>
                      <h4 className="font-serif text-base font-bold text-white">
                        Five Har-Tru Championship Courts
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm">
                      Old Greenwich, CT
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Quick Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-tennis-clay/10 text-tennis-clay flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-tennis-clay" />
                </div>
                <div>
                  <div className="text-xs font-bold text-tennis-green">No Membership Fee</div>
                  <div className="text-[11px] text-gray-500">Open to the public & all levels</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Pillar Cards */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Juniors */}
            <div 
              onClick={() => setCurrentTab('juniors')}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-tennis-clay hover:shadow-luxury transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-tennis-clay/10 text-tennis-clay flex items-center justify-center group-hover:bg-tennis-clay group-hover:text-white transition-colors">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-tennis-green group-hover:text-tennis-clay transition-colors">
                  Junior Academy
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Red, Orange, Green, and Yellow Ball clinics from age 4 to 17, plus high performance varsity competition.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-tennis-clay gap-1">
                <span>Explore Clinics</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 2: Adults */}
            <div 
              onClick={() => setCurrentTab('adults')}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-tennis-green hover:shadow-luxury transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-tennis-lightGreen text-tennis-green flex items-center justify-center group-hover:bg-tennis-green group-hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-tennis-green group-hover:text-tennis-forest transition-colors">
                  Adult Programs
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Instruction from 1.0 Beginner to 4.0 Advanced, weekly drill sessions, and competitive USTA league teams.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-tennis-green gap-1">
                <span>View Adult Tracks</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 3: Season Courts */}
            <div 
              onClick={() => setCurrentTab('rentals')}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-tennis-green hover:shadow-luxury transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-tennis-sand text-tennis-darkGreen flex items-center justify-center group-hover:bg-tennis-green group-hover:text-white transition-colors">
                  <Layers className="w-6 h-6 text-tennis-clay" />
                </div>
                <h3 className="font-serif text-xl font-bold text-tennis-green group-hover:text-tennis-forest transition-colors">
                  Season Courts
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Guaranteed weekly court times on 5 Har-Tru clay courts for the entire 32-week season with no membership dues.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-tennis-clay gap-1">
                <span>Check Availability</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 4: Point Play */}
            <div 
              onClick={() => setCurrentTab('book')}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-tennis-green hover:shadow-luxury transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:bg-tennis-volt group-hover:text-tennis-darkGreen transition-colors">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-tennis-green group-hover:text-tennis-forest transition-colors">
                  Point Play ($60)
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Fast-paced situational doubles games with coach-fed scenarios. 6 sessions weekly matched by NTRP rating.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-tennis-green gap-1">
                <span>Book a Session</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About The Facility & Har-Tru Clay Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Image Collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[3/4] bg-gray-100">
                  <img
                    src="/images/media_4.jpg"
                    alt="Har-Tru Tennis Action at OGTA"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/media_18.jpg';
                    }}
                  />
                </div>
                <div className="p-4 bg-tennis-sand/80 rounded-2xl border border-gray-200 text-xs">
                  <span className="font-bold text-tennis-green block text-sm">Gentle on Joints</span>
                  <p className="text-gray-600 mt-0.5">
                    Har-Tru green clay absorbs sliding impact and promotes longer rallies with lower injury risk.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 bg-tennis-lightGreen rounded-2xl border border-tennis-green/20 text-xs">
                  <span className="font-bold text-tennis-green block text-sm">Full Clubhouse</span>
                  <p className="text-gray-700 mt-0.5">
                    Viewing lounge, pro shop, locker rooms with hot showers, and a service kitchen for events.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[3/4] bg-gray-100">
                  <img
                    src="/images/media_5.jpg"
                    alt="Coaching and drills at OGTA"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/media_20.jpg';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Content Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-tennis-clayLight text-tennis-clayDark">
                <Trophy className="w-3.5 h-3.5" />
                About The Old Greenwich Tennis Academy
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-tennis-darkGreen leading-tight">
                A Family-Oriented Tennis Tradition in Old Greenwich
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                OGTA offers five indoor championship Har-Tru tennis courts with both men's and ladies' locker and dressing rooms, hot showers, and lavatory facilities. A comfortable, glass-enclosed viewing lounge lets families watch clinics in progress.
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our full-service Susi O's Pro Shop provides Wilson & Babolat racquets, court shoes, apparel, tennis accessories, and expert <strong>24-hour racquet stringing</strong> turnaround.
              </p>

              {/* Amenity Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {CLUB_INFO.facilities.map((facility, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-tennis-clay shrink-0 mt-0.5" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => setCurrentTab('about')}
                  className="px-6 py-3 rounded-xl bg-tennis-green text-white text-xs font-bold hover:bg-tennis-forest transition-colors shadow-sm flex items-center gap-2"
                >
                  <span>Read Club History & Amenities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setCurrentTab('staff')}
                  className="px-5 py-3 rounded-xl border border-gray-200 text-gray-800 text-xs font-semibold hover:bg-gray-50 transition-colors"
                >
                  Meet All 7 Staff Pros
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Point Play Highlight Banner */}
      <section className="py-16 bg-tennis-darkGreen text-white relative overflow-hidden">
        <div className="absolute inset-0 court-lines-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-tennis-forest">
            <div>
              <span className="text-xs uppercase font-bold text-tennis-volt tracking-wider block mb-1">
                Fast-Paced Action
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                Weekly Point Play Clinics ($60)
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                90 minutes of high-intensity doubles situational play supervised by our staff pros. No long-term commitment required—reserve single sessions.
              </p>
            </div>
            <button
              onClick={() => setCurrentTab('book')}
              className="px-6 py-3 rounded-xl bg-tennis-volt text-tennis-darkGreen font-extrabold text-sm hover:bg-tennis-voltHover transition-colors shadow-lg self-start md:self-auto flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>View All 6 Sessions</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {POINT_PLAY_SERVICES.slice(0, 3).map((session) => (
              <div 
                key={session.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-tennis-volt/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-tennis-volt text-tennis-darkGreen">
                      {session.level}
                    </span>
                    <span className="text-base font-extrabold text-white">
                      ${session.price}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    {session.title}
                  </h3>
                  <div className="text-xs text-gray-300 space-y-1">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-tennis-volt" />
                      <span>{session.day} • {session.time}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onOpenBookingModal(session.id)}
                    className="w-full py-2.5 rounded-xl bg-white text-tennis-darkGreen font-bold text-xs hover:bg-tennis-volt transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Reserve Spot ($60)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Season Court Calculator Showcase */}
      <section className="py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SeasonCourtCalculator />
        </div>
      </section>

      {/* Leadership & Coaching Staff Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
              World-Class Coaching
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-tennis-darkGreen">
              Meet Our Leadership & Staff Professionals
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Our team includes USPTA Elite Professionals, former NCAA Division I champions, and European tour veterans dedicated to your development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COACHES.slice(0, 3).map((coach, idx) => (
              <div 
                key={coach.id}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-tennis-green text-tennis-volt flex items-center justify-center font-serif text-2xl font-bold shadow-md">
                    {coach.name.charAt(0)}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay block">
                      {coach.role}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-tennis-green mt-0.5">
                      {coach.name}
                    </h3>
                    <div className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-tennis-lightGreen text-tennis-green border border-tennis-green/20">
                      {coach.badge}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {coach.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-4 flex items-center justify-between text-xs font-semibold">
                  <button
                    onClick={() => setCurrentTab('staff')}
                    className="text-tennis-clay hover:underline flex items-center gap-1"
                  >
                    <span>Full Credentials</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`mailto:${CLUB_INFO.email}?subject=Private Lesson Inquiry with ${coach.name}`}
                    className="text-tennis-green hover:underline"
                  >
                    Request Lesson
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setCurrentTab('staff')}
              className="px-6 py-3 rounded-xl border border-gray-200 text-xs font-bold text-tennis-green hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
            >
              <span>View All 7 Coaches (Jared Dye, Leonardo Noli, Raphe Hurwitz, James Cosby)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Location & Hours Bar */}
      <section className="py-14 bg-tennis-sand border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            <div className="flex items-start gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-tennis-green shrink-0">
                <MapPin className="w-6 h-6 text-tennis-clay" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-tennis-green">Club Location</h4>
                <p className="text-xs text-gray-600 mt-1">
                  151 Sound Beach Ave<br />Old Greenwich, CT 06870
                </p>
                <a
                  href="https://maps.google.com/?q=151+Sound+Beach+Ave+Old+Greenwich+CT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-tennis-clay hover:underline mt-1 inline-block"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-tennis-green shrink-0">
                <Phone className="w-6 h-6 text-tennis-green" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-tennis-green">Direct Phone & Email</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Phone: <a href={`tel:${CLUB_INFO.phone}`} className="font-bold text-tennis-green hover:underline">{CLUB_INFO.phone}</a><br />
                  Email: <a href={`mailto:${CLUB_INFO.email}`} className="text-gray-600 hover:underline">{CLUB_INFO.email}</a>
                </p>
                <span className="text-[11px] text-gray-500 mt-1 block">Front desk staffed during all active sessions</span>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-tennis-green shrink-0">
                <Clock className="w-6 h-6 text-tennis-clay" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-tennis-green">Facility Hours</h4>
                <div className="text-xs text-gray-600 mt-1 space-y-0.5">
                  <div>Mon–Thu: {CLUB_INFO.hours.monThu}</div>
                  <div>Fri: {CLUB_INFO.hours.fri}</div>
                  <div>Sat–Sun: {CLUB_INFO.hours.satSun}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
