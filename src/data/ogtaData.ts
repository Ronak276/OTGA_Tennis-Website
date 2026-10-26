export interface ClinicSchedule {
  day: string;
  times: string[];
}

export interface JuniorClinicTier {
  id: string;
  name: string;
  ageGroup: string;
  description?: string;
  ballType: 'red' | 'orange' | 'green' | 'yellow' | 'performance';
  schedules: ClinicSchedule[];
  pricing: {
    singleClinic?: string;
    twoClinics?: string;
    withMatchPlay?: string;
    twoClinicsWithMatchPlay?: string;
    ninetyMin?: string;
    twoNinetyMin?: string;
  };
  features: string[];
  recommended?: boolean;
}

export interface AdultClinicTier {
  id: string;
  level: string;
  name: string;
  durationWeeks: number;
  rates: string;
  schedules: ClinicSchedule[];
  focus: string;
}

export interface CoachProfile {
  id: string;
  name: string;
  role: string;
  badge: string;
  image?: string;
  bio: string;
  credentials: string[];
}

export interface PointPlaySession {
  id: string;
  title: string;
  level: string;
  time: string;
  day: string;
  duration: string;
  price: number;
  note?: string;
  spotsTotal: number;
  spotsAvailable: number;
}

export const CLUB_INFO = {
  name: "Old Greenwich Tennis Academy",
  shortName: "OGTA",
  phone: "203-637-3398",
  phoneRaw: "2036373398",
  email: "info@oldgreenwichtennisacademy.com",
  address: "151 Sound Beach Ave, Old Greenwich, CT 06870",
  hours: {
    monThu: "8:00 AM – 10:00 PM",
    fri: "8:00 AM – 6:30 PM",
    satSun: "8:00 AM – 6:00 PM"
  },
  facilities: [
    "5 indoor championship Har-Tru tennis courts",
    "Spacious lounge with court-side viewing area",
    "Men's & ladies locker and dressing rooms with showers & towels",
    "Full-service Susi O's Pro Shop & 24-hour racquet stringing",
    "Service kitchen for private events and weekend club rentals",
    "Convenient parking right on Sound Beach Avenue"
  ],
  seasonDates: {
    fall: "September 10, 2026 – January 8, 2027",
    winter: "January 11, 2027 – May 2, 2027",
    courtSeason: "September 10, 2026 – May 7, 2027",
    closed: "Thanksgiving (Nov 26) & Holiday Break (Dec 24 – Jan 1)"
  }
};

export const JUNIOR_CLINICS: JuniorClinicTier[] = [
  {
    id: "red-ball-1",
    name: "Red Ball 1",
    ageGroup: "Ages 4 – 6",
    ballType: "red",
    schedules: [
      { day: "Monday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM"] },
      { day: "Tuesday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM"] },
      { day: "Wednesday", times: ["3:30 - 4:15 PM"] },
      { day: "Thursday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM"] },
      { day: "Friday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM"] },
      { day: "Sunday", times: ["12:15 - 1:00 PM"] }
    ],
    pricing: {
      singleClinic: "$780.00 (1x 45 min/wk)",
      twoClinics: "$1,400.00 (2x 45 min/wk — 20% off second clinic)"
    },
    features: [
      "Low compression red felt balls & 19-21\" racquets",
      "Hand-eye coordination, balance & foundational agility",
      "Games-Based Approach to learning basic rallies",
      "Max 4:1 student-to-coach ratio"
    ]
  },
  {
    id: "red-ball-2",
    name: "Red Ball 2",
    ageGroup: "Ages 6 – 8",
    ballType: "red",
    schedules: [
      { day: "Monday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM"] },
      { day: "Tuesday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM"] },
      { day: "Wednesday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM"] },
      { day: "Thursday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM"] },
      { day: "Friday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM"] },
      { day: "Sunday", times: ["12:15 - 1:00 PM"] }
    ],
    pricing: {
      singleClinic: "$780.00 (1x 45 min/wk)",
      twoClinics: "$1,400.00 (2x 45 min/wk — 20% off)",
      withMatchPlay: "$1,200.00 (1x 45 min + Saturday 1:30-2:30 Match Play)"
    },
    features: [
      "Directional rally control across 36-foot court",
      "Overhead serve mechanics & ready position response",
      "Saturday organized friendly match play sessions",
      "Transition mechanics to full point play"
    ]
  },
  {
    id: "orange-ball",
    name: "Orange Ball 1 & 2",
    ageGroup: "10 & Under",
    ballType: "orange",
    schedules: [
      { day: "Monday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM", "5:00 - 6:00 PM"] },
      { day: "Tuesday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM"] },
      { day: "Wednesday", times: ["4:15 - 5:00 PM", "5:00 - 6:00 PM"] },
      { day: "Thursday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM"] },
      { day: "Friday", times: ["3:30 - 4:15 PM", "4:15 - 5:00 PM"] },
      { day: "Sunday", times: ["1:00 - 2:00 PM"] }
    ],
    pricing: {
      singleClinic: "$780.00 (45 min) / $1,040.00 (60 min)",
      twoClinics: "$1,400.00 (2x 45 min) / $1,870.00 (2x 60 min — 20% off)"
    },
    features: [
      "60-foot court play with 50% slower bounce orange balls",
      "Topspin and slice development on groundstrokes",
      "Aggressive net positioning, volleys, and overheads",
      "Tactical positioning for singles & doubles"
    ]
  },
  {
    id: "green-ball",
    name: "Green Ball",
    ageGroup: "12 & Under",
    ballType: "green",
    schedules: [
      { day: "Monday", times: ["5:00 - 6:00 PM"] },
      { day: "Tuesday", times: ["4:30 - 6:00 PM"] },
      { day: "Wednesday", times: ["5:00 - 6:00 PM"] },
      { day: "Thursday", times: ["5:00 - 6:00 PM"] },
      { day: "Friday", times: ["5:00 - 6:00 PM"] },
      { day: "Sunday", times: ["2:00 - 3:00 PM"] }
    ],
    pricing: {
      singleClinic: "$1,040.00 (60 min) / $1,560.00 (90 min)",
      twoClinics: "$1,870.00 (2x 60 min) / $2,800.00 (2x 90 min — 20% off)"
    },
    features: [
      "Full 78-foot regulation court with green dot balls",
      "Full court transition & heavy topspin baseline consistency",
      "First & second serve placement and spin variations",
      "Competitive match strategy and footwork patterns"
    ]
  },
  {
    id: "yellow-ball",
    name: "Yellow Ball 1",
    ageGroup: "13 – 17 Years Old",
    ballType: "yellow",
    schedules: [
      { day: "Monday", times: ["3:30 - 5:00 PM", "6:00 - 7:30 PM"] },
      { day: "Wednesday", times: ["3:30 - 5:00 PM", "6:00 - 7:30 PM"] },
      { day: "Thursday", times: ["6:00 - 7:30 PM"] },
      { day: "Friday", times: ["3:30 - 5:00 PM"] },
      { day: "Sunday", times: ["2:00 - 3:30 PM"] }
    ],
    pricing: {
      singleClinic: "$1,560.00 (1x 90 min)",
      twoClinics: "$2,800.00 (2x 90 min — 20% off)",
      withMatchPlay: "$1,960.00 (1x 90 min + 1.5 hr Saturday Match Play)",
      twoClinicsWithMatchPlay: "$3,200.00 (2x 90 min + 1.5 hr Saturday Match Play)"
    },
    features: [
      "Standard yellow regulation tennis balls",
      "High school team preparation & tournament readiness",
      "Singles patterns, situational pressure points & mental toughness",
      "Saturday match play included in performance packages"
    ]
  },
  {
    id: "high-performance",
    name: "High Performance",
    ageGroup: "12 – 17 Years Old (Mandatory Evaluation)",
    ballType: "performance",
    recommended: true,
    schedules: [
      { day: "Monday", times: ["3:30 - 5:00 PM", "6:00 - 7:30 PM"] },
      { day: "Wednesday", times: ["3:30 - 5:00 PM", "6:00 - 7:30 PM"] },
      { day: "Thursday", times: ["6:00 - 7:30 PM"] },
      { day: "Friday", times: ["3:30 - 5:00 PM"] }
    ],
    pricing: {
      withMatchPlay: "$1,960.00 (1x 90 min + 1.5 hr Saturday 12:00 Match Play)",
      twoClinicsWithMatchPlay: "$3,200.00 (2x 90 min + 1.5 hr Saturday 12:00 Match Play — 20% off)"
    },
    features: [
      "Intensive training for USTA ranked & varsity players",
      "Advanced biomechanics, video feedback & high-tempo drills",
      "Periodized mental conditioning & tournament coaching",
      "Mandatory evaluation required prior to admission"
    ]
  }
];

export const ADULT_CLINICS: AdultClinicTier[] = [
  {
    id: "adult-beginner",
    level: "1.0 - 2.0",
    name: "Beginner",
    durationWeeks: 8,
    rates: "$520 (60 min) / $780 (90 min) per 8-week session",
    focus: "Introduction to fundamental grips, footwork, groundstroke mechanics, and learning to rally confidently.",
    schedules: [
      { day: "Monday", times: ["10:30 AM - 12:00 PM"] },
      { day: "Tuesday", times: ["10:30 AM - 12:00 PM", "6:00 - 7:00 PM"] },
      { day: "Thursday", times: ["9:30 - 10:30 AM"] },
      { day: "Friday", times: ["9:30 - 10:30 AM", "5:00 - 6:00 PM"] }
    ]
  },
  {
    id: "adult-low-intermediate",
    level: "2.5",
    name: "Low Intermediate",
    durationWeeks: 16,
    rates: "$1,040 (60 min) / $1,560 (90 min) per 16-week session",
    focus: "Developing consistent rally depth, directional intent, net approaches, volleys, and basic match play strategies.",
    schedules: [
      { day: "Monday", times: ["10:30 AM - 12:00 PM"] },
      { day: "Tuesday", times: ["6:00 - 7:00 PM"] },
      { day: "Thursday", times: ["10:30 AM - 12:00 PM", "6:00 - 7:30 PM"] },
      { day: "Friday", times: ["10:30 AM - 12:00 PM"] },
      { day: "Sunday", times: ["12:00 - 1:00 PM"] }
    ]
  },
  {
    id: "adult-intermediate",
    level: "3.0 / 3.5",
    name: "Intermediate",
    durationWeeks: 16,
    rates: "$1,040 (60 min) / $1,560 (90 min) per 16-week session",
    focus: "Control of pace, heavy topspin, slice variations, court coverage, tactical doubles poaching, and defensive anticipation.",
    schedules: [
      { day: "Monday", times: ["6:00 - 7:30 PM"] },
      { day: "Tuesday", times: ["10:30 AM - 12:00 PM", "6:00 - 7:00 PM"] },
      { day: "Wednesday", times: ["10:30 AM - 12:00 PM", "6:00 - 7:30 PM"] },
      { day: "Thursday", times: ["10:30 AM - 12:00 PM", "6:00 - 7:30 PM"] }
    ]
  },
  {
    id: "adult-advanced",
    level: "4.0",
    name: "Advanced",
    durationWeeks: 16,
    rates: "$1,560 (90 min) per 16-week session",
    focus: "High-tempo competitive play, situational point simulation, weapon building, aggressive return of serve, and pressure management.",
    schedules: [
      { day: "Monday", times: ["6:00 - 7:30 PM"] },
      { day: "Thursday", times: ["9:00 - 10:30 AM", "10:30 AM - 12:00 PM"] }
    ]
  }
];

export const PRIVATE_LESSONS = {
  staffPro: {
    title: "OGTA Staff Professional",
    oneHour: 150,
    halfHour: 85,
    package10Pack: 1500,
    packageNote: "Buy 10 Get 1 Free (11 lessons total)"
  },
  tennisDirector: {
    title: "Director of Tennis (Darren Lavallee)",
    oneHour: 190,
    halfHour: 95,
    package10Pack: 1900,
    packageNote: "Buy 10 Get 1 Free (11 lessons total)"
  },
  additionalPlayer: "+$40.00 / hour per additional player",
  policy: "24 hours notice must be given for all cancellations. Late cancellations will be charged in full."
};

export const POINT_PLAY_SERVICES: PointPlaySession[] = [
  {
    id: "monday-point-play",
    title: "Monday Advanced Point Play 4.0-5.0+",
    level: "4.0 – 5.0+ Only",
    time: "7:30 PM – 9:00 PM",
    day: "Monday",
    duration: "1 hr 30 min",
    price: 60,
    note: "Strict requirement: 4.0 - 5.0+. No 3.0 or 2.5 players please.",
    spotsTotal: 12,
    spotsAvailable: 4
  },
  {
    id: "wednesday-point-play",
    title: "Wednesday Evening Point Play 3.5+",
    level: "3.5+ Level",
    time: "7:30 PM – 9:00 PM",
    day: "Wednesday",
    duration: "1 hr 30 min",
    price: 60,
    spotsTotal: 12,
    spotsAvailable: 5
  },
  {
    id: "weekday-point-play",
    title: "Weekday Point Play 2.5 - 3.5",
    level: "2.5 – 3.5 Level",
    time: "10:30 AM – 12:00 PM",
    day: "Weekday",
    duration: "1 hr 30 min",
    price: 60,
    spotsTotal: 12,
    spotsAvailable: 6
  },
  {
    id: "sunday-point-play-morning",
    title: "Sunday Morning Point Play 3.5+",
    level: "3.5+ Level",
    time: "9:00 AM – 10:30 AM",
    day: "Sunday",
    duration: "1 hr 30 min",
    price: 60,
    spotsTotal: 12,
    spotsAvailable: 3
  },
  {
    id: "sunday-point-play-midday",
    title: "Sunday Point Play 2.5 - 3.0",
    level: "2.5 – 3.0 Level",
    time: "10:30 AM – 12:00 PM",
    day: "Sunday",
    duration: "1 hr 30 min",
    price: 60,
    spotsTotal: 12,
    spotsAvailable: 5
  },
  {
    id: "thursday-point-play",
    title: "Thursday Evening Point Play 2.5-3.0",
    level: "2.5 – 3.0 Level",
    time: "7:30 PM – 9:00 PM",
    day: "Thursday",
    duration: "1 hr 30 min",
    price: 60,
    spotsTotal: 12,
    spotsAvailable: 4
  }
];

export const SEASON_COURT_RATES = [
  {
    timeSlot: "Early Morning (7:00 AM – 9:00 AM)",
    days: "Monday – Friday",
    oneHourTotal: 2900,
    onePointFiveHourTotal: 4350,
  },
  {
    timeSlot: "Daytime (9:00 AM – 3:30 PM)",
    days: "Monday – Friday",
    oneHourTotal: 3600,
    onePointFiveHourTotal: 5400,
  },
  {
    timeSlot: "Prime Evening (3:30 PM – 10:00 PM)",
    days: "Monday – Friday",
    oneHourTotal: 4000,
    onePointFiveHourTotal: 6000,
  },
  {
    timeSlot: "Weekend (8:00 AM – Closing)",
    days: "Saturday – Sunday",
    oneHourTotal: 4000,
    onePointFiveHourTotal: 6000,
  }
];

export const HOURLY_RENTAL_RATES = {
  advanceBooking: {
    hours: "More than 72 hours in advance",
    rate: 110,
    unit: "per hour"
  },
  shortNotice: {
    hours: "Within 72 hours",
    rate: 90,
    unit: "per hour"
  },
  partyRental: {
    title: "Saturday & Sunday Full Club Party Rental",
    rate: 850,
    features: [
      "Exclusive use of all 5 indoor Har-Tru clay tennis courts",
      "Full use of the viewing lounge & locker rooms with showers",
      "Full access to the service kitchen for catering",
      "Perfect for corporate tournaments, birthdays & charity events"
    ]
  }
};

export const COACHES: CoachProfile[] = [
  {
    id: "susi",
    name: "Susi Orbanowski",
    role: "Owner",
    badge: "PTR Certified Coach",
    bio: "Susi is the owner of OGTA. She has been in the tennis industry for decades and calls OGTA her second home. Susi previously directed the Greenwich town tennis program, runs the celebrated summer camps at OGTA, and is a certified Professional Tennis Registry (PTR) coach who has mentored generations of local juniors.",
    credentials: ["PTR Certified Coach", "Former Director of Greenwich Town Tennis", "Junior Camp Director"]
  },
  {
    id: "darren",
    name: "Darren Lavallee",
    role: "Director of Tennis",
    badge: "USPTA Elite Pro",
    bio: "Darren is certified as a USPTA Elite Pro (the industry's highest designation), certified CP1 by Tennis Canada, and certified by the PTR in U10 and 11-17 age categories. Darren holds dual bachelor's degrees in Marketing and Business Administration with a concentration in Professional Tennis Management. Darren and his family reside in Riverside, CT.",
    credentials: ["USPTA Elite Professional (Highest Designation)", "Tennis Canada CP1 Certified", "PTR U10 & 11-17 Certified", "B.S. Professional Tennis Management"]
  },
  {
    id: "alex",
    name: "Alex Orbanowski",
    role: "General Manager",
    badge: "NCAA Division I UConn",
    bio: "Alex was a captain and 2-time state doubles champion on Greenwich High School's conference & state championship teams. He played collegiate tennis and was a Big East Academic All-Star for Division I UConn, where he twice won the New England Collegiate doubles championships. In 2024, Alex returned to the family business following a career as a technology executive.",
    credentials: ["2x State Doubles Champion (Greenwich High)", "UConn Division I Big East Academic All-Star", "2x New England Collegiate Doubles Champion"]
  },
  {
    id: "jared",
    name: "Jared Dye",
    role: "Staff Professional",
    badge: "Rutgers D1 Rookie of the Year",
    bio: "Jared is an all-around athlete and has been an avid tennis player since age 3. He earned a USTA Junior National Ranking, full NCAA Division I Men's Tennis Scholarship, and Collegiate Rookie of the Year honors. Jared holds a degree in management from Rutgers University and brings 12+ years of coaching excellence with prior stints at Trumbull Racquet Club and Tamarack Country Club.",
    credentials: ["NCAA Division I Men's Scholarship (Rutgers)", "Collegiate Rookie of the Year", "USTA Junior National Ranking", "12+ Years Professional Coaching"]
  },
  {
    id: "leo",
    name: "Leonardo Noli",
    role: "Staff Professional",
    badge: "Second Category Italy",
    bio: "Originally from Arezzo, Italy, Leonardo brings a rich European competitive pedigree to Greenwich. He achieved prestigious Second Category status in Italy and spent formative years training intensely across tennis academies in Italy and Spain, developing an encyclopedic knowledge of clay court biomechanics and tactics.",
    credentials: ["Second Category Italian National Ranking", "European Clay Court Specialist", "Italian & Spanish Academy Trained"]
  },
  {
    id: "raphe",
    name: "Raphe Hurwitz",
    role: "Staff Professional",
    badge: "USPTA Certified",
    bio: "Raised locally in Darien, CT, Raphe has taught tennis for the past 15 years throughout Greenwich and Westchester County. Raphe competed for the University of Tampa where he served as team captain in both his junior and senior campaigns. Raphe is USPTA certified and passionate about elevating players of all skill levels.",
    credentials: ["USPTA Certified Coach", "University of Tampa Team Captain", "15 Years Greenwich/Westchester Coaching"]
  },
  {
    id: "james",
    name: "James Cosby",
    role: "Staff Professional",
    badge: "Greenwich Varsity 4-Year",
    bio: "Born and raised in Greenwich, James played varsity tennis all four years. He has been coaching since age 16 with extensive tenure at the Belle Haven Yacht Club. James is currently completing his finance degree at UConn while remaining an active tournament competitor in the Northeast circuit.",
    credentials: ["Greenwich High 4-Year Varsity Veteran", "Belle Haven Yacht Club Coach", "Active USTA Tournament Competitor"]
  }
];

export const POLICIES = [
  {
    title: "Proper Conduct & Atmosphere",
    content: "We strive to uphold a family-oriented, welcoming, and respectful environment. Proper and courteous sportsmanship is expected at all times on our premises and clay courts."
  },
  {
    title: "Proper Attire & Clay Court Footwear",
    content: "Please wear proper tennis attire, including shirts at all times and flat-soled tennis sneakers specifically designated for Har-Tru clay courts (running shoes or deep-tread running sneakers are strictly prohibited to prevent court surface damage)."
  },
  {
    title: "Adult Clinics Policy",
    content: "Prepaid adult clinic fees are non-refundable. We do not provide refunds or make-up dates for missed clinic sessions."
  },
  {
    title: "Youth Tennis Make-Up Policy",
    content: "No makeups are offered for missed youth sessions."
  },
  {
    title: "Youth Cancellation & Refund Policy",
    content: "1. OGTA reserves the right to cancel any class due to insufficient enrollment prior to or after session start, with full prorated refund.\n2. Refunds are not available for cancellations made after the first scheduled class.\n3. All cancellation requests must be submitted in writing.\n4. Trial classes may be arranged at the daily rate based on availability.\n5. Transfers between classes are permitted if space allows (price differentials apply).\n6. Refunds or makeups are not provided for absences, transport delays, inclement weather, or natural disruptions."
  },
  {
    title: "Weekly Point Play & Sign-Up Classes",
    content: "Cancellations must be made at least 24 hours in advance. No-shows or cancellations within 24 hours will be billed in full."
  },
  {
    title: "Court Rental Cancellations",
    content: "Hourly court rental reservations must be canceled at least 24 hours prior to booking time to receive credit."
  },
  {
    title: "Season Courts Optimization",
    content: "The club reserves the right to adjust court number assignments when necessary to optimize adult and junior academy programming while preserving contracted hours."
  },
  {
    title: "Waiver & Liability Disclosure",
    content: "By choosing to participate in Old Greenwich Tennis Academy activities, participants acknowledge the inherent physical risks of fitness/tennis activities and knowingly assume all risks. A signed waiver is required prior to stepping on court."
  }
];
