import React from 'react';
import Section from './ui/Section';

const PortfolioGallery: React.FC = () => {
  return (
    <Section id="portfolio" className="bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-900 mb-16 text-center">Selected Works</h2>

        {/* A. Commercial Case Study – PT Marsi */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <div className="md:w-1/3">
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2 block">Case Study</span>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">PT Marsi (Perfume Brand)</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Designed daily photo and video promotional content for perfume products. Maintained visual consistency across Shopee and social media platforms to drive brand engagement and sales.
              </p>
              <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-100 mb-6">
                <p className="text-xs text-neutral-500 italic">Note: Some works cannot be displayed due to company policy.</p>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Mockup 1 -  (Social Media Post 01) */}
              <div className="group relative overflow-hidden rounded-xl border border-neutral-100 shadow-sm aspect-[4/5] bg-neutral-100">
                <img 
                  src="/pt-marsi-post-01.jpg" 
                  alt="Promotional social media post for PT Marsi" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-all duration-300"></div>
              </div>
               {/* Mockup 2 - Eclat Romantique (Social Media Post 02) */}
               <div className="group relative overflow-hidden rounded-xl border border-neutral-100 shadow-sm aspect-[4/5] bg-neutral-100">
                <img 
                  src="/pt-marsi-post-02.jpg" 
                  alt="Eclat Romantique - Elegant perfume poster for PT Marsi" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* B. Institutional Design – SMK Madinatulquran */}
        <div className="mb-24">
           <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2 block">Institutional Branding</span>
              <h3 className="text-2xl font-bold text-neutral-900">SMK Madinatulquran</h3>
              <p className="text-neutral-500 mt-2">Supporting school branding, events, and information delivery.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 h-64 bg-neutral-100 rounded-xl border border-neutral-100 relative overflow-hidden group">
                 <img
                    src="/mq-event-banner.jpg"
                    alt="Event Banner for SMK Madinatulquran"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all"></div>
              </div>
              <div className="h-64 bg-neutral-100 rounded-xl border border-neutral-100 relative overflow-hidden group">
                 <img
                    src="/mq-instagram-story.jpg"
                    alt="Instagram Story design for SMK Madinatulquran"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all"></div>
              </div>
              <div className="h-64 bg-neutral-100 rounded-xl border border-neutral-100 relative overflow-hidden group">
                 <img
                    src="/mq-documentation.jpg"
                    alt="Event documentation for SMK Madinatulquran"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all"></div>
              </div>
              <div className="md:col-span-2 h-64 bg-neutral-100 rounded-xl border border-neutral-100 relative overflow-hidden group">
                 <img
                    src="/mqfest-banner.jpg"
                    alt="MQFest Celebration Event Promotional Poster for SMK Madinatulquran"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all"></div>
              </div>
           </div>
        </div>

        {/* C. Team & Experimental Works */}
        <div>
           <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2 block">Experimental</span>
              <h3 className="text-2xl font-bold text-neutral-900">design.ke.team</h3>
              <p className="text-neutral-500 mt-2">Creative playground for collaborative and experimental visuals.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['/exp-visual-01.jpg', '/exp-visual-02.jpg', '/exp-visual-03.jpg', '/exp-visual-04.jpg'].map((src, index) => (
                <div key={src} className="aspect-square bg-neutral-100 rounded-xl border border-neutral-100 shadow-sm relative group overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                    <img
                        src={src}
                        alt={`Experimental Visual ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                       <p className="text-white text-xs font-medium">Visual Experiment 0{index + 1}</p>
                    </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </Section>
  );
};

export default PortfolioGallery;