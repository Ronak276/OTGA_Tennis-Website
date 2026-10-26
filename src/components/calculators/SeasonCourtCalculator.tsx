import React, { useState } from 'react';
import { Calculator, Users, Clock, DollarSign, Sparkles, CheckCircle2, Info } from 'lucide-react';
import { SEASON_COURT_RATES } from '../../data/ogtaData';

export const SeasonCourtCalculator: React.FC = () => {
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(1); // Default daytime
  const [duration, setDuration] = useState<'1' | '1.5'>('1');
  const [playerCount, setPlayerCount] = useState(4); // Default doubles group
  const [includeBalls, setIncludeBalls] = useState(true); // $250 package

  const currentSlot = SEASON_COURT_RATES[selectedSlotIndex];
  const baseCourtCost = duration === '1' ? currentSlot.oneHourTotal : currentSlot.onePointFiveHourTotal;
  const ballPackageCost = includeBalls ? 250 : 0;
  const totalCost = baseCourtCost + ballPackageCost;
  
  const totalWeeks = 32; // Sept 10 - May 7 (excluding holidays)
  const costPerPlayer = Math.round(totalCost / playerCount);
  const costPerPlayerPerWeek = Math.round(costPerPlayer / totalWeeks);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-luxury max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-gray-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-tennis-clayLight text-tennis-clayDark mb-2">
            <Calculator className="w-3.5 h-3.5" />
            2026/2027 Season Courts • 32 Weeks
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-tennis-green">
            Interactive Season Court Cost Calculator
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Rates are charged per court. Calculate your exact weekly and full season investment per player.
          </p>
        </div>

        <div className="flex items-center gap-2 p-1.5 bg-gray-100 rounded-xl self-start md:self-center">
          <button
            type="button"
            onClick={() => setDuration('1')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              duration === '1'
                ? 'bg-white text-tennis-green shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            1.0 Hour / Week
          </button>
          <button
            type="button"
            onClick={() => setDuration('1.5')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              duration === '1.5'
                ? 'bg-white text-tennis-green shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            1.5 Hours / Week
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Time Slot Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
              1. Select Preferred Time Slot & Day
            </label>
            <div className="space-y-2">
              {SEASON_COURT_RATES.map((slot, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setSelectedSlotIndex(idx)}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                    selectedSlotIndex === idx
                      ? 'border-tennis-green bg-tennis-lightGreen/50 text-tennis-green ring-2 ring-tennis-green/20'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm text-tennis-green">{slot.timeSlot}</div>
                    <div className="text-xs text-gray-500">{slot.days}</div>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-sm text-tennis-clay">
                      ${(duration === '1' ? slot.oneHourTotal : slot.onePointFiveHourTotal).toLocaleString()}
                    </span>
                    <span className="text-[10px] text-gray-400 block">per court / season</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Group Size / Number of Players */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                2. Number of Players in Your Group
              </label>
              <span className="text-xs font-bold text-tennis-green px-2 py-0.5 bg-tennis-lightGreen rounded">
                {playerCount} Players
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[2, 3, 4, 5, 6].map(count => (
                <button
                  type="button"
                  key={count}
                  onClick={() => setPlayerCount(count)}
                  className={`py-2.5 rounded-xl border text-center transition-all ${
                    playerCount === count
                      ? 'border-tennis-clay bg-tennis-clay text-white font-bold shadow-sm'
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-sm font-bold">{count}</div>
                  <div className="text-[10px] opacity-80">{count === 2 ? 'Singles' : count === 4 ? 'Doubles' : 'Rotation'}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Ball Package Option */}
          <div className="pt-2">
            <label className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-100/60 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={includeBalls}
                  onChange={(e) => setIncludeBalls(e.target.checked)}
                  className="rounded text-tennis-green focus:ring-tennis-green w-4 h-4"
                />
                <div>
                  <span className="font-semibold text-xs text-gray-900 block">
                    Add Fresh Can of Balls Package (+$250)
                  </span>
                  <span className="text-[11px] text-gray-500">
                    A fresh can of championship balls waiting for your court every week of the season.
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-tennis-clay">+$250</span>
            </label>
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-tennis-green to-tennis-forest text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-tennis-volt/10 rounded-full blur-2xl" />

          <div className="space-y-6 relative z-10">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-wider text-tennis-volt font-bold block mb-1">
                Estimated Breakdown
              </span>
              <h4 className="font-serif text-2xl font-bold">
                ${costPerPlayerPerWeek}
                <span className="text-xs text-gray-300 font-sans font-normal"> / player per week</span>
              </h4>
              <p className="text-xs text-gray-300 mt-1">
                Equal to just <strong>${costPerPlayer.toLocaleString()}</strong> per player for the entire 32-week indoor season!
              </p>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-gray-200">
                <span>Court Duration:</span>
                <span className="font-bold text-white">{duration} Hour(s) / Week</span>
              </div>
              <div className="flex justify-between text-gray-200">
                <span>Time Slot:</span>
                <span className="font-bold text-white text-right">{currentSlot.timeSlot}</span>
              </div>
              <div className="flex justify-between text-gray-200">
                <span>Base Season Rate:</span>
                <span className="font-bold text-white">${baseCourtCost.toLocaleString()}</span>
              </div>
              {includeBalls && (
                <div className="flex justify-between text-tennis-volt">
                  <span>Ball Package (32 Cans):</span>
                  <span className="font-bold">+$250.00</span>
                </div>
              )}
              <div className="flex justify-between text-gray-200">
                <span>Group Size:</span>
                <span className="font-bold text-white">{playerCount} Players</span>
              </div>
              <div className="pt-3 border-t border-white/20 flex justify-between text-sm font-extrabold text-white">
                <span>Total Court Package:</span>
                <span>${totalCost.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 relative z-10">
            <a
              href="tel:203-637-3398"
              className="w-full py-3 rounded-xl bg-tennis-volt text-tennis-darkGreen font-bold text-xs hover:bg-tennis-voltHover transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Call 203-637-3398 to Reserve Court</span>
            </a>
            <p className="text-[10px] text-gray-300 text-center mt-2">
              No membership fees. First-come, first-served on remaining seasonal court slots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
