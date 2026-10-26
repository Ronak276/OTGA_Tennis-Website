import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, Award, FileText, CheckCircle2, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CoachResourcesPage() {
  const resources = [
    {
      title: 'Har-Tru Clay Court Grooming Protocol',
      category: 'Facility Operations',
      desc: 'Standard operating procedures for court dragging, line sweeping, surface moisture maintenance, and calcium chloride distribution across courts 1-5.',
      items: ['Daily court dragging pattern', 'Automated sprinkler schedules', 'Line sweeper maintenance', 'Footwear inspection checklist'],
    },
    {
      title: 'Junior Pathway Skill Matrices',
      category: 'Curriculum & Pedagogy',
      desc: 'Technical competency rubrics for Red Ball (U8), Orange Ball (U10), Green Ball (U12), and Yellow Ball / High Performance graduation benchmarks.',
      items: ['Grip graduation criteria', 'Kinetic chain biomechanics', 'Rally length milestones', 'Point construction evaluation'],
    },
    {
      title: 'Emergency Action Plan & SafeSport',
      category: 'Safety & Compliance',
      desc: 'Guidelines for staff on medical emergencies, AED locations, first aid protocols, concussion management, and USTA SafeSport certification.',
      items: ['AED location in viewing lounge', 'Emergency contact dispatch', 'SafeSport mandatory reporting', 'Parent notification logs'],
    },
    {
      title: 'Staff Drill Bank & Match Formats',
      category: 'Drill Library',
      desc: 'Curated high-intensity dynamic feeding drills, King of the Court rotations, Point Play scoring structures, and doubles positioning exercises.',
      items: ['90-minute Point Play template', 'Adult beginner progression', 'Crosscourt consistency games', 'High-performance situational drills'],
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#F7F9F6] via-white to-white border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F392B] font-semibold text-xs tracking-wider uppercase mb-4">
              <BookOpen className="w-3.5 h-3.5 text-[#0F392B]" />
              Staff Portal
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0F392B] tracking-tight mb-4">
              Coach Resources & Guidelines
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Curriculum standards, Har-Tru court maintenance protocols, safety compliance guidelines, and drill libraries for Old Greenwich Tennis Academy professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((res, idx) => (
              <div
                key={idx}
                className="bg-[#FBFBFA] rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">
                    {res.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#0F392B] mb-3">
                    {res.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                    {res.desc}
                  </p>
                  <div className="space-y-2 mb-6">
                    {res.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">OGTA Internal Standard</span>
                  <span className="inline-flex items-center gap-1 text-emerald-800 font-semibold">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Reference Standard</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
