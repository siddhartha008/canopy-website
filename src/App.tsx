import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Impact from './components/Impact/Impact';
import About from './components/About/About';
import Footer from './components/shared/Footer';
import RichText from './components/RichText/RichText';
import Testimonials from './components/Testimonials/Testimonials';
import SupportUsSection from './components/Support/Support';
import ThankfulPartnersSection from './components/Thankful/Thankful';
import FeaturedInSection from './components/Featured/featured';
import CanopyOurStory from './components/Story/story';
import MissionVisionPage from './components/Missions/Missions';
import CanopyMeetTeam from './components/MeetTeam/MeetTeam';
import CanopyBoardOfDirectors from './components/BoardOfDirectors/BoardOfDirectors';
import NepalImpactMap from './components/OurImpact/OurImpact';
import CanopyFranceSection from './components/Chapters/France/France';
import CanopyUSASection from './components/Chapters/USA/USA';
import PublicationsPage from './components/Publications/Publications';
import PolicyGuidelinesPage from './components/PolicyGuidelines/policyguidelines';
import MailchimpNewsletter from './components/Newsletter/Newsletter';
import OurWork from './components/OurWork/OurWork';
import CanopyScholarshipPage from './components/OurWork/CANSHIP/Canship';
import KathaBunaun from './components/OurWork/Kathabunaun/KB';
import GetInvolvedSection from './components/GetInvolved/GetInvolved';
import Donate from './components/Donate/Donate';
import PayPalProvider from './components/PayPalProvider';
import OurImpact from './components/OurImpact/OurImpact';
import FAQ from './components/FAQ/faq';
import FeaturedPage from './components/Featured/FeaturedPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <PayPalProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Hero />
                  <RichText />
                  <About />
                  <Impact />
                  <Testimonials />
                  <SupportUsSection />
                  <ThankfulPartnersSection/>
                  <FeaturedInSection/>
                  <MailchimpNewsletter/>
                </motion.div>
              } />

              <Route path="/missions" element={<MissionVisionPage />} />
              <Route path="/story" element={<CanopyOurStory />} />
              <Route path="/meet-the-team" element={<CanopyMeetTeam />} />
              <Route path="/board-of-directors" element={<CanopyBoardOfDirectors />} />
              <Route path="/ourimpact" element={<NepalImpactMap />} />
              <Route path="/canopyfrance" element={<CanopyFranceSection />} />
              <Route path="/canopyusa" element={<CanopyUSASection />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/canopy-policy" element={<PolicyGuidelinesPage />} />
              <Route path="/ourimpact" element={<OurImpact />} />
              <Route path="/ourwork" element={<OurWork />} />
              <Route path="/canship" element={<CanopyScholarshipPage />} />
              <Route path="/katha-bunaun" element={<KathaBunaun />} />
              <Route path="/getinvolved" element={<GetInvolvedSection />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/canopy-faq" element={<FAQ />} />
              <Route path="/featured" element={<FeaturedPage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </PayPalProvider>
  );
}

export default App;