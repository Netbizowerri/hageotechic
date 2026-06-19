import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Snowflake, Phone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Clients', path: '/clients' },
    { name: 'Why Us', path: '/why-choose-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060F1E]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-[#060F1E]/20'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#00AEEF] flex items-center justify-center rounded-xs rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]">
                <div className="w-6 h-6 border-2 border-white -rotate-45 flex items-center justify-center font-display font-black text-xs italic uppercase text-white">
                  H
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-lg md:text-xl tracking-tighter text-white uppercase">
                  HAGEOTECHIC
                </span>
                <span className="font-sans text-[9px] tracking-[0.2em] text-[#00AEEF] uppercase font-semibold">
                  Engineered Excellence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative text-xs uppercase tracking-widest font-medium transition-colors duration-200 py-2 hover:text-brand-accent ${
                      isActive(item.path)
                        ? 'text-brand-accent font-bold'
                        : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* Header Phone CTA */}
              <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                <Link
                  to="/contact"
                  className="bg-[#00AEEF] hover:bg-[#1B4F8A] text-white px-5 py-2 rounded-xs text-[11px] uppercase tracking-widest font-bold font-sans flex items-center gap-1.5 shadow-lg shadow-[#00AEEF]/20 transition-all active:scale-95"
                >
                  Get Quote
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="tel:08037325222"
                className="p-2 border border-brand-accent/20 rounded-lg text-brand-accent bg-brand-dark/50"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                id="menu-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white bg-brand-dark/40 border border-brand-primary/50 focus:outline-none"
                aria-label="Toggle navigation list drawer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-brand-dark/95 border-b border-brand-primary/60 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 rounded-xs text-sm uppercase tracking-wider font-semibold transition-all ${
                      isActive(item.path)
                        ? 'bg-[#0B2545] text-[#00AEEF] border-l-2 border-[#00AEEF] pl-5'
                        : 'text-gray-300 hover:bg-[#0B2545]/40 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-3 px-4 border-t border-white/10">
                  <a
                    href="tel:08037325222"
                    className="flex items-center justify-center gap-2 bg-[#0B2545]/30 text-white px-4 py-3 rounded-xs text-xs font-mono border border-white/10"
                  >
                    <Phone className="w-4 h-4 text-[#00AEEF]" />
                    0803 732 5222
                  </a>
                  <Link
                    to="/contact"
                    className="w-full bg-[#00AEEF] hover:bg-[#1B4F8A] text-white py-3 rounded-xs text-xs uppercase tracking-widest font-bold font-sans flex items-center justify-center gap-1.5 shadow-lg shadow-[#00AEEF]/20"
                  >
                    Request a Quote
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer to push content down and prevent overlapping on inner pages */}
      <div className="h-[76px]" />
    </>
  );
}
