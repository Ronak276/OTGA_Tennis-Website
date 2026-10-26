import React from 'react';
import { Trophy, CheckCircle2, MapPin, Phone, Users, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';

interface AboutViewProps {
  setCurrentTab: (tab: string) => void;
  onOpenAssessmentModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setCurrentTab, onOpenAssessmentModal }) => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-tennis-sand text-tennis-darkGreen border border-gray-200">
            <Trophy className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Old Greenwich, Connecticut Tradition</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            About The Old Greenwich Tennis Academy
          </h1>

          <p className="text-base text-gray-600 leading-relaxed font-normal">
            For generations, OGTA has served as Fairfield County's home for indoor clay court tennis excellence, warm sportsmanship, and comprehensive player development.
          </p>
        </div>

        {/* Narrative & Photo Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-tennis-green leading-snug">
              Five Indoor Championship Har-Tru Tennis Courts
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              OGTA offers five indoor championship Har-Tru tennis courts with both men's and ladies' locker and dressing rooms, shower, and lavatory facilities. A comfortable, climate-controlled pro-shop and viewing lounge is maintained for the convenience of players where balls, tennis clothing, and racquets may be purchased, and where court reservations can be made.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              OGTA also offers full programming for juniors and adults: weekly and weekend clinics for children age 4 and up, and fun events during the fall and winter seasons. For adults, we offer group clinics by the session, weekly drill and cardio clinics, singles leagues, ladies' teams, social parties, and our popular Point Play sessions.
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay block">
                Club Amenities:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {CLUB_INFO.facilities.map((fac, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-tennis-clay shrink-0" />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => setCurrentTab('rentals')}
                className="px-6 py-3 rounded-xl bg-tennis-green text-white font-bold text-xs hover:bg-tennis-forest transition-colors flex items-center gap-2 shadow"
              >
                <span>View Court Rentals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenAssessmentModal}
                className="px-5 py-3 rounded-xl border border-gray-200 text-gray-800 font-semibold text-xs hover:bg-gray-50 transition-colors"
              >
                Schedule Free Level Evaluation
              </button>
            </div>
          </div>

          {/* Visual Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-gray-100 bg-gray-100">
              <img
                src="/images/media_18.jpg"
                alt="OGTA Facility and courts"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/media_6.jpg';
                }}
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-gray-100 bg-gray-100 mt-6">
              <img
                src="/images/media_21.jpg"
                alt="Tennis training session at OGTA"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/media_4.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Community & Family Heritage Banner */}
        <div className="bg-tennis-darkGreen text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs uppercase font-bold text-tennis-volt tracking-wider block">
              Family-Owned & Operated
            </span>
            <h3 className="font-serif text-3xl font-bold">
              Calling OGTA Our Second Home
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Founded and managed by Susi & Alex Orbanowski alongside Director of Tennis Darren Lavallee, the academy is built on the belief that tennis should be both joyful and technically sound. We know our players by name and welcome players of every age and background.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-gray-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tennis-volt" />
                <span>Over 3 Decades of Coaching</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tennis-volt" />
                <span>All Ages: 4 to 80+</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tennis-volt" />
                <span>Convenient Metro-North Proximity</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
