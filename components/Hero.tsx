import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-neutral-100 text-neutral-600 text-xs font-semibold tracking-wider mb-6">
            PORTFOLIO 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight mb-6 leading-tight">
            Mohammad Rafli <br className="hidden md:block" /> Ravanelli
          </h1>
          <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto mb-10 font-light">
            Graphic Designer & IT Support Specialist bridging the gap between <span className="text-neutral-900 font-medium">visual creativity</span> and <span className="text-neutral-900 font-medium">technical reliability</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/portfolio" 
              className="px-8 py-3.5 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              View Portfolio <ArrowRight size={18} />
            </Link>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="px-8 py-3.5 bg-white text-neutral-900 border border-neutral-200 font-medium rounded-full hover:border-neutral-400 transition-all hover:bg-neutral-50"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-400">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;