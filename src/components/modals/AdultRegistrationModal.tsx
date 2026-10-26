import React, { useState } from 'react';
import { X, CheckCircle2, Trophy, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { ADULT_CLINICS, CLUB_INFO } from '../../data/ogtaData';

interface AdultRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLevelId?: string;
}

export const AdultRegistrationModal: React.FC<AdultRegistrationModalProps> = ({
  isOpen,
  onClose,
  defaultLevelId
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [selectedLevel, setSelectedLevel] = useState(defaultLevelId || 'adult-low-intermediate');
  const [selectedDayTime, setSelectedDayTime] = useState('');
  const [clinicDuration, setClinicDuration] = useState<'60' | '90'>('60');

  // Fields
  const [playerName, setPlayerName] = useState('');
  const [playerEmail, setPlayerEmail] = useState('');
  const [playerPhone, setPlayerPhone] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('2.5');
  const [notes, setNotes] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const activeLevelObj = ADULT_CLINICS.find(c => c.id === selectedLevel) || ADULT_CLINICS[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName || !playerEmail || !playerPhone) {
      setError('Please provide your name, email, and contact phone number.');
      return;
    }
    if (!agreedTerms) {
      setError('Please agree to the OGTA clinic policy and liability terms.');
      return;
    }
    setError('');
    setStep('success');
  };

  const handleResetAndClose = () => {
    setStep('form');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-gray-100 flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-tennis-green text-white relative rounded-t-2xl flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-tennis-forest text-tennis-volt mb-2 border border-tennis-volt/30">
              <Trophy className="w-3 h-3" />
              Adult Clinic Program
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-tight">
              Adult Fall / Winter Registration
            </h3>
            <p className="text-xs text-gray-200 mt-1">
              Join structured weekly drill clinics from Beginner 1.0 to Advanced 4.0+. We group players by NTRP rating.
            </p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2 border border-red-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Level Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                Select Your Clinic Skill Level *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ADULT_CLINICS.map(clinic => (
                  <button
                    type="button"
                    key={clinic.id}
                    onClick={() => {
                      setSelectedLevel(clinic.id);
                      setSelectedDayTime('');
                    }}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedLevel === clinic.id
                        ? 'border-tennis-green bg-tennis-lightGreen text-tennis-green font-bold ring-2 ring-tennis-green/20'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="text-base font-bold">{clinic.level}</div>
                    <div className="text-[11px] text-gray-500 truncate">{clinic.name}</div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 italic mt-1">
                {activeLevelObj.focus}
              </p>
            </div>

            {/* Clinic Duration & Rates */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                Session Duration & Rates
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setClinicDuration('60')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    clinicDuration === '60'
                      ? 'border-tennis-clay bg-tennis-clayLight text-tennis-clayDark font-bold ring-1 ring-tennis-clay'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-sm font-bold">60 Minute Clinic</div>
                  <div className="text-xs text-gray-600">
                    {activeLevelObj.durationWeeks === 8 ? '$520 (8 Weeks)' : '$1,040 (16 Weeks)'}
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setClinicDuration('90')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    clinicDuration === '90'
                      ? 'border-tennis-clay bg-tennis-clayLight text-tennis-clayDark font-bold ring-1 ring-tennis-clay'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-sm font-bold">90 Minute Clinic</div>
                  <div className="text-xs text-gray-600">
                    {activeLevelObj.durationWeeks === 8 ? '$780 (8 Weeks)' : '$1,560 (16 Weeks)'}
                  </div>
                </button>
              </div>
            </div>

            {/* Schedule Slot Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                Available Times for Level {activeLevelObj.level} *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto p-1 border border-gray-100 rounded-xl">
                {activeLevelObj.schedules.map((schedule, idx) => (
                  schedule.times.map((t, tidx) => {
                    const slotValue = `${schedule.day} ${t}`;
                    const isSelected = selectedDayTime === slotValue;
                    return (
                      <button
                        type="button"
                        key={`${idx}-${tidx}`}
                        onClick={() => setSelectedDayTime(slotValue)}
                        className={`p-2.5 rounded-lg border text-xs text-left transition-all ${
                          isSelected
                            ? 'border-tennis-green bg-tennis-lightGreen text-tennis-green font-bold ring-1 ring-tennis-green'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <span className="block font-semibold">{schedule.day}</span>
                        <span className="text-gray-600">{t}</span>
                      </button>
                    );
                  })
                ))}
              </div>
            </div>

            {/* Player Information */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <h4 className="text-sm font-bold text-tennis-green">Player Contact Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 203-555-0188"
                    value={playerPhone}
                    onChange={(e) => setPlayerPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. david@example.com"
                    value={playerEmail}
                    onChange={(e) => setPlayerEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Tennis Background / Notes */}
            <div className="space-y-1">
              <label className="text-xs text-gray-600 font-medium">Tennis Background / Goals / Scheduling Flexibility (Optional)</label>
              <textarea
                rows={2}
                placeholder="Mention past playing experience or other days you are available..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 text-xs text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                  className="mt-0.5 rounded text-tennis-green focus:ring-tennis-green w-4 h-4"
                />
                <span>
                  I understand that adult clinic spots are reserved by the session and are non-refundable. Proper clay court tennis shoes are required.
                </span>
              </label>
            </div>

            {/* Submit Buttons */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-tennis-green text-white text-sm font-bold hover:bg-tennis-forest transition-colors shadow-md flex items-center gap-2"
              >
                <span>Submit Adult Registration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-tennis-lightGreen text-tennis-green mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-tennis-green">
              Adult Registration Submitted!
            </h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{playerName}</strong>. Your registration for <strong>Level {activeLevelObj.level} {activeLevelObj.name}</strong> ({clinicDuration} min clinic) has been received.
            </p>
            <div className="p-4 bg-gray-50 rounded-xl text-xs text-gray-700 text-left max-w-md mx-auto space-y-1.5 border border-gray-200">
              <div><strong>Program:</strong> {activeLevelObj.level} {activeLevelObj.name} ({activeLevelObj.durationWeeks} weeks)</div>
              {selectedDayTime && <div><strong>Preferred Slot:</strong> {selectedDayTime}</div>}
              <div><strong>Contact:</strong> {playerPhone} | {playerEmail}</div>
              <div className="pt-2 text-[11px] text-gray-500 italic">
                * Director of Tennis Darren Lavallee will contact you shortly to confirm your group placement and clinic start date.
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-tennis-green text-white font-bold text-sm hover:bg-tennis-forest"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
