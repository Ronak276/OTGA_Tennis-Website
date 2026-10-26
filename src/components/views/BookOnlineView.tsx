import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  DollarSign, 
  Users, 
  Filter, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  Award,
  Sparkles
} from 'lucide-react';
import { POINT_PLAY_SERVICES } from '../../data/ogtaData';
import { NTRPQuizModal } from '../calculators/NTRPQuizModal';

interface BookOnlineViewProps {
  onOpenBookingModal: (sessionId?: string) => void;
}

export const BookOnlineView: React.FC<BookOnlineViewProps> = ({ onOpenBookingModal }) => {
  const [levelFilter, setLevelFilter] = useState<'all' | '2.5' | '3.5' | '4.0'>('all');
  const [quizOpen, setQuizOpen] = useState(false);

  const filteredSessions = POINT_PLAY_SERVICES.filter(session => {
    if (levelFilter === 'all') return true;
    if (levelFilter === '2.5') return session.level.includes('2.5') || session.level.includes('3.0');
    if (levelFilter === '3.5') return session.level.includes('3.5');
    if (levelFilter === '4.0') return session.level.includes('4.0') || session.level.includes('5.0');
    return true;
  });

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-tennis-sand text-tennis-darkGreen border border-gray-200">
            <Calendar className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Weekly Fast-Paced Doubles Situational Drills</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            Book Online: Point Play Clinics
          </h1>

          <p className="text-base text-gray-600 leading-relaxed font-normal">
            90 minutes of coach-fed, dynamic match situations on Har-Tru green clay. $60 per session flat rate. Reserve your individual spot weekly without a seasonal commitment.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setQuizOpen(true)}
              className="text-xs font-bold text-tennis-clay hover:underline flex items-center gap-1.5"
            >
              <Award className="w-4 h-4" />
              <span>Unsure of your rating? Take the Self-Rating Quiz →</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-tennis-clay shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Filter by NTRP Skill Level:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setLevelFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                levelFilter === 'all'
                  ? 'bg-tennis-green text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Levels
            </button>
            <button
              onClick={() => setLevelFilter('2.5')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                levelFilter === '2.5'
                  ? 'bg-tennis-green text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              2.5 – 3.0 Intermediate
            </button>
            <button
              onClick={() => setLevelFilter('3.5')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                levelFilter === '3.5'
                  ? 'bg-tennis-green text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              3.5+ Solid
            </button>
            <button
              onClick={() => setLevelFilter('4.0')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                levelFilter === '4.0'
                  ? 'bg-tennis-green text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              4.0 – 5.0+ Advanced
            </button>
          </div>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm hover:shadow-luxury hover:border-tennis-green transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-tennis-sand text-tennis-darkGreen border border-tennis-clay/20">
                    {session.level}
                  </span>
                  <span className="text-xl font-extrabold text-tennis-clay">
                    ${session.price}.00
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-tennis-darkGreen group-hover:text-tennis-green transition-colors">
                    {session.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mt-2">
                    <Clock className="w-3.5 h-3.5 text-tennis-clay" />
                    <span className="font-semibold">{session.day}s</span>
                    <span>•</span>
                    <span>{session.time}</span>
                  </div>
                </div>

                {session.note && (
                  <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 font-medium">
                    ⚠️ {session.note}
                  </div>
                )}

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold text-gray-800">{session.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span className="font-semibold text-gray-800">Coach Fed Doubles</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cancellation:</span>
                    <span className="font-semibold text-gray-800">24-hour notice required</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenBookingModal(session.id)}
                  className="w-full py-3 rounded-xl bg-tennis-green text-white text-xs font-bold hover:bg-tennis-forest transition-colors shadow-sm flex items-center justify-center gap-2 group"
                >
                  <span>Book This Session ($60)</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Disclaimer */}
        <div className="p-6 bg-tennis-lightGreen/50 rounded-2xl border border-tennis-green/20 text-xs text-gray-700 space-y-1">
          <div className="font-bold text-tennis-green text-sm flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-tennis-clay" />
            <span>Point Play Guidelines & Attire:</span>
          </div>
          <p>
            • Please arrive 10 minutes prior to session start with proper clay court flat-sole tennis shoes.
          </p>
          <p>
            • Cancellations must be made 24 hours in advance. Late cancellations or no-shows will be billed the full $60.00 fee.
          </p>
          <p>
            • Inquire at the front desk or call 203-637-3398 for ongoing weekly spot reservations.
          </p>
        </div>

      </div>

      <NTRPQuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onSelectLevel={(rating) => {
          if (rating.includes('2.5')) setLevelFilter('2.5');
          else if (rating.includes('3.5')) setLevelFilter('3.5');
          else if (rating.includes('4.0')) setLevelFilter('4.0');
          setQuizOpen(false);
        }}
      />
    </div>
  );
};
