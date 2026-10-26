import React from 'react';
import { ShieldCheck, AlertCircle, FileText, CheckCircle2, Phone, Mail } from 'lucide-react';
import { POLICIES, CLUB_INFO } from '../../data/ogtaData';

export const PoliciesView: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-tennis-sand text-tennis-green border border-gray-200">
            <ShieldCheck className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Club Rules, Guidelines & Disclosure</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            Policies & Code of Conduct
          </h1>

          <p className="text-base text-gray-600 leading-relaxed font-normal">
            To ensure the highest quality experience, court maintenance, and fair play for all juniors and adults, please review our academy policies.
          </p>
        </div>

        {/* Policies Accordion / Cards */}
        <div className="space-y-6">
          {POLICIES.map((policy, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-3 hover:border-tennis-green transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-tennis-lightGreen text-tennis-green flex items-center justify-center font-bold text-xs shrink-0">
                  {idx + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-tennis-green">
                  {policy.title}
                </h3>
              </div>
              <div className="text-xs sm:text-sm text-gray-600 leading-relaxed whitespace-pre-line pl-11">
                {policy.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Questions Card */}
        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 text-center space-y-3">
          <h4 className="font-serif text-xl font-bold text-tennis-green">
            Questions Regarding Our Policies?
          </h4>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            Please reach out to our management team at 203-637-3398 or email info@oldgreenwichtennisacademy.com. We are always happy to assist.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${CLUB_INFO.phone}`}
              className="px-6 py-2.5 rounded-xl bg-tennis-green text-white font-bold text-xs hover:bg-tennis-forest transition-colors inline-block"
            >
              Call Front Desk
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
