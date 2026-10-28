import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { CLUB_INFO } from '../data/ogtaData';

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
    id: 'darren',
    name: 'Darren Lavallee',
    role: 'Director of Tennis',
    badge: 'USPTA Elite Pro',
    bio: "Certified as a USPTA Elite Pro, certified CP1 by Tennis Canada, and certified by the PTR in U10 and 11-17 categories. Darren holds dual bachelor's degrees in Marketing and Business Administration with a concentration in Professional Tennis Management.",
    credentials: 'USPTA Elite Pro • Tennis Canada CP1 • PTR U10 & 11-17',
    image: '/images/media_23.jpg',
  },
  {
    id: 'susi',
    name: 'Susi Orbanowski',
    role: 'Owner & Head Pro',
    badge: 'PTR Certified Coach',
    bio: 'Susi is the owner of OGTA and has been mentoring generations of players for decades. Former Director of Greenwich Town Tennis and director of celebrated OGTA summer camps.',
    credentials: 'PTR Certified Coach • Junior Academy Founder',
    image: '/images/media_22.jpg',
  },
  {
    id: 'alex',
    name: 'Alex Orbanowski',
    role: 'Senior Staff Pro',
    badge: 'High Performance Coach',
    bio: 'Lifelong competitive player and coach specializing in modern baseline power mechanics, directional rally discipline, and junior tournament strategy.',
    credentials: 'PTR Certified • Tournament Specialist',
    image: '/images/media_24.jpg',
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
