import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';

export const AdultRegistrationPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [level, setLevel] = useState('2.5 Low Intermediate');
  const [duration, setDuration] = useState('60 Minute Clinic');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDayTime, setPreferredDayTime] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [error, setError] = useState('');

  const levels = [
    '1.0 - 2.0 Beginner (8-Week Session)',
    '2.5 Low Intermediate (16-Week Session)',
    '3.0 / 3.5 Intermediate (16-Week Session)',
    '4.0 Advanced (16-Week Session)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      setError('Please provide your name, phone number, and email.');
      return;
    }
    if (!agreedTerms) {
      setError('Please agree to the registration terms.');
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-tennis-lightGreen text-tennis-green border border-tennis-green/20">
            <Users className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Adult Tennis Enrollment</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-tennis-darkGreen">
            Adult Fall Registration Form
          </h1>

          <div className="text-sm font-semibold text-gray-700">
            Fall Session: September 10 – January 8
          </div>

          <p className="text-xs text-gray-500">
            Select clinic level and duration. Darren Lavallee will contact you for placement confirmation and payment.
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

            {/* Level Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-tennis-green block">
                Select Your Clinic Level *
              </label>
              <div className="space-y-2">
                {levels.map((lvl, idx) => (
                  <label
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer text-xs sm:text-sm transition-all ${
                      level === lvl
                        ? 'border-tennis-green bg-tennis-lightGreen text-tennis-green font-bold ring-1 ring-tennis-green'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="adultLevel"
                      value={lvl}
                      checked={level === lvl}
                      onChange={(e) => setLevel(e.target.value)}
                      className="text-tennis-green focus:ring-tennis-green w-4 h-4"
                    />
                    <span>{lvl}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-tennis-green block">
                Clinic Duration *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDuration('60 Minute Clinic')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    duration === '60 Minute Clinic'
                      ? 'border-tennis-clay bg-tennis-clay text-white font-bold'
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-xs font-bold">60 Minute Clinic</div>
                </button>
                <button
                  type="button"
                  onClick={() => setDuration('90 Minute Clinic')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    duration === '90 Minute Clinic'
                      ? 'border-tennis-clay bg-tennis-clay text-white font-bold'
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-xs font-bold">90 Minute Clinic</div>
                </button>
              </div>
            </div>

            {/* Contact Fields */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="space-y-1">
                <label className="text-xs text-gray-600 font-medium">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 203-637-3398"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Email Address *</label>
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
                <label className="text-xs text-gray-600 font-medium">Preferred Weekly Clinic Day & Time</label>
                <input
                  type="text"
                  placeholder="e.g. Tuesday 6:00-7:00 PM or Thursday 10:30 AM"
                  value={preferredDayTime}
                  onChange={(e) => setPreferredDayTime(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                />
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 text-xs text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                  className="mt-0.5 rounded text-tennis-green focus:ring-tennis-green w-4 h-4"
                />
                <span>
                  I understand that clinic spots are reserved by the session and are non-refundable. Proper clay court tennis shoes are required.
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-tennis-green text-white font-bold text-sm hover:bg-tennis-forest transition-colors shadow flex items-center justify-center gap-2"
              >
                <span>Submit Adult Registration</span>
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
              Adult Registration Submitted!
            </h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. Your registration for <strong>{level}</strong> ({duration}) has been received.
            </p>
            <div className="p-4 bg-gray-50 rounded-xl text-xs text-gray-700 text-left max-w-sm mx-auto space-y-1 border border-gray-200">
              <div><strong>Level:</strong> {level}</div>
              <div><strong>Duration:</strong> {duration}</div>
              <div><strong>Phone:</strong> {phone}</div>
              <div><strong>Email:</strong> {email}</div>
              <div className="pt-2 text-[11px] text-gray-500 italic">
                * Director of Tennis Darren Lavallee will contact you shortly to confirm group scheduling and take payment.
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-tennis-green text-white text-xs font-bold"
              >
                Submit Another Registration
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
