import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, DollarSign, AlertCircle, ArrowRight, ShieldCheck, User } from 'lucide-react';
import { POINT_PLAY_SERVICES } from '../../data/ogtaData';

interface PointPlayBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSessionId?: string;
}

export const PointPlayBookingModal: React.FC<PointPlayBookingModalProps> = ({
  isOpen,
  onClose,
  selectedSessionId
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [currentSessionId, setCurrentSessionId] = useState(selectedSessionId || POINT_PLAY_SERVICES[0].id);
  const [selectedDate, setSelectedDate] = useState('Next Available Session');

  // Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ratingConfirm, setRatingConfirm] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const currentSession = POINT_PLAY_SERVICES.find(s => s.id === currentSessionId) || POINT_PLAY_SERVICES[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError('Please provide your name, phone, and email to reserve your spot.');
      return;
    }
    if (!ratingConfirm) {
      setError(`Please confirm that your NTRP rating meets the ${currentSession.level} requirement.`);
      return;
    }
    setError('');
    setStep('success');
  };

  const handleResetAndClose = () => {
    setStep('details');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto border border-gray-100 flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-tennis-green text-white relative rounded-t-2xl flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-tennis-volt text-tennis-darkGreen mb-2">
              <Calendar className="w-3 h-3" />
              Book Online • $60
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-tight">
              Point Play Signup
            </h3>
            <p className="text-xs text-gray-200 mt-1">
              Fast-paced, coach-fed doubles point play scenarios on Har-Tru clay.
            </p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleBooking} className="p-6 space-y-5">
            {error && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2 border border-red-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Session Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                Choose Point Play Clinic *
              </label>
              <select
                value={currentSessionId}
                onChange={(e) => setCurrentSessionId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-800 focus:ring-2 focus:ring-tennis-green focus:outline-none"
              >
                {POINT_PLAY_SERVICES.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.title} ({s.day} {s.time})
                  </option>
                ))}
              </select>
            </div>

            {/* Session Summary Card */}
            <div className="p-4 bg-tennis-sand/70 rounded-xl border border-gray-200/80 space-y-2 text-xs text-gray-700">
              <div className="flex items-center justify-between">
                <span className="font-bold text-tennis-green text-sm">{currentSession.title}</span>
                <span className="font-extrabold text-tennis-clay text-sm">${currentSession.price}.00</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-tennis-clay" />
                  {currentSession.duration} ({currentSession.time})
                </span>
                <span className="flex items-center gap-1 font-semibold text-tennis-green">
                  Rating: {currentSession.level}
                </span>
              </div>
              {currentSession.note && (
                <div className="p-2 bg-amber-50 text-amber-900 rounded-lg text-[11px] font-medium border border-amber-200/70">
                  ⚠️ {currentSession.note}
                </div>
              )}
            </div>

            {/* Date Preference */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">Target Session Date</label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
              >
                <option value="Next Available Session">Next Upcoming {currentSession.day} Session</option>
                <option value="In 2 Weeks">Following Week's {currentSession.day}</option>
                <option value="Call for Custom Date">Call to reserve ongoing weekly spot</option>
              </select>
            </div>

            {/* Player Details */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-tennis-green">Your Details</h4>
              <div className="space-y-2">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Phone *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Rating Level Confirmation */}
            <div className="pt-1">
              <label className="flex items-start gap-2 text-xs text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={ratingConfirm}
                  onChange={(e) => setRatingConfirm(e.target.checked)}
                  className="mt-0.5 rounded text-tennis-green focus:ring-tennis-green w-4 h-4"
                />
                <span>
                  I confirm my self-rating meets the <strong>{currentSession.level}</strong> level. I understand that cancellations require 24 hours notice or will be charged $60 in full.
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-tennis-volt text-tennis-darkGreen text-sm font-bold hover:bg-tennis-voltHover transition-colors shadow-md flex items-center gap-1.5"
              >
                <span>Reserve Spot ($60)</span>
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
              Point Play Spot Reserved!
            </h4>
            <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
              We've placed your reservation for <strong>{currentSession.title}</strong> on <strong>{selectedDate}</strong>.
            </p>
            <div className="p-4 bg-gray-50 rounded-xl text-xs text-gray-700 text-left max-w-sm mx-auto space-y-1.5 border border-gray-200">
              <div><strong>Player:</strong> {name}</div>
              <div><strong>Time:</strong> {currentSession.time} (90 mins)</div>
              <div><strong>Fee:</strong> $60 (Pay at front desk on arrival)</div>
              <div><strong>Phone:</strong> {phone}</div>
              <div className="pt-2 text-[11px] text-gray-500 italic">
                * Please bring flat clay-court shoes. If you need to cancel, please notify us at least 24 hours in advance at 203-637-3398.
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-tennis-green text-white font-bold text-sm hover:bg-tennis-forest"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
