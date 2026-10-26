import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Trophy, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';

export const JuniorRegistrationPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('Red Ball 1 (4-6 years old)');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [preferredDays, setPreferredDays] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [error, setError] = useState('');

  const programs = [
    'Red Ball 1 (4-6 years old)',
    'Red Ball 2 (6-8 years old)',
    'Orange Ball (8-10 years old)',
    'Green Ball (10-12 years old)',
    'Yellow Ball (11-16 years old)',
    'Varsity Quest (12-16 years old)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!childName || !parentName || !parentEmail || !parentPhone) {
      setError('Please fill in all required contact and student fields.');
      return;
    }
    if (!agreedTerms) {
      setError('Please agree to the terms & conditions.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-tennis-clayLight text-tennis-clayDark border border-tennis-clay/30">
            <Trophy className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Online Registration</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-tennis-darkGreen">
            Junior Fall Registration Form
          </h1>

          <div className="text-sm font-semibold text-gray-700">
            Winter Session January 11, 2027 to May 2, 2027
          </div>

          <p className="text-xs text-gray-500">
            Select program below and submit your details. Our tennis director Darren Lavallee will contact you for payment and court confirmation.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-luxury space-y-6">
            {error && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2 border border-red-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Select Program Below */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-tennis-clay block">
                Select Program Below *
              </label>
              <div className="space-y-2">
                {programs.map((prog, idx) => (
                  <label
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer text-xs sm:text-sm transition-all ${
                      selectedProgram === prog
                        ? 'border-tennis-clay bg-tennis-clayLight/40 text-tennis-clayDark font-bold ring-1 ring-tennis-clay'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="program"
                      value={prog}
                      checked={selectedProgram === prog}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="text-tennis-clay focus:ring-tennis-clay w-4 h-4"
                    />
                    <span>{prog}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Child & Parent Information */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Child's Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Student Full Name"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Child's Age *</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 8"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Parent Full Name"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Parent Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 203-637-3398"
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
                    placeholder="parent@example.com"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-600 font-medium">Preferred Clinic Day & Time Slots</label>
                <input
                  type="text"
                  placeholder="e.g. Tuesday 3:30-4:15 PM or Friday 4:15-5:00 PM"
                  value={preferredDays}
                  onChange={(e) => setPreferredDays(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                />
              </div>
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 text-xs text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                  className="mt-0.5 rounded text-tennis-clay focus:ring-tennis-clay w-4 h-4"
                />
                <span>
                  I agree to the terms & conditions*
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-tennis-clay text-white font-bold text-sm hover:bg-tennis-clayDark transition-colors shadow flex items-center justify-center gap-2"
              >
                <span>Submit Junior Registration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-luxury text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-tennis-lightGreen text-tennis-green mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-tennis-green">
              Junior Registration Submitted!
            </h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{parentName}</strong>. We have received your registration for <strong>{childName}</strong> for the <strong>{selectedProgram}</strong>.
            </p>
            <div className="p-4 bg-gray-50 rounded-xl text-xs text-gray-700 text-left max-w-sm mx-auto space-y-1 border border-gray-200">
              <div><strong>Program:</strong> {selectedProgram}</div>
              <div><strong>Phone:</strong> {parentPhone}</div>
              <div><strong>Email:</strong> {parentEmail}</div>
              <div className="pt-2 text-[11px] text-gray-500 italic">
                * Our tennis director Darren Lavallee will call {parentPhone} shortly for clinic slot confirmation and payment.
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-tennis-green text-white text-xs font-bold"
              >
                Register Another Child
              </button>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="text-center text-xs text-gray-500 pt-4">
          151 Sound Beach Ave, Old Greenwich CT 203.637.3398 | <a href={`mailto:${CLUB_INFO.email}`} className="text-tennis-clay hover:underline">{CLUB_INFO.email}</a><br />
          Monday, Tuesday, Wednesday, Thursday 8:00-10:00, Friday 8:00am-6:30pm, Saturday and Sunday 8:00am-6:00pm<br />
          ©2026 Old Greenwich Tennis Academy.
        </div>

      </div>
    </div>
  );
};
