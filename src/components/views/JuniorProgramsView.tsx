import React, { useState } from 'react';
import { 
  Trophy, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  ChevronRight,
  Award,
  Video,
  Info
} from 'lucide-react';
import { JUNIOR_CLINICS, PRIVATE_LESSONS, CLUB_INFO } from '../../data/ogtaData';

interface JuniorProgramsViewProps {
  onOpenJuniorModal: (clinicId?: string) => void;
  onOpenAssessmentModal: () => void;
}

export const JuniorProgramsView: React.FC<JuniorProgramsViewProps> = ({
  onOpenJuniorModal,
  onOpenAssessmentModal
}) => {
  const [activeSession, setActiveSession] = useState<'fall' | 'winter'>('fall');
  const [selectedClinicTab, setSelectedClinicTab] = useState('red-ball-1');

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-tennis-clayLight text-tennis-clayDark border border-tennis-clay/30">
            <Trophy className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Ages 4 through 17 • Progressive Development</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            Junior Tennis Programs & Clinics
          </h1>

          <p className="text-base text-gray-600 leading-relaxed font-normal">
            From 4-year-olds holding a racquet for the first time to varsity champions aiming for NCAA Division I, our certified staff guides every student through our proven Games-Based Approach on indoor Har-Tru clay.
          </p>

          {/* Session Switcher Tabs */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveSession('fall')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeSession === 'fall'
                  ? 'bg-tennis-green text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>Fall Session (Sept 10, 2026 – Jan 8, 2027)</span>
            </button>
            <button
              onClick={() => setActiveSession('winter')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeSession === 'winter'
                  ? 'bg-tennis-clay text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>Winter Session (Jan 11, 2027 – May 2, 2027)</span>
            </button>
          </div>

          <div className="inline-block p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium">
            ✨ Closed December 24 to January 2 • <strong>10% discount on third sibling</strong> • <strong>20% discount on second clinic</strong> (same student).
          </div>
        </div>

        {/* Junior Pathways Cards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tennis-green">
                Clinic Pathways & Weekly Schedules
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Students are grouped precisely by age, ball compression, and ability.
              </p>
            </div>
            <button
              onClick={onOpenAssessmentModal}
              className="text-xs font-bold text-tennis-clay hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Unsure which clinic? Book a Free Assessment</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JUNIOR_CLINICS.map((clinic) => {
              const ballColorMap = {
                red: 'bg-red-50 text-red-700 border-red-200',
                orange: 'bg-orange-50 text-orange-700 border-orange-200',
                green: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                yellow: 'bg-yellow-50 text-amber-800 border-amber-200',
                performance: 'bg-tennis-lightGreen text-tennis-green border-tennis-green/30'
              };

              return (
                <div
                  key={clinic.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between relative group hover:border-tennis-clay"
                >
                  {clinic.recommended && (
                    <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-tennis-clay text-white shadow-sm">
                      Mandatory Eval
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${ballColorMap[clinic.ballType]}`}>
                        {clinic.ageGroup}
                      </span>
                      <span className="text-xs font-semibold text-gray-500">
                        {activeSession === 'fall' ? 'Fall 2026' : 'Winter 2027'}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-bold text-tennis-darkGreen group-hover:text-tennis-clay transition-colors">
                        {clinic.name}
                      </h3>
                      {clinic.description && (
                        <p className="text-xs text-gray-500 mt-1">{clinic.description}</p>
                      )}
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      {clinic.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-tennis-clay shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Available Schedule Slots */}
                    <div className="space-y-1.5 pt-3 border-t border-gray-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                        Clinic Times Available:
                      </span>
                      <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
                        {clinic.schedules.map((sch, sidx) => (
                          <div key={sidx} className="text-xs flex justify-between py-1 border-b border-gray-50">
                            <span className="font-semibold text-gray-800">{sch.day}:</span>
                            <span className="text-gray-600 text-right">{sch.times.join(' or ')}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tuition & Pricing */}
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100 space-y-1.5 text-xs">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-tennis-clay block">
                        Tuition Breakdown:
                      </span>
                      {clinic.pricing.singleClinic && (
                        <div className="text-gray-700"><strong>1 Clinic/wk:</strong> {clinic.pricing.singleClinic}</div>
                      )}
                      {clinic.pricing.twoClinics && (
                        <div className="text-gray-700"><strong>2 Clinics/wk:</strong> {clinic.pricing.twoClinics}</div>
                      )}
                      {clinic.pricing.withMatchPlay && (
                        <div className="text-gray-700"><strong>With Saturday Match Play:</strong> {clinic.pricing.withMatchPlay}</div>
                      )}
                      {clinic.pricing.twoClinicsWithMatchPlay && (
                        <div className="text-gray-700"><strong>2 Clinics + Match Play:</strong> {clinic.pricing.twoClinicsWithMatchPlay}</div>
                      )}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => onOpenJuniorModal(clinic.id)}
                      className="w-full py-3 rounded-xl bg-tennis-clay text-white text-xs font-bold hover:bg-tennis-clayDark transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>Register for {clinic.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Curriculum Structure (The Games-Based Approach) */}
        <div id="curriculum" className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
              Teaching Methodology
            </span>
            <h2 className="font-serif text-3xl font-bold text-tennis-darkGreen">
              Curriculum Structure: The Games-Based Approach
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              OGTA uses a <strong>Games-Based Approach</strong>. This proven methodology focuses on getting students to understand how to play the game first, then uses technique as an empowering tool to get them to perform better.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Along with learning clinics during the week, every student has an opportunity (and is strongly encouraged) to play practice matches against other kids of similar skill.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-tennis-lightGreen text-tennis-green font-bold flex items-center justify-center text-lg">
                1
              </div>
              <h3 className="font-serif text-lg font-bold text-tennis-green">
                Rallying Competency
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Rally with other students by mastering sending and receiving skills, ball tracking, and footwork positioning.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-tennis-lightGreen text-tennis-green font-bold flex items-center justify-center text-lg">
                2
              </div>
              <h3 className="font-serif text-lg font-bold text-tennis-green">
                Serve & Return
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Start the point with confidence using a reliable overhead serve, and learn active split-step return technique.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-tennis-lightGreen text-tennis-green font-bold flex items-center justify-center text-lg">
                3
              </div>
              <h3 className="font-serif text-lg font-bold text-tennis-green">
                Net Play
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Play the net proactively: punch volleys, directional placement, poaching, and overhead put-aways.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-tennis-lightGreen text-tennis-green font-bold flex items-center justify-center text-lg">
                4
              </div>
              <h3 className="font-serif text-lg font-bold text-tennis-green">
                Play Points
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                "Play-Practice-Play" system: experiencing live points creates instinctive decision-making under match conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Private Lessons & Packages Section */}
        <div id="private-lessons" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-luxury space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                Personalized Instruction
              </span>
              <h2 className="font-serif text-3xl font-bold text-tennis-green">
                Private Lessons & 10-Pack Packages
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                One-on-one intensive coaching for rapid technical breakthroughs and tournament preparation.
              </p>
            </div>
            <div className="p-3 bg-tennis-lightGreen rounded-xl text-xs font-semibold text-tennis-green border border-tennis-green/20">
              Buy 10 Get 1 Free (11 Lessons Total)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Staff Pro */}
            <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-4">
              <h3 className="font-serif text-xl font-bold text-tennis-green">
                OGTA Staff Professional
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between py-1.5 border-b border-gray-200">
                  <span>60 Minutes:</span>
                  <span className="font-bold text-tennis-green">${PRIVATE_LESSONS.staffPro.oneHour}.00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-200">
                  <span>30 Minutes:</span>
                  <span className="font-bold text-tennis-green">${PRIVATE_LESSONS.staffPro.halfHour}.00</span>
                </div>
                <div className="flex justify-between py-1.5 text-tennis-clay font-bold">
                  <span>10-Pack (Buy 10 Get 1 Free):</span>
                  <span>${PRIVATE_LESSONS.staffPro.package10Pack.toLocaleString()}.00</span>
                </div>
              </div>
            </div>

            {/* Tennis Director */}
            <div className="p-6 rounded-2xl border border-tennis-clay/30 bg-tennis-clayLight/40 space-y-4">
              <h3 className="font-serif text-xl font-bold text-tennis-clayDark">
                Director of Tennis (Darren Lavallee)
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between py-1.5 border-b border-tennis-clay/20">
                  <span>60 Minutes:</span>
                  <span className="font-bold text-tennis-clayDark">${PRIVATE_LESSONS.tennisDirector.oneHour}.00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-tennis-clay/20">
                  <span>30 Minutes:</span>
                  <span className="font-bold text-tennis-clayDark">${PRIVATE_LESSONS.tennisDirector.halfHour}.00</span>
                </div>
                <div className="flex justify-between py-1.5 text-tennis-clay font-bold">
                  <span>10-Pack (Buy 10 Get 1 Free):</span>
                  <span>${PRIVATE_LESSONS.tennisDirector.package10Pack.toLocaleString()}.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl text-xs text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3 border border-gray-200">
            <div>
              <strong>Additional Player(s):</strong> {PRIVATE_LESSONS.additionalPlayer} • <strong>Cancellation:</strong> {PRIVATE_LESSONS.policy}
            </div>
            <a
              href={`tel:${CLUB_INFO.phone}`}
              className="px-4 py-2 rounded-lg bg-tennis-green text-white font-bold text-xs shrink-0 hover:bg-tennis-forest"
            >
              Call 203-637-3398 to Schedule
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
