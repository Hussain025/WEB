import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Themes', href: '#themes' },
    { name: 'Coordinators', href: '#coordinators' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleRegisterClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdWlwM1klx1ZNMCNYkZBDpsRUuwBhjd-h4tSPn_fMojSyKIWw/viewform', '_blank');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-green-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">HackIndia 2026</h1>
              <p className="text-xs text-gray-400">Mailam Engineering College</p>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
              >
                Register Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-lg"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={handleRegisterClick}
                className="w-full bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold mt-4"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
