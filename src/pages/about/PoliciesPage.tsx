import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertCircle, FileText, CheckCircle2, Clock, Footprints, RefreshCw, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PoliciesPage() {
  const policies = [
    {
      icon: Footprints,
      title: 'Har-Tru Clay Court Footwear Policy',
      badge: 'Strictly Enforced',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      description:
        'To protect our championship Har-Tru clay surface and ensure player safety, smooth flat-soled tennis shoes with herringbone tread are MANDATORY. Running sneakers, cross-trainers, trail runners, or shoes with deep knobby soles or sharp heel edges are strictly prohibited on the clay courts. Players with improper footwear will not be permitted on court.',
    },
    {
      icon: Clock,
      title: 'Court Cancellation Policy (24-Hour Notice)',
      badge: 'Court Rentals',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description:
        'All open hourly court reservations require a minimum of 24 hours advance cancellation notice. Cancellations made with less than 24 hours notice, as well as no-shows, will be billed for the full court rental fee. Season court time rules apply separately under individual seasonal lease contracts.',
    },
    {
      icon: RefreshCw,
      title: 'Clinics, Programs & Make-Up Policies',
      badge: 'Instructional Programs',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description:
        'Clinic enrollments are non-refundable after the first scheduled week of the clinic term. Missed clinic sessions may be made up subject to space availability in equivalent level clinics and must be arranged directly with the director during the active semester. Unused make-ups do not roll over to future semesters.',
    },
    {
      icon: HeartHandshake,
      title: 'Code of Conduct & Court Etiquette',
      badge: 'Club Standards',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description:
        'OGTA promotes a respectful, family-friendly athletic atmosphere. Players and spectators are expected to uphold the highest standards of tennis etiquette and sportsmanship. Audible profanity, racquet throwing, abuse of court equipment, or unsportsmanlike behavior will result in immediate loss of court privileges.',
    },
    {
      icon: AlertCircle,
      title: 'Inclement Weather & Facility Closure',
      badge: 'Operations',
      badgeColor: 'bg-slate-50 text-slate-700 border-slate-200',
      description:
        'While our indoor bubble is impervious to rain and ordinary snow, in cases of severe regional blizzards, municipal state of emergency, or power outages, OGTA management reserves the right to suspend operations for safety. Notification will be communicated via email and website banner, and prorated credits or make-ups will be provided.',
    },
    {
      icon: FileText,
      title: 'Liability, Health & Medical Waiver',
      badge: 'Legal',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      description:
        'Participation in tennis activities involves inherent physical exertion and risk. All players (or legal guardians for minors) must have a completed registration form and signed liability release on file with the front desk before participating in clinics, private instruction, or tournament play.',
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#F7F9F6] via-white to-white border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F392B] font-semibold text-xs tracking-wider uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0F392B]" />
              Rules & Guidelines
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0F392B] tracking-tight mb-4">
              Club Policies & Guidelines
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              To ensure an exceptional playing environment, safety for all members and guests, and the preservation of our world-class Har-Tru clay courts, please review the following club policies.
            </p>
          </div>
        </div>
      </section>

      {/* Policies List */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {policies.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FBFBFA] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#0F392B] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-xl text-slate-900">
                        {p.title}
                      </h3>
                    </div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold border self-start sm:self-auto ${p.badgeColor}`}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed sm:pl-13">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Quick Help Card */}
          <div className="mt-12 bg-emerald-50/60 rounded-3xl p-8 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-serif font-bold text-[#0F392B] mb-1">
                Have a question regarding club rules?
              </h4>
              <p className="text-slate-600 text-sm">
                Our front desk team is happy to assist with any policy questions, make-up scheduling, or footwear approvals.
              </p>
            </div>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F392B] text-white font-medium hover:bg-[#18523f] transition-all whitespace-nowrap shadow-sm"
            >
              <span>Contact Front Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
