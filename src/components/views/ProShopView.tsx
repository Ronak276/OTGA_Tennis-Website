import React from 'react';
import { ShoppingBag, Clock, CheckCircle2, ShieldCheck, Phone, Mail, Sparkles, ArrowRight } from 'lucide-react';
import { CLUB_INFO } from '../../data/ogtaData';

export const ProShopView: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-tennis-clayLight text-tennis-clayDark border border-tennis-clay/30">
            <ShoppingBag className="w-3.5 h-3.5 text-tennis-clay" />
            <span>Full-Service Clubhouse Pro Shop</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-tennis-darkGreen">
            Susi O's Pro Shop & Racquet Stringing
          </h1>

          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Everything you need for championship tennis on clay. We maintain a curated inventory of performance gear, clay-court footwear, racquets, and express 24-hour stringing.
          </p>
        </div>

        {/* 3 Main Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Apparel */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm hover:shadow-luxury transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-tennis-lightGreen text-tennis-green flex items-center justify-center font-bold">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-tennis-green">
              Apparel for All Ages
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We carry a complete line of stylish ladies' tennis clothes, as well as high-performance attire for men and junior players. Comfortable, breathable, and designed for active movement.
            </p>
            <div className="pt-2 text-xs text-tennis-clay font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ladies, Men & Children sizes in stock</span>
            </div>
          </div>

          {/* Card 2: Clay Court Shoes */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm hover:shadow-luxury transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-tennis-sand text-tennis-clay flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-tennis-green">
              Har-Tru Clay Court Shoes
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Proper flat-sole herringbone tread clay court tennis shoes are required to preserve our Har-Tru surfaces and prevent slips. We stock top brands for juniors and adults.
            </p>
            <div className="pt-2 text-xs text-tennis-clay font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Expert fitting advice on site</span>
            </div>
          </div>

          {/* Card 3: Racquets & Stringing */}
          <div className="bg-white rounded-3xl p-8 border border-tennis-clay/30 bg-tennis-clayLight/20 shadow-sm hover:shadow-luxury transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-tennis-clay text-white flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold text-tennis-clayDark">
                24-Hour Stringing
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-tennis-clay text-white uppercase">
                Fast Turnaround
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              We feature championship racquets and demo models from <strong>Wilson</strong> and <strong>Babolat</strong>, along with professional electronic restringing service with 24-hour turnaround.
            </p>
            <div className="pt-2 text-xs text-tennis-clayDark font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Wilson & Babolat certified dealer</span>
            </div>
          </div>

        </div>

        {/* Stringing Service Callout Banner */}
        <div className="bg-tennis-darkGreen text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs uppercase font-bold text-tennis-volt tracking-wider block">
              Professional Racquet Care
            </span>
            <h2 className="font-serif text-3xl font-bold">
              Need Your Racquet Restrung Before Your Next Match?
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              Drop off your racquet at our front desk at 151 Sound Beach Ave. Choose from our inventory of multifilament, synthetic gut, and polyester strings, or bring your own string set.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${CLUB_INFO.phone}`}
                className="px-6 py-3 rounded-xl bg-tennis-volt text-tennis-darkGreen font-bold text-xs hover:bg-tennis-voltHover transition-colors flex items-center gap-2 shadow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 203-637-3398 for String Inquiries</span>
              </a>
              <span className="text-xs text-gray-300">Open 7 days a week</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
