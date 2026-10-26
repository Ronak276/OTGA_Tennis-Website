import React from 'react';
import { Trophy, Award, Mail, Phone, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { COACHES, CLUB_INFO } from '../../data/ogtaData';

export const StaffView: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-tennis-lightGreen text-tennis-green border border-tennis-green/20">
            <Trophy className="w-3.5 h-3.5 text-tennis-clay" />
            <span>USPTA Elite & PTR Certified Professionals</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            Meet The Coaching Staff
          </h1>

          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Our instructional team combines decades of international competitive pedigree, NCAA Division I championship experience, and USPTA Elite designations to provide world-class tennis training for all ages.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              className="bg-white rounded-3xl p-7 border border-gray-200/90 shadow-sm hover:shadow-luxury hover:border-tennis-green transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-tennis-green text-tennis-volt flex items-center justify-center font-serif text-2xl font-bold shadow-md group-hover:scale-105 transition-transform">
                    {coach.name.charAt(0)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-tennis-sand text-tennis-clayDark border border-tennis-clay/20">
                    {coach.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay block">
                    {coach.role}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-tennis-green mt-0.5">
                    {coach.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {coach.bio}
                </p>

                {/* Key Credentials Badges */}
                <div className="pt-2 border-t border-gray-100 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Credentials & Experience:
                  </span>
                  {coach.credentials.map((cred, cidx) => (
                    <div key={cidx} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-tennis-clay shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-4 flex items-center justify-between text-xs">
                <a
                  href={`tel:${CLUB_INFO.phone}`}
                  className="font-bold text-tennis-green hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to Schedule</span>
                </a>
                <a
                  href={`mailto:${CLUB_INFO.email}?subject=Private Lesson Request with ${coach.name}`}
                  className="px-3 py-1.5 rounded-lg bg-tennis-lightGreen text-tennis-green font-semibold hover:bg-tennis-green hover:text-white transition-colors"
                >
                  Request Lesson
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lesson Booking Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-tennis-sand/70 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-tennis-green">
              Interested in Private Lessons or Clinic Placement?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Call our front desk directly at <strong>203-637-3398</strong> or email <strong>info@oldgreenwichtennisacademy.com</strong> to match with the perfect professional for your goals.
            </p>
          </div>
          <a
            href={`tel:${CLUB_INFO.phone}`}
            className="px-6 py-3 rounded-xl bg-tennis-clay text-white font-bold text-xs hover:bg-tennis-clayDark transition-colors shadow flex items-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call 203-637-3398</span>
          </a>
        </div>

      </div>
    </div>
  );
};
