import { Logo } from "./Logo";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo />
              <span className="text-[#1e40af]">AromaCraft</span>
            </div>
            <p className="text-gray-600 mb-4">
              AI-powered culinary innovation through molecular science.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#github"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-[#1e40af] hover:border-[#1e40af] hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-[#1e40af] hover:border-[#1e40af] hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-[#1e40af] hover:border-[#1e40af] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#email"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-[#1e40af] hover:border-[#1e40af] hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-600 hover:text-[#1e40af] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-[#1e40af] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-600 hover:text-[#1e40af] transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-[#1e40af] transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#1e40af] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-600 hover:text-[#1e40af] transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-[#1e40af] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-600 hover:text-[#1e40af] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-[#1e40af] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 hover:text-[#1e40af] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-600 hover:text-[#1e40af] transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-gray-600 hover:text-[#1e40af] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600">
              © 2025 AromaCraft. All rights reserved.
            </p>
            
            {/* Challenge Attribution */}
            <div className="bg-gradient-to-r from-[#1e40af]/10 to-[#fbbf24]/10 px-6 py-2 rounded-full border border-gray-200">
              <p className="text-gray-700">
                Proudly Developed for the <span className="text-[#1e40af]">IIIT Delhi Foodoscope Challenge 2025</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
