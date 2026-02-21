import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-green-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">HackIndia 2026</h3>
                <p className="text-xs text-gray-400">IT Department</p>
              </div>
            </div>
            <p className="text-gray-400">
              India's Biggest Web3 & AI Hackathon organized by the Department of Information Technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-orange-400" />
                <span className="text-sm">
                  Mailam Engineering College<br />
                  Mailam, Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="flex-shrink-0 text-green-400" />
                <a href="mailto:hackindia2026@mailam.edu" className="text-sm hover:text-white transition-colors">
                  hackindia2026@mailam.edu
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="flex-shrink-0 text-orange-400" />
                <a href="tel:+919876543210" className="text-sm hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-green-500 transition-all duration-300">
                <Linkedin size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-green-500 transition-all duration-300">
                <Twitter size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-green-500 transition-all duration-300">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-green-500 transition-all duration-300">
                <Facebook size={20} className="text-white" />
              </a>
            </div>

            <div className="mt-6">
              <h5 className="text-white font-semibold mb-2 text-sm">Quick Links</h5>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-sm">About</a>
                <a href="#prizes" className="block text-gray-400 hover:text-white transition-colors text-sm">Prize Pool</a>
                <a href="#themes" className="block text-gray-400 hover:text-white transition-colors text-sm">Themes & Rules</a>
                <a href="#coordinators" className="block text-gray-400 hover:text-white transition-colors text-sm">Coordinators</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 Mailam Engineering College. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500 fill-current" /> by IT Department
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
