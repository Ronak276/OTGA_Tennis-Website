import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Calendar, Clock, DollarSign, CheckCircle2, Filter, Sparkles, Phone, ArrowRight } from 'lucide-react';
import { POINT_PLAY_SERVICES } from '../../data/ogtaData';
import { PointPlayBookingModal } from '../../components/modals/PointPlayBookingModal';

export function BookOnlinePage() {
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [activeModalSession, setActiveModalSession] = useState<string | null>(null);

  const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const levels = ['All', '2.5', '3.0', '3.5', '4.0+'];

  const filteredSessions = POINT_PLAY_SERVICES.filter((session) => {
    const dayMatch = selectedDay === 'All' || session.day === selectedDay;
    const levelMatch = selectedLevel === 'All' || session.level.includes(selectedLevel);
    return dayMatch && levelMatch;
  });

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F7F9F6] via-white to-white overflow-hidden border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F392B] font-semibold text-xs tracking-wider uppercase mb-4">
              <Zap className="w-3.5 h-3.5 text-[#0F392B]" />
              Book Online
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F392B] tracking-tight mb-6">
              Weekly Point Play Sessions
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              The ultimate 90-minute fast-paced cardio tennis workout. Play dynamic King-of-the-Court live ball games with pro instruction and structured rotations on championship Har-Tru clay. $60 per session with no long-term commitment.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                90-Minute Live Action
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                $60 Drop-in Rate
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Organized by NTRP Level
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Days Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 shrink-0">
                Day:
              </span>
              {days.map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDay(d)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                    selectedDay === d
                      ? 'bg-[#0F392B] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Level Filter */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
                NTRP:
              </span>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedLevel === lvl
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Session Cards Grid */}
      <section className="py-16 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSessions.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-xl mx-auto p-8">
              <p className="text-slate-500 mb-4">No sessions found matching your selected filters.</p>
              <button
                onClick={() => {
                  setSelectedDay('All');
                  setSelectedLevel('All');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0F392B] text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSessions.map((session) => (
                <div
                  key={session.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold">
                        NTRP {session.level}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {session.spotsTotal} Spots Max
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-slate-900 mb-1">
                      {session.day} Point Play
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">
                      {session.note || 'Championship Indoor Har-Tru Clay'}
                    </p>

                    <div className="space-y-2 py-3 border-t border-b border-slate-100 text-sm text-slate-700 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span className="font-medium">{session.day}s</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span className="font-bold text-slate-900">${session.price}</span>
                        <span className="text-xs text-slate-500">per 90-min session</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveModalSession(session.id)}
                    className="w-full py-3 rounded-xl bg-[#0F392B] text-white font-medium hover:bg-[#18523f] transition-all text-sm text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Reserve Spot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Point Play FAQ / Info */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-[#0F392B] mb-6 text-center">
            What is Point Play at OGTA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="p-6 rounded-2xl bg-[#F7F9F6] border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">High-Energy Live Ball Doubles</h4>
              <p>
                Unlike standard instruction clinics where you wait in lines, Point Play is non-stop live rallying. Pros feed balls into competitive points, and pairs rotate rapidly according to game outcomes.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F7F9F6] border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">24-Hour Cancellation Policy</h4>
              <p>
                Because spots are strictly limited to keep player-to-court ratios optimal, all Point Play reservations require at least 24 hours notice to cancel without charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <PointPlayBookingModal
        isOpen={!!activeModalSession}
        onClose={() => setActiveModalSession(null)}
        selectedSessionId={activeModalSession || undefined}
      />
    </div>
  );
}
