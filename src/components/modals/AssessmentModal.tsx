import React, { useState } from 'react';
import { X, CheckCircle2, Trophy, Clock, Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [playerType, setPlayerType] = useState<'junior' | 'adult'>('junior');
  const [age, setAge] = useState('');
  const [preferredDays, setPreferredDays] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-100 flex flex-col">
        {/* Header */}
        <div className="p-6 bg-tennis-green text-white relative flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-tennis-forest text-tennis-volt mb-2 border border-tennis-volt/30">
              <Sparkles className="w-3 h-3" />
              100% Complimentary
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-tight">
              Free Level Assessment
            </h3>
            <p className="text-xs text-gray-200 mt-1">
              Not sure which junior or adult clinic is right? Join our tennis director for a 15-minute complimentary on-court evaluation.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                Participant Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPlayerType('junior')}
                  className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                    playerType === 'junior'
                      ? 'border-tennis-green bg-tennis-lightGreen text-tennis-green'
                      : 'border-gray-200 text-gray-600'
                  }`}
                >
                  Junior (Age 4-17)
                </button>
                <button
                  type="button"
                  onClick={() => setPlayerType('adult')}
                  className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                    playerType === 'adult'
                      ? 'border-tennis-green bg-tennis-lightGreen text-tennis-green'
                      : 'border-gray-200 text-gray-600'
                  }`}
                >
                  Adult Player
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-600 font-medium">Full Name *</label>
              <input
                type="text"
                required
                placeholder={playerType === 'junior' ? "Child's Name" : "Your Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
              />
            </div>

            {playerType === 'junior' && (
              <div className="space-y-1">
                <label className="text-xs text-gray-600 font-medium">Child's Age *</label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 9"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-xs text-gray-600 font-medium">Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="203-637-3398"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-600 font-medium">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-600 font-medium">Preferred Days & Times</label>
              <input
                type="text"
                placeholder="e.g. Weekdays after 4 PM or Saturday mornings"
                value={preferredDays}
                onChange={(e) => setPreferredDays(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-tennis-clay text-white text-xs font-bold hover:bg-tennis-clayDark transition-colors flex items-center gap-1.5 shadow"
              >
                <span>Request Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-tennis-lightGreen text-tennis-green mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-xl font-bold text-tennis-green">
              Assessment Request Received!
            </h4>
            <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
              Thanks, <strong>{name}</strong>! Darren Lavallee or a staff pro will call you at <strong>{phone}</strong> to coordinate a quick 15-minute slot that fits your schedule.
            </p>
            <div className="pt-3">
              <button
                onClick={handleClose}
                className="px-6 py-2 rounded-xl bg-tennis-green text-white text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
