import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { CLUB_INFO, JUNIOR_CLINICS, ADULT_CLINICS, JuniorClinicTier, AdultClinicTier } from '../data/ogtaData';

export interface AnnouncementContent {
  enabled: boolean;
  badge: string;
  message: string;
  ctaText: string;
  ctaLink: string;
}

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  imageUrl: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface ClubInfoContent {
  name: string;
  shortName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  weekdayHours: string;
  weekendHours: string;
  courtCount: number;
}

export interface CourtRatesContent {
  hourlyRate: number;
  advanceRate: number;
  weekendBuyoutRate: number;
  ballPackageRate: number;
  earlyMorningSeason: number;
  daytimeSeason: number;
  eveningSeason: number;
  weekendSeason: number;
}

export interface JuniorDataContent {
  redBall1Price: number;
  redBall2Price: number;
  orangeBallPrice: number;
  greenBallPrice: number;
  yellowBallPrice: number;
  highPerformancePrice: number;
  fallDates: string;
  winterDates: string;
  holidayDates: string;
}

export interface AdultDataContent {
  pointPlayPrice: number;
  pointPlayDuration: string;
  pointPlayNotice: string;
  beginnerClinicPrice: number;
  intermediateClinicPrice: number;
  advancedClinicPrice: number;
}

export interface CoachContent {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  credentials: string;
  image?: string;
}

export interface PoliciesContent {
  cancellationHours: number;
  shoeRequirement: string;
  guestPolicy: string;
}

interface SiteContentContextType {
  announcement: AnnouncementContent;
  hero: HeroContent;
  clubInfo: ClubInfoContent;
  courtRates: CourtRatesContent;
  juniorData: JuniorDataContent;
  adultData: AdultDataContent;
  coachesList: CoachContent[];
  policies: PoliciesContent;
  juniorClinics: JuniorClinicTier[];
  adultClinics: AdultClinicTier[];
  loading: boolean;
  refreshContent: () => Promise<void>;
}

const DEFAULT_ANNOUNCEMENT: AnnouncementContent = {
  enabled: true,
  badge: '2026/2027 Season',
  message: 'Now accepting applications for 2026/2027 Season Courts & Fall Junior Clinics.',
  ctaText: 'View Rates',
  ctaLink: '/courtrentals',
};

const DEFAULT_HERO: HeroContent = {
  badge: 'Premier Indoor Har-Tru Tennis • Old Greenwich, CT',
  headline: 'Where Passion Meets Championship Clay',
  subheadline: 'Experience Fairfield County finest climate-controlled tennis facility. Featuring five impeccably maintained championship Har-Tru clay courts, elite junior developmental pathways, dynamic adult clinics, and guaranteed seasonal court reservations — with zero membership or guest fees required.',
  imageUrl: '/images/media_1.jpg',
  primaryCtaText: 'Book Point Play ($60)',
  primaryCtaLink: '/book-online',
  secondaryCtaText: 'Free Junior Assessment',
  secondaryCtaLink: '/juniorprograms',
};

const DEFAULT_CLUB_INFO: ClubInfoContent = {
  name: CLUB_INFO.name,
  shortName: CLUB_INFO.shortName,
  phone: CLUB_INFO.phone,
  email: CLUB_INFO.email,
  address: '151 Sound Beach Avenue',
  city: 'Old Greenwich',
  state: 'CT',
  zip: '06870',
  weekdayHours: '7:00 AM – 10:00 PM',
  weekendHours: '7:00 AM – 8:00 PM',
  courtCount: 5,
};

const DEFAULT_COURT_RATES: CourtRatesContent = {
  hourlyRate: 90,
  advanceRate: 110,
  weekendBuyoutRate: 850,
  ballPackageRate: 250,
  earlyMorningSeason: 2900,
  daytimeSeason: 3600,
  eveningSeason: 4000,
  weekendSeason: 4000,
};

const DEFAULT_JUNIOR_DATA: JuniorDataContent = {
  redBall1Price: 780,
  redBall2Price: 780,
  orangeBallPrice: 1040,
  greenBallPrice: 1300,
  yellowBallPrice: 1560,
  highPerformancePrice: 1960,
  fallDates: 'September 10, 2026 – January 8, 2027',
  winterDates: 'January 11, 2027 – May 2, 2027',
  holidayDates: 'Thanksgiving (Nov 26) & Holiday Break (Dec 24 – Jan 1)',
};

const DEFAULT_ADULT_DATA: AdultDataContent = {
  pointPlayPrice: 60,
  pointPlayDuration: '1 hr 30 min (90 mins)',
  pointPlayNotice: 'Cancellations require 24 hours notice or will be charged in full.',
  beginnerClinicPrice: 520,
  intermediateClinicPrice: 780,
  advancedClinicPrice: 880,
};

const DEFAULT_COACHES: CoachContent[] = [
  {
    id: 'susi',
    name: 'Susi Orbanowski',
    role: 'Owner & Director',
    badge: 'PTR Certified Coach',
    bio: 'Susi is the owner of OGTA. She has been in the tennis industry for decades and calls OGTA her second home. Susi previously directed the Greenwich town tennis program, runs the celebrated summer camps at OGTA, and is a certified Professional Tennis Registry (PTR) coach who has mentored generations of local juniors.',
    credentials: 'PTR Certified Coach • Former Director of Greenwich Town Tennis • Junior Camp Director',
    image: '/images/media_22.jpg',
  },
  {
    id: 'darren',
    name: 'Darren Lavallee',
    role: 'Director of Tennis',
    badge: 'USPTA Elite Pro',
    bio: "Darren is certified as a USPTA Elite Pro (the industry's highest designation), certified CP1 by Tennis Canada, and certified by the PTR in U10 and 11-17 age categories. Darren holds dual bachelor's degrees in Marketing and Business Administration with a concentration in Professional Tennis Management. Darren and his family reside in Riverside, CT.",
    credentials: 'USPTA Elite Professional (Highest Designation) • Tennis Canada CP1 Certified • PTR U10 & 11-17 Certified • B.S. Professional Tennis Management',
    image: '/images/media_23.jpg',
  },
  {
    id: 'alex',
    name: 'Alex Orbanowski',
    role: 'General Manager',
    badge: 'NCAA Division I UConn',
    bio: "Alex was a captain and 2-time state doubles champion on Greenwich High School's conference & state championship teams. He played collegiate tennis and was a Big East Academic All-Star for Division I UConn, where he twice won the New England Collegiate doubles championships. In 2024, Alex returned to the family business following a career as a technology executive.",
    credentials: '2x State Doubles Champion (Greenwich High) • UConn Division I Big East Academic All-Star • 2x New England Collegiate Doubles Champion',
    image: '/images/media_24.jpg',
  },
  {
    id: 'jared',
    name: 'Jared Dye',
    role: 'Staff Professional',
    badge: 'Rutgers D1 Rookie of the Year',
    bio: "Jared is an all-around athlete and has been an avid tennis player since age 3. He earned a USTA Junior National Ranking, full NCAA Division I Men's Tennis Scholarship, and Collegiate Rookie of the Year honors. Jared holds a degree in management from Rutgers University and brings 12+ years of coaching excellence with prior stints at Trumbull Racquet Club and Tamarack Country Club.",
    credentials: "NCAA Division I Men's Scholarship (Rutgers) • Collegiate Rookie of the Year • USTA Junior National Ranking • 12+ Years Professional Coaching",
    image: '/images/media_25.jpg',
  },
  {
    id: 'leo',
    name: 'Leonardo Noli',
    role: 'Staff Professional',
    badge: 'Second Category Italy',
    bio: 'Originally from Arezzo, Italy, Leonardo brings a rich European competitive pedigree to Greenwich. He achieved prestigious Second Category status in Italy and spent formative years training intensely across tennis academies in Italy and Spain, developing an encyclopedic knowledge of clay court biomechanics and tactics.',
    credentials: 'Second Category Italian National Ranking • European Clay Court Specialist • Italian & Spanish Academy Trained',
    image: '/images/media_26.jpg',
  },
  {
    id: 'raphe',
    name: 'Raphe Hurwitz',
    role: 'Staff Professional',
    badge: 'USPTA Certified',
    bio: 'Raised locally in Darien, CT, Raphe has taught tennis for the past 15 years throughout Greenwich and Westchester County. Raphe competed for the University of Tampa where he served as team captain in both his junior and senior campaigns. Raphe is USPTA certified and passionate about elevating players of all skill levels.',
    credentials: 'USPTA Certified Coach • University of Tampa Team Captain • 15 Years Greenwich/Westchester Coaching',
    image: '/images/media_27.jpg',
  },
  {
    id: 'james',
    name: 'James Cosby',
    role: 'Staff Professional',
    badge: 'Greenwich Varsity 4-Year',
    bio: 'Born and raised in Greenwich, James played varsity tennis all four years. He has been coaching since age 16 with extensive tenure at the Belle Haven Yacht Club. James is currently completing his finance degree at UConn while remaining an active tournament competitor in the Northeast circuit.',
    credentials: 'Greenwich High 4-Year Varsity Veteran • Belle Haven Yacht Club Coach • Active USTA Tournament Competitor',
    image: '/images/media_2.jpg',
  },
];

const DEFAULT_POLICIES: PoliciesContent = {
  cancellationHours: 24,
  shoeRequirement: 'Flat-soled clay court tennis shoes are strictly required. Running shoes and aggressive treads are prohibited on Har-Tru.',
  guestPolicy: 'No membership fees or guest fees required. Court time is paid per hour or contracted for 32 weeks.',
};

const SiteContentContext = createContext<SiteContentContextType | undefined>(undefined);

export const SiteContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [announcement, setAnnouncement] = useState<AnnouncementContent>(DEFAULT_ANNOUNCEMENT);
  const [hero, setHero] = useState<HeroContent>(DEFAULT_HERO);
  const [clubInfo, setClubInfo] = useState<ClubInfoContent>(DEFAULT_CLUB_INFO);
  const [courtRates, setCourtRates] = useState<CourtRatesContent>(DEFAULT_COURT_RATES);
  const [juniorData, setJuniorData] = useState<JuniorDataContent>(DEFAULT_JUNIOR_DATA);
  const [adultData, setAdultData] = useState<AdultDataContent>(DEFAULT_ADULT_DATA);
  const [coachesList, setCoachesList] = useState<CoachContent[]>(DEFAULT_COACHES);
  const [policies, setPolicies] = useState<PoliciesContent>(DEFAULT_POLICIES);
  const [juniorClinics, setJuniorClinics] = useState<JuniorClinicTier[]>(JUNIOR_CLINICS);
  const [adultClinics, setAdultClinics] = useState<AdultClinicTier[]>(ADULT_CLINICS);
  const [loading, setLoading] = useState<boolean>(true);

  const applyContentRow = (key: string, content: any) => {
    if (!content) return;
    if (key === 'announcement') setAnnouncement(prev => ({ ...prev, ...content }));
    if (key === 'hero') setHero(prev => ({ ...prev, ...content }));
    if (key === 'club_info') setClubInfo(prev => ({ ...prev, ...content }));
    if (key === 'court_rates') setCourtRates(prev => ({ ...prev, ...content }));
    if (key === 'junior_data') setJuniorData(prev => ({ ...prev, ...content }));
    if (key === 'adult_data') setAdultData(prev => ({ ...prev, ...content }));
    if (key === 'coaches_data' && content.coaches) setCoachesList(content.coaches);
    if (key === 'policies_data') setPolicies(prev => ({ ...prev, ...content }));
    if (key === 'junior_programs_catalog' && Array.isArray(content.clinics)) setJuniorClinics(content.clinics);
    if (key === 'adult_programs_catalog' && Array.isArray(content.clinics)) setAdultClinics(content.clinics);
  };

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase.from('site_content').select('*');
      if (!error && data && data.length > 0) {
        data.forEach(row => applyContentRow(row.section_key, row.content));
      }
    } catch (e) {
      console.warn('Dynamic content fetch note:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();

    // Realtime Supabase listener: updates website immediately on admin save
    const channel = supabase
      .channel('site_content_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'site_content' },
        (payload) => {
          if (payload.new && (payload.new as any).section_key) {
            const newRow = payload.new as { section_key: string; content: any };
            applyContentRow(newRow.section_key, newRow.content);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <SiteContentContext.Provider
      value={{
        announcement,
        hero,
        clubInfo,
        courtRates,
        juniorData,
        adultData,
        coachesList,
        policies,
        juniorClinics,
        adultClinics,
        loading,
        refreshContent: fetchContent,
      }}
    >
      {children}
    </SiteContentContext.Provider>
  );
};

export const useSiteContent = () => {
  const context = useContext(SiteContentContext);
  if (!context) {
    throw new Error('useSiteContent must be used within a SiteContentProvider');
  }
  return context;
};
