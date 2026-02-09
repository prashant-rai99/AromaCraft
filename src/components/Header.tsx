import { Logo } from "./Logo";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Logo />
          <span className="text-[#1e40af] tracking-tight">AromaCraft</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Navigation Links */}
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center gap-8 absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent p-6 md:p-0 border-b md:border-0 border-gray-200 flex-col md:flex-row`}>
          <a
            href="#how-it-works"
            className="text-gray-700 hover:text-[#1e40af] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-[#1e40af] transition-colors"
          >
            Features
          </a>
          <a
            href="#technology"
            className="text-gray-700 hover:text-[#1e40af] transition-colors"
          >
            Technology Stack
          </a>
          <a
            href="#team"
            className="text-gray-700 hover:text-[#1e40af] transition-colors"
          >
            Team/Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => {
              // This will be caught by Navigation component
              window.dispatchEvent(new CustomEvent('navigate', { detail: 'login' }));
            }}
            className="text-gray-700 hover:text-[#1e40af] transition-colors"
          >
            Login/Sign Up
          </button>
          <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 px-6 py-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg">
            Launch AromaCraft
          </button>
        </div>
      </div>
    </header>
  );
}