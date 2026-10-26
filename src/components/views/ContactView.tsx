import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send, MessageSquare, AlertCircle } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Clinic Inquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-tennis-sand text-tennis-darkGreen border border-gray-200">
            <MessageSquare className="w-3.5 h-3.5 text-tennis-clay" />
            <span>We'd Love To Hear From You</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            Contact Old Greenwich Tennis Academy
          </h1>

          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Have questions about clinic enrollment, season courts, private lessons, or party rentals? Reach out to our front desk team today.
          </p>
        </div>

        {/* Contact Info Cards & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-tennis-clay shrink-0 border border-gray-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-tennis-green">Academy Location</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    151 Sound Beach Ave<br />Old Greenwich, CT 06870
                  </p>
                  <a
                    href="https://maps.google.com/?q=151+Sound+Beach+Ave+Old+Greenwich+CT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-tennis-clay hover:underline mt-2 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-tennis-green shrink-0 border border-gray-200">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-tennis-green">Direct Telephone</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    <a href={`tel:${CLUB_INFO.phone}`} className="font-bold text-tennis-green hover:underline">
                      {CLUB_INFO.phone}
                    </a>
                  </p>
                  <span className="text-[11px] text-gray-500 mt-0.5 block">Call for reservations, court availability & assessments</span>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-tennis-clay shrink-0 border border-gray-200">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-tennis-green">Email Inquiries</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    <a href={`mailto:${CLUB_INFO.email}`} className="text-tennis-green font-semibold hover:underline">
                      {CLUB_INFO.email}
                    </a>
                  </p>
                  <span className="text-[11px] text-gray-500 mt-0.5 block">We reply promptly during operating hours</span>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-tennis-green shrink-0 border border-gray-200">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-tennis-green">Clubhouse Hours</h4>
                  <div className="text-xs text-gray-600 mt-1 space-y-1">
                    <div><strong>Mon – Thu:</strong> {CLUB_INFO.hours.monThu}</div>
                    <div><strong>Friday:</strong> {CLUB_INFO.hours.fri}</div>
                    <div><strong>Sat – Sun:</strong> {CLUB_INFO.hours.satSun}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-luxury">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-tennis-green">
                    Send Us A Direct Message
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill out the form below and an academy representative will be in touch shortly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 203-637-3398"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Inquiry Topic</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                    >
                      <option value="Clinic Inquiry">Junior or Adult Clinic</option>
                      <option value="Season Court">Season Court Reservation</option>
                      <option value="Private Lessons">Private Coaching Lessons</option>
                      <option value="Party Rental">Full Club Party Rental ($850)</option>
                      <option value="Pro Shop">Pro Shop & Racquet Stringing</option>
                      <option value="Other">Other Question</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you with tennis at OGTA?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-1 focus:ring-tennis-green focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-tennis-green text-white font-bold text-sm hover:bg-tennis-forest transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-tennis-lightGreen text-tennis-green mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-tennis-green">
                  Thanks for contacting OGTA!
                </h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Someone will be in touch with you shortly. For immediate court bookings or emergencies, please call us at <strong>203-637-3398</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
