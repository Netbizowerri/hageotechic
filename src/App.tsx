import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Snowflake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Code-split routes with lazy loading to satisfy Performance specs (Section 11)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Clients = lazy(() => import('./pages/Clients'));
const WhyChooseUs = lazy(() => import('./pages/WhyChooseUs'));
const Contact = lazy(() => import('./pages/Contact'));
const PreventiveMaintenanceSLA = lazy(() => import('./pages/PreventiveMaintenanceSLA'));

// Reusable Loading Skeleton for Suspense resolution
function PageLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-surface py-20 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="flex flex-col items-center gap-4 relative z-10">
        <div className="p-4 bg-brand-ice text-brand-secondary rounded-2xl animate-spin border border-brand-accent/20">
          <Snowflake className="w-8 h-8 text-brand-secondary" />
        </div>
        <div className="text-center font-sans">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-secondary font-bold block">
            HAGEOTECHIC
          </span>
          <span className="text-[10px] text-gray-400 font-mono tracking-wider block mt-1">
            Loading Engineering Console...
          </span>
        </div>
      </div>
    </div>
  );
}

// ScrollToTop on route switches
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Route animator block
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex-1 flex flex-col"
      >
        <Suspense fallback={<PageLoading />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/preventive-maintenance-sla" element={<PreventiveMaintenanceSLA />} />
            
            {/* Fallback route - redirects back down to Home or custom page */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-surface flex flex-col font-sans">
        {/* Persistent Premium Navigation */}
        <Navbar />
        
        {/* Page contents mapped with route controllers */}
        <main className="flex-1 flex flex-col">
          <AnimatedRoutes />
        </main>
        
        {/* Footers */}
        <Footer />
      </div>
    </Router>
  );
}
