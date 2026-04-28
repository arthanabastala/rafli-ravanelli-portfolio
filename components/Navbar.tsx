import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Experience', href: 'experience' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // If we are on the portfolio page and the section exists there, scroll to it.
    // If we are on home page, scroll to it.
    // Both pages have these sections.
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
        // Fallback: if section not found (unlikely), go home
        navigate('/');
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-50/95 backdrop-blur-md shadow-sm py-4 border-b border-neutral-200' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="text-2xl font-black tracking-tighter text-neutral-900 border-2 border-neutral-900 p-2 shadow-[2px_2px_0_0_#1A1917] bg-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#1A1917] transition-all"
        >
          RAFLI<span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-bold uppercase tracking-wider text-neutral-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-900 focus:outline-none bg-white border-2 border-neutral-900 p-2 shadow-[2px_2px_0_0_#1A1917]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-50 border-b border-neutral-200 shadow-lg py-6 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-lg font-bold uppercase tracking-wide text-neutral-900 hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;