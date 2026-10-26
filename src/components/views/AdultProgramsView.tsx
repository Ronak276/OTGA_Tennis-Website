import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Trophy, 
  FileText,
  Mail,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { ADULT_CLINICS, PRIVATE_LESSONS, CLUB_INFO } from '../../data/ogtaData';
import { NTRPQuizModal } from '../calculators/NTRPQuizModal';

interface AdultProgramsViewProps {
  onOpenAdultModal: (levelId?: string) => void;
  onOpenBookingModal: () => void;
}

export const AdultProgramsView: React.FC<AdultProgramsViewProps> = ({
  onOpenAdultModal,
  onOpenBookingModal
}) => {
  const [selectedLevelId, setSelectedLevelId] = useState('adult-low-intermediate');
  const [quizOpen, setQuizOpen] = useState(false);

  const activeLevel = ADULT_CLINICS.find(c => c.id === selectedLevelId) || ADULT_CLINICS[1];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-tennis-lightGreen text-tennis-green border border-tennis-green/20">
            <Users className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Adult Development • Beginner to 4.0 Advanced</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            Adult Tennis Clinics & League Play
          </h1>

          <p className="text-base text-gray-600 leading-relaxed font-normal">
            OGTA offers structured 8-week and 16-week clinic progressions covering everything from technical groundstroke fundamentals to situational doubles strategy, court movement, and serve & volley tactics.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setQuizOpen(true)}
              className="px-5 py-2.5 rounded-xl border border-tennis-clay text-tennis-clay font-bold text-xs hover:bg-tennis-clay hover:text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Award className="w-4 h-4" />
              <span>Find Your Level (NTRP Quiz)</span>
            </button>
            <button
              onClick={() => onOpenAdultModal(selectedLevelId)}
              className="px-6 py-2.5 rounded-xl bg-tennis-green text-white font-bold text-xs hover:bg-tennis-forest transition-colors shadow-sm flex items-center gap-1.5"
            >
              <span>Register Online</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Level Progression Tabs & Detail Section */}
        <div id="adult-clinics" className="space-y-8">
          <div className="border-b border-gray-100 pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tennis-green">
              Adult Clinic Tracks & Schedules
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Select your NTRP skill bracket to see specific day and time options.
            </p>
          </div>

          {/* Level Switcher Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ADULT_CLINICS.map((clinic) => (
              <button
                key={clinic.id}
                onClick={() => setSelectedLevelId(clinic.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedLevelId === clinic.id
                    ? 'border-tennis-green bg-tennis-lightGreen text-tennis-green font-bold ring-2 ring-tennis-green/20 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                }`}
              >
                <div className="text-lg font-serif font-bold">{clinic.level}</div>
                <div className="text-xs text-gray-600 font-medium">{clinic.name}</div>
                <div className="text-[10px] text-gray-400 mt-1">{clinic.durationWeeks}-Week Session</div>
              </button>
            ))}
          </div>

          {/* Active Level Detail Card */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white text-tennis-green border border-gray-200 shadow-sm">
                <span>NTRP Level {activeLevel.level}</span>
                <span>•</span>
                <span>{activeLevel.name}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-tennis-darkGreen">
                {activeLevel.name} Clinic Curriculum
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {activeLevel.focus}
              </p>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 space-y-2 text-xs">
                <span className="font-bold text-tennis-clay uppercase tracking-wider block text-[11px]">
                  Tuition & Sessions:
                </span>
                <div className="text-gray-800 font-semibold">{activeLevel.rates}</div>
                <p className="text-gray-500 text-[11px]">
                  Includes comprehensive weekly on-court drilling, video analysis points, and coach-fed situational reps.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenAdultModal(activeLevel.id)}
                  className="px-6 py-3 rounded-xl bg-tennis-green text-white text-xs font-bold hover:bg-tennis-forest transition-colors shadow-md flex items-center gap-2"
                >
                  <span>Register for Level {activeLevel.level}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Weekly Timetable */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
              <h4 className="font-serif text-base font-bold text-tennis-green flex items-center gap-2">
                <Clock className="w-4 h-4 text-tennis-clay" />
                <span>Available Weekly Timeslots</span>
              </h4>

              <div className="space-y-2.5">
                {activeLevel.schedules.map((sch, sidx) => (
                  <div key={sidx} className="p-3 bg-gray-50 rounded-xl text-xs flex justify-between items-center border border-gray-100">
                    <span className="font-bold text-gray-800">{sch.day}</span>
                    <span className="text-gray-600 font-medium text-right">{sch.times.join(', ')}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-gray-500 italic text-center pt-2">
                For custom group clinics or other times, call Darren at 203-637-3398.
              </p>
            </div>
          </div>
        </div>

        {/* USTA Adult Teams Section */}
        <div id="usta-teams" className="bg-gradient-to-br from-tennis-darkGreen to-tennis-forest text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs uppercase font-bold text-tennis-volt tracking-wider block">
              Competitive League Tennis
            </span>
            <h2 className="font-serif text-3xl font-bold">
              USTA Adult Teams (Fairfield & Westchester)
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Joining an OGTA team is a fantastic opportunity to meet, train, and compete against peer clubs throughout Fairfield and Westchester County.
            </p>
            <p className="text-sm text-gray-200 leading-relaxed">
              We offer team tennis for players of all levels starting from <strong>2.5 through 4.0</strong>. In addition, Director Darren Lavallee manages the Town of Greenwich 3.0/3.5 team that competes in the Fairfield County summer league.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${CLUB_INFO.email}?subject=USTA Team Tennis Inquiry`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-tennis-volt text-tennis-darkGreen font-bold text-xs hover:bg-tennis-voltHover transition-colors shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Darren Regarding USTA Teams</span>
              </a>
            </div>
          </div>
        </div>

        {/* NTRP Self-Rating Guide Box */}
        <div id="self-rating" className="bg-tennis-sand/60 rounded-3xl p-8 sm:p-10 border border-gray-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                Rating Benchmarks
              </span>
              <h2 className="font-serif text-2xl font-bold text-tennis-green">
                USTA NTRP General Characteristics
              </h2>
            </div>
            <button
              onClick={() => setQuizOpen(true)}
              className="px-4 py-2 rounded-xl bg-tennis-green text-white text-xs font-bold hover:bg-tennis-forest self-start sm:self-auto"
            >
              Take Interactive Rating Quiz
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-1.5">
              <span className="font-bold text-tennis-clay text-sm">1.0 – 2.0</span>
              <div className="font-semibold text-gray-800">Beginner</div>
              <p className="text-gray-600">Starting out, learning stroke mechanics, court boundaries, and grip fundamentals.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-1.5">
              <span className="font-bold text-tennis-clay text-sm">2.5</span>
              <div className="font-semibold text-gray-800">Low Intermediate</div>
              <p className="text-gray-600">Can sustain short slow rallies, learning directional intent, net play, and match scoring.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-1.5">
              <span className="font-bold text-tennis-clay text-sm">3.0 – 3.5</span>
              <div className="font-semibold text-gray-800">Intermediate</div>
              <p className="text-gray-600">Consistent groundstrokes on moderate shots, reliable serve, active doubles teamwork and poaching.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-1.5">
              <span className="font-bold text-tennis-clay text-sm">4.0+</span>
              <div className="font-semibold text-gray-800">Advanced</div>
              <p className="text-gray-600">Dependable spin and pace control, weapon strokes, high tactical awareness under match pressure.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Quiz Modal */}
      <NTRPQuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onSelectLevel={() => {
          setQuizOpen(false);
        }}
      />
    </div>
  );
};
