import React from 'react';
import { ArrowRight } from 'lucide-react';
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
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-6">
            PORTFOLIO 2025
          </span>
          <div className="relative inline-block mb-6">
            <span className="absolute -top-10 -left-12 md:-left-20 text-5xl md:text-7xl font-script text-primary transform -rotate-6 opacity-80 z-0">
              Design
            </span>
            <h1 className="relative z-10 text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter mb-4 leading-tight uppercase">
              Mohammad Rafli <br className="hidden md:block" /> Ravanelli
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto mb-10 font-medium">
            Graphic Designer & IT Support Specialist bridging the gap between <span className="text-primary font-bold">visual creativity</span> and <span className="text-primary font-bold">technical reliability</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/portfolio" 
              className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-neutral-900 transition-colors shadow-lg shadow-primary/30 flex items-center gap-2 tracking-wide uppercase text-sm border-2 border-primary hover:border-neutral-900"
            >
              Order Now! <ArrowRight size={18} />
            </Link>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="px-10 py-4 bg-white text-neutral-900 border-2 border-neutral-900 font-bold rounded-full hover:bg-neutral-100 transition-colors shadow-[4px_4px_0_0_#1A1917] hover:shadow-[2px_2px_0_0_#1A1917] hover:translate-x-[2px] hover:translate-y-[2px] uppercase text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default Hero;