import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { PageTransition } from './components/skiper/PageTransition';

// Homepage
import { HomePage } from './pages/HomePage';

// Junior Program Pages
import { JuniorProgramsPage } from './pages/junior/JuniorProgramsPage';
import { FallClinicsPage } from './pages/junior/FallClinicsPage';
import { WinterClinicsPage } from './pages/junior/WinterClinicsPage';
import { JuniorRegistrationPage } from './pages/junior/JuniorRegistrationPage';
import { CurriculumStructurePage } from './pages/junior/CurriculumStructurePage';
import { FreeAssessmentsPage } from './pages/junior/FreeAssessmentsPage';
import { PrivateLessonsPage } from './pages/junior/PrivateLessonsPage';

// Adult Program Pages
import { AdultProgramsPage } from './pages/adult/AdultProgramsPage';
import { AdultClinicsPage } from './pages/adult/AdultClinicsPage';
import { AdultRegistrationPage } from './pages/adult/AdultRegistrationPage';
import { UstaTeamsPage } from './pages/adult/UstaTeamsPage';
import { SelfRatingGuidePage } from './pages/adult/SelfRatingGuidePage';

// Court Rental Pages
import { CourtRentalsPage } from './pages/rentals/CourtRentalsPage';
import { SeasonCourtsPage } from './pages/rentals/SeasonCourtsPage';
import { HourlyRentalsPage } from './pages/rentals/HourlyRentalsPage';
import { EveningRentalPage } from './pages/rentals/EveningRentalPage';

// About & Service Pages
import { AboutPage } from './pages/about/AboutPage';
import { ContactUsPage } from './pages/about/ContactUsPage';
import { PoliciesPage } from './pages/about/PoliciesPage';
import { ProShopPage } from './pages/about/ProShopPage';
import { MeetTheStaffPage } from './pages/about/MeetTheStaffPage';
import { CoachResourcesPage } from './pages/about/CoachResourcesPage';

// Booking & Point Play Pages
import { BookOnlinePage } from './pages/booking/BookOnlinePage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home Routes */}
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/home" element={<PageTransition><HomePage /></PageTransition>} />

        {/* Junior Routes */}
        <Route path="/juniorprograms" element={<PageTransition><JuniorProgramsPage /></PageTransition>} />
        <Route path="/fall-clinics" element={<PageTransition><FallClinicsPage /></PageTransition>} />
        <Route path="/winter-clinics" element={<PageTransition><WinterClinicsPage /></PageTransition>} />
        <Route path="/junior-fall-registration-form" element={<PageTransition><JuniorRegistrationPage /></PageTransition>} />
        <Route path="/junior-registration" element={<PageTransition><JuniorRegistrationPage /></PageTransition>} />
        <Route path="/cirriculum-structure" element={<PageTransition><CurriculumStructurePage /></PageTransition>} />
        <Route path="/curriculum-structure" element={<PageTransition><CurriculumStructurePage /></PageTransition>} />
        <Route path="/free-assessments" element={<PageTransition><FreeAssessmentsPage /></PageTransition>} />
        <Route path="/private-lessons" element={<PageTransition><PrivateLessonsPage /></PageTransition>} />
        <Route path="/private-lessons-1" element={<PageTransition><PrivateLessonsPage /></PageTransition>} />

        {/* Adult Routes */}
        <Route path="/adultprograms" element={<PageTransition><AdultProgramsPage /></PageTransition>} />
        <Route path="/adult-clinics" element={<PageTransition><AdultClinicsPage /></PageTransition>} />
        <Route path="/adult-fall-registration-form" element={<PageTransition><AdultRegistrationPage /></PageTransition>} />
        <Route path="/adult-registration" element={<PageTransition><AdultRegistrationPage /></PageTransition>} />
        <Route path="/usta-adult-teams" element={<PageTransition><UstaTeamsPage /></PageTransition>} />
        <Route path="/self-rating-guide" element={<PageTransition><SelfRatingGuidePage /></PageTransition>} />

        {/* Court Rental Routes */}
        <Route path="/courtrentals" element={<PageTransition><CourtRentalsPage /></PageTransition>} />
        <Route path="/court-rentals" element={<PageTransition><CourtRentalsPage /></PageTransition>} />
        <Route path="/seasoncourts" element={<PageTransition><SeasonCourtsPage /></PageTransition>} />
        <Route path="/season-courts" element={<PageTransition><SeasonCourtsPage /></PageTransition>} />
        <Route path="/hourly-rentals" element={<PageTransition><HourlyRentalsPage /></PageTransition>} />
        <Route path="/evening-rental" element={<PageTransition><EveningRentalPage /></PageTransition>} />

        {/* About & Services Routes */}
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/meet-the-staff" element={<PageTransition><MeetTheStaffPage /></PageTransition>} />
        <Route path="/staff" element={<PageTransition><MeetTheStaffPage /></PageTransition>} />
        <Route path="/pro-shop" element={<PageTransition><ProShopPage /></PageTransition>} />
        <Route path="/policies" element={<PageTransition><PoliciesPage /></PageTransition>} />
        <Route path="/coach-resources" element={<PageTransition><CoachResourcesPage /></PageTransition>} />
        <Route path="/contact-us" element={<PageTransition><ContactUsPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactUsPage /></PageTransition>} />

        {/* Booking & Point Play Routes */}
        <Route path="/signup" element={<PageTransition><BookOnlinePage /></PageTransition>} />
        <Route path="/book-online" element={<PageTransition><BookOnlinePage /></PageTransition>} />
        <Route path="/point-play" element={<PageTransition><BookOnlinePage /></PageTransition>} />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-lime-200 selection:text-emerald-950">
        <Navbar />
        
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
