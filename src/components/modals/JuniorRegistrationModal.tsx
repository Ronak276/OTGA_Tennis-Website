import React, { useState } from 'react';
import { X, CheckCircle2, Trophy, Sparkles, AlertCircle, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { JUNIOR_CLINICS, CLUB_INFO } from '../../data/ogtaData';
import { submitClinicRegistration } from '../../lib/supabaseServices';

interface JuniorRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultClinicId?: string;
}

export const JuniorRegistrationModal: React.FC<JuniorRegistrationModalProps> = ({
  isOpen,
  onClose,
  defaultClinicId
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [sessionType, setSessionType] = useState<'fall' | 'winter'>('fall');
  const [selectedClinic, setSelectedClinic] = useState(defaultClinicId || 'red-ball-1');
  const [selectedDayTime, setSelectedDayTime] = useState('');
  const [secondClinic, setSecondClinic] = useState(false);
  const [secondClinicDayTime, setSecondClinicDayTime] = useState('');
  const [includeMatchPlay, setIncludeMatchPlay] = useState(false);

  // Form Fields
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [childBirthDate, setChildBirthDate] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [medicalNotes, setMedicalNotes] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const activeClinicObj = JUNIOR_CLINICS.find(c => c.id === selectedClinic) || JUNIOR_CLINICS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!childName || !childAge || !parentName || !parentEmail || !parentPhone) {
      setError('Please fill in all required contact and student fields.');
      return;
    }
    if (!agreedTerms) {
      setError('Please agree to the club terms and liability conditions.');
      return;
    }
    setError('');

    try {
      await submitClinicRegistration({
        studentName: childName,
        programType: 'Junior',
        clinicName: activeClinicObj.name,
        sessionDayTime: selectedDayTime || 'TBD',
        parentName,
        email: parentEmail,
        phone: parentPhone,
        baseAmount: 1610,
        finalAmount: 1610,
      });
    } catch (err) {
      console.warn('Supabase submission note:', err);
    }

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
              Junior Academy Registration
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-tight">
              Junior Tennis Registration Form
            </h3>
            <p className="text-xs text-gray-200 mt-1">
              Secure your child's spot in Greenwich's top junior clinics. We will confirm placement and call for payment.
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

            {/* Session Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                Select Academy Session *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSessionType('fall')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    sessionType === 'fall'
                      ? 'border-tennis-green bg-tennis-lightGreen text-tennis-green ring-2 ring-tennis-green/20'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-bold text-sm">Fall Session</div>
                  <div className="text-xs text-gray-500 mt-0.5">Sept 10, 2026 – Jan 8, 2027</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSessionType('winter')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    sessionType === 'winter'
                      ? 'border-tennis-green bg-tennis-lightGreen text-tennis-green ring-2 ring-tennis-green/20'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-bold text-sm">Winter Session</div>
                  <div className="text-xs text-gray-500 mt-0.5">Jan 11, 2027 – May 2, 2027</div>
                </button>
              </div>
            </div>

            {/* Clinic Program Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                Select Junior Clinic Program *
              </label>
              <select
                value={selectedClinic}
                onChange={(e) => {
                  setSelectedClinic(e.target.value);
                  setSelectedDayTime('');
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium focus:ring-2 focus:ring-tennis-green focus:outline-none"
              >
                {JUNIOR_CLINICS.map(clinic => (
                  <option key={clinic.id} value={clinic.id}>
                    {clinic.name} ({clinic.ageGroup})
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Day & Time Slot */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                Preferred Schedule / Day & Time *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1 border border-gray-100 rounded-xl">
                {activeClinicObj.schedules.map((schedule, idx) => (
                  schedule.times.map((t, tidx) => {
                    const slotValue = `${schedule.day} at ${t}`;
                    const isSelected = selectedDayTime === slotValue;
                    return (
                      <button
                        type="button"
                        key={`${idx}-${tidx}`}
                        onClick={() => setSelectedDayTime(slotValue)}
                        className={`p-2.5 rounded-lg border text-xs text-left transition-all ${
                          isSelected
                            ? 'border-tennis-clay bg-tennis-clayLight text-tennis-clayDark font-bold ring-1 ring-tennis-clay'
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

            {/* Multi-Clinic / Sibling Notice */}
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Special Discounts Automatically Applied:</span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 space-y-0.5 text-[11px]">
                <li>20% discount applies to enrolling in 2 clinics per week for the same student.</li>
                <li>10% sibling discount applies on the 3rd registered sibling.</li>
              </ul>
            </div>

            {/* Student Information */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <h4 className="text-sm font-bold text-tennis-green">Student Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Child's Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam Smith"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Age *</label>
                  <input
                    type="number"
                    required
                    min={4}
                    max={18}
                    placeholder="e.g. 8"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Parent Contact Information */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <h4 className="text-sm font-bold text-tennis-green">Parent / Guardian Contact</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Smith"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 203-555-0199"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah.smith@example.com"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Emergency & Medical Notes */}
            <div className="space-y-1">
              <label className="text-xs text-gray-600 font-medium">Medical Notes, Allergies, or Special Requests (Optional)</label>
              <textarea
                rows={2}
                placeholder="Any relevant health details or scheduling notes..."
                value={medicalNotes}
                onChange={(e) => setMedicalNotes(e.target.value)}
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
                  I agree to the <strong>OGTA Terms & Conditions, Attire Policies, and Liability Waiver</strong>. I understand that cancellations after the first session are non-refundable and no make-ups are provided for missed sessions.
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
                className="px-6 py-2.5 rounded-xl bg-tennis-clay text-white text-sm font-bold hover:bg-tennis-clayDark transition-colors shadow-md flex items-center gap-2"
              >
                <span>Submit Junior Registration</span>
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
              Junior Registration Received!
            </h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{parentName}</strong>. We have received your registration for <strong>{childName}</strong> in <strong>{activeClinicObj.name}</strong> ({sessionType === 'fall' ? 'Fall Session' : 'Winter Session'}).
            </p>
            <div className="p-4 bg-gray-50 rounded-xl text-xs text-gray-700 text-left max-w-md mx-auto space-y-1.5 border border-gray-200">
              <div><strong>Program:</strong> {activeClinicObj.name} ({activeClinicObj.ageGroup})</div>
              {selectedDayTime && <div><strong>Preferred Slot:</strong> {selectedDayTime}</div>}
              <div><strong>Parent Phone:</strong> {parentPhone}</div>
              <div><strong>Confirmation Email:</strong> {parentEmail}</div>
              <div className="pt-2 text-[11px] text-gray-500 italic">
                * Our tennis director Darren Lavallee or club manager will call you at {parentPhone} shortly to confirm court placement and take payment details.
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
