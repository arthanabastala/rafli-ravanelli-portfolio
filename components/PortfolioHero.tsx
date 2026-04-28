import React from 'react';
import { ArrowDown, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioHero: React.FC = () => {
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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 bg-neutral-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="animate-fade-in-up">
          <div className="relative inline-block mb-4">
            <span className="absolute -top-10 -left-4 md:-left-12 text-4xl md:text-5xl font-script text-primary transform -rotate-6 opacity-80 z-0">
              Creative
            </span>
            <h1 className="relative z-10 text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter leading-tight uppercase">
              Mohammad Rafli Ravanelli
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-6 uppercase tracking-wider">
            Graphic Designer | IT Support | UI/UX Design
          </h2>
          <div className="w-24 h-2 bg-neutral-900 mx-auto mb-8 shadow-[2px_2px_0_0_#D5CCBB]"></div>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 font-bold italic">
            “Designing clean visuals and functional digital experiences.”
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="px-10 py-4 bg-white text-neutral-900 border-2 border-neutral-900 font-bold rounded-full hover:bg-neutral-100 transition-colors shadow-[4px_4px_0_0_#1A1917] hover:shadow-[2px_2px_0_0_#1A1917] hover:translate-x-[2px] hover:translate-y-[2px] uppercase text-sm flex items-center gap-2"
            >
              <ArrowLeft size={18} /> Back to Main
            </Link>
            <a 
              href="#portfolio" 
              onClick={(e) => handleScroll(e, 'portfolio')}
              className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-neutral-900 transition-colors shadow-lg shadow-primary/30 flex items-center gap-2 tracking-wide uppercase text-sm border-2 border-primary hover:border-neutral-900"
            >
              View Works <ArrowDown size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;