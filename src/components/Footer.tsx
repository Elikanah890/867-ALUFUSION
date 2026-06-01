import { Link } from "@tanstack/react-router";
import { Phone, Mail, Clock, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0F1A] text-white pt-16 pb-8 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 - Logo & Company - IMPROVED */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src="/logo/alufusion-logo.png" 
                alt="867 ALUFUSION Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement
                  img.style.display = 'none'
                }}
              />
              <div>
                <span className="text-xl font-bold text-white">867 <span className="text-primary">ALUFUSION</span></span>
                <p className="text-xs text-gray-400">Limited</p>
              </div>
            </Link>
            <p className="text-white/70 mb-2 text-sm">We install your vision.</p>
            <p className="text-white/50 text-xs">Premium aluminium and glass works company in Tanzania.</p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/60 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-primary transition-colors text-sm">About</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link to="/projects" className="text-white/60 hover:text-primary transition-colors text-sm">Projects</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm">Aluminium Works</li>
              <li className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm">Glass Works</li>
              <li className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm">Steel Fabrication</li>
              <li className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm">Maintenance Services</li>
              <li className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm">Custom Design</li>
            </ul>
          </div>

          {/* Column 4 - Contact & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone className="h-4 w-4 text-primary" /> 
                <span>+255 778 959 501</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="h-4 w-4 text-primary" /> 
                <span>info@867alufusion.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="h-4 w-4 text-primary" /> 
                <span>Mon-Fri: 8am - 6pm</span>
              </li>
            </ul>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 mt-5">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300">
                <Instagram className="h-4 w-4 text-white/70 hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300">
                <Facebook className="h-4 w-4 text-white/70 hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300">
                <Linkedin className="h-4 w-4 text-white/70 hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300">
                <MessageCircle className="h-4 w-4 text-white/70 hover:text-white" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <form className="mt-6 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 rounded-md bg-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="px-4 py-2 rounded-md bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} 867 ALUFUSION LIMITED. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}