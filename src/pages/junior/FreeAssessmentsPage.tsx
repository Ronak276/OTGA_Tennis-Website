import React, { useState } from 'react';
import { Phone, Mail, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';

export const FreeAssessmentsPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [playerType, setPlayerType] = useState('Junior (Age 4-17)');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-tennis-lightGreen text-tennis-green border border-tennis-green/20">
            <Sparkles className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Complimentary Level Evaluation</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            Free Assessments
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-tennis-clay">
            Call or email for a free assessment!
          </h2>

          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            Not sure which clinic is the best fit for you or your child? Join our Director of Tennis for a 15-minute on-court level evaluation.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href={`tel:${CLUB_INFO.phone}`}
              className="inline-flex items-center gap-1.5 font-bold text-tennis-green hover:underline"
            >
              <Phone className="w-4 h-4 text-tennis-clay" />
              <span>Call: {CLUB_INFO.phone}</span>
            </a>
            <span className="text-gray-300">|</span>
            <a
              href={`mailto:${CLUB_INFO.email}?subject=Free Assessment Request`}
              className="inline-flex items-center gap-1.5 font-bold text-tennis-clay hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>Email: {CLUB_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Direct Assessment Form Card */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-luxury space-y-6">
          <h3 className="font-serif text-2xl font-bold text-tennis-green">
            Schedule Your Free On-Court Evaluation
          </h3>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Participant Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Category *</label>
                  <select
                    value={playerType}
                    onChange={(e) => setPlayerType(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  >
                    <option value="Junior (Age 4-17)">Junior (Age 4-17)</option>
                    <option value="Adult (Beginner / Intermediate)">Adult (Beginner / Intermediate)</option>
                    <option value="Adult (Advanced 3.5 - 4.5+)">Adult (Advanced 3.5 - 4.5+)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-600 font-medium">Contact Phone *</label>
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
                <label className="text-xs text-gray-600 font-medium">Preferred Days & Times (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Weekday afternoons or Saturday mornings"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-tennis-clay text-white font-bold text-xs hover:bg-tennis-clayDark transition-colors shadow flex items-center justify-center gap-1.5"
              >
                <span>Request Assessment Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-tennis-lightGreen text-tennis-green mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-tennis-green">
                Assessment Request Received!
              </h4>
              <p className="text-xs text-gray-600 max-w-sm mx-auto">
                Thank you, <strong>{name}</strong>. Darren Lavallee or a staff pro will call you at <strong>{phone}</strong> to confirm your complimentary 15-minute evaluation slot.
              </p>
            </div>
          )}
        </div>

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
