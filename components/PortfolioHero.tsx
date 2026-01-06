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
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight mb-4 leading-tight">
            Mohammad Rafli Ravanelli
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-neutral-700 mb-6">
            Graphic Designer | IT Support | UI/UX Design
          </h2>
          <div className="w-24 h-1 bg-neutral-900 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 font-light italic">
            “Designing clean visuals and functional digital experiences.”
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="px-8 py-3.5 bg-white text-neutral-900 border border-neutral-200 font-medium rounded-full hover:border-neutral-400 transition-all hover:bg-neutral-50 flex items-center gap-2"
            >
              <ArrowLeft size={18} /> Back to Main
            </Link>
            <a 
              href="#portfolio" 
              onClick={(e) => handleScroll(e, 'portfolio')}
              className="px-8 py-3.5 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
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