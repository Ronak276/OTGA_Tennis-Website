import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, FileText, Download, CheckCircle2, ArrowRight } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';
import { NTRPQuizModal } from '../../components/calculators/NTRPQuizModal';

export const SelfRatingGuidePage: React.FC = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-tennis-sand text-tennis-darkGreen border border-gray-200">
            <Award className="w-3.5 h-3.5 text-tennis-clay" />
            <span>NTRP Rating Guidelines</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            Self Rating Guide
          </h1>

          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            The National Tennis Rating Program (NTRP) is the official system for rating tennis skill levels. Use this guide to find the appropriate clinic level or Point Play session at OGTA.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.oldgreenwichtennisacademy.com/_files/ugd/1c365b_ee136d493e994e28b40d2ee932e41d64.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-tennis-green text-white font-bold text-xs hover:bg-tennis-forest transition-colors shadow"
            >
              <Download className="w-4 h-4 text-tennis-volt" />
              <span>Download Official Rating Guide (PDF)</span>
            </a>
            <button
              onClick={() => setQuizOpen(true)}
              className="px-5 py-2.5 rounded-xl border border-tennis-clay text-tennis-clay font-bold text-xs hover:bg-tennis-clay hover:text-white transition-colors"
            >
              Take 3-Question Interactive Quiz
            </button>
          </div>
        </div>

        {/* NTRP Detailed Levels */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-tennis-green">1.5 Level</span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-700">Beginner</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Has had limited experience with tennis and is still working primarily on getting the ball into play. Developing basic grip positions and eye-hand coordination.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-tennis-green">2.0 Level</span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-700">Beginner</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Needs on-court experience. Has obvious stroke weaknesses but is familiar with basic positions for singles and doubles play. Able to sustain short slow rallies.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-tennis-green">2.5 Level</span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-tennis-lightGreen text-tennis-green">Low Intermediate</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Learning to judge where the ball is going although court coverage is weak. Can sustain a short rally of slow pace with other players of the same ability. Developing directional intent and punch volleys.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-tennis-green">3.0 Level</span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-tennis-sand text-tennis-darkGreen">Intermediate</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Consistent when hitting medium-paced shots, but is not comfortable with all strokes and lacks execution when trying for direction, depth, or power. Most common doubles formation is one-up, one-back.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-tennis-green">3.5 Level</span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-tennis-sand text-tennis-darkGreen">Intermediate</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Has achieved improved stroke dependability with directional control on moderate shots, but lacks depth and variety. Starting to exhibit more aggressive net play and has improved court coverage.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-tennis-green">4.0 Level</span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-tennis-clay text-white">Advanced</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Has dependable strokes, including directional control and depth on both forehand and backhand sides on moderate-paced shots. Frequently forces errors or wins points off of volleys and overheads.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-tennis-green">4.5 – 5.0+ Level</span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-tennis-darkGreen text-tennis-volt">Championship</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Has developed pace and/or consistency as a major weapon. Can vary strategies and styles of play in a competitive match situation and hits dependable shots in a stress situation.
            </p>
          </div>
        </div>

        {/* Action Link */}
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-gray-600">
            Ready to find your weekly clinic or Point Play match?
          </span>
          <div className="flex gap-3">
            <Link to="/adult-clinics" className="px-4 py-2 rounded-xl bg-tennis-green text-white font-bold text-xs hover:bg-tennis-forest">
              Adult Clinics
            </Link>
            <Link to="/signup" className="px-4 py-2 rounded-xl bg-tennis-clay text-white font-bold text-xs hover:bg-tennis-clayDark">
              Book Point Play
            </Link>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center text-xs text-gray-500 pt-4">
          151 Sound Beach Ave, Old Greenwich CT 203.637.3398 | <a href={`mailto:${CLUB_INFO.email}`} className="text-tennis-clay hover:underline">{CLUB_INFO.email}</a><br />
          Monday, Tuesday, Wednesday, Thursday 8:00-10:00, Friday 8:00am-6:30pm, Saturday and Sunday 8:00am-6:00pm<br />
          ©2026 Old Greenwich Tennis Academy.
        </div>

      </div>

      <NTRPQuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </div>
  );
};
