import React from 'react';
import Section from './ui/Section';

const PortfolioGallery: React.FC = () => {
  const smkWorks = [
    { src: '/Event-Poster.webp', alt: 'Event Banner for SMK Madinatulquran', title: 'Tumbnail Event Post' },
    { src: '/mq-instagram-story.webp', alt: 'Instagram Story design for SMK Madinatulquran', title: 'PPDB Poster' },
    { src: '/mq-documentation.webp', alt: 'Event documentation for SMK Madinatulquran', title: 'Instagram Post' },
    { src: '/mqfest-poster.webp', alt: 'MQFest Celebration Event Promotional Poster', title: 'MQFest Poster' }
  ];

  const experimentalWorks = [
    { src: '/exp-visual-01.webp', aspect: '4/5' },
    { src: '/exp-visual-02.webp', aspect: '4/5' },
    { src: '/exp-visual-03.webp', aspect: '9/16' },
    { src: '/exp-visual-04.webp', aspect: '9/16' }
  ];

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
                Designed daily photo and video promotional content for perfume products.
              </p>
              <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-100 mb-6">
                <p className="text-xs text-neutral-500 italic">Note: Some works cannot be displayed due to company policy.</p>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="group relative overflow-hidden rounded-xl border border-neutral-100 shadow-sm aspect-[4/5] bg-neutral-100">
                <img 
                  src="/pt-marsi-post-01.webp" 
                  alt="Promotional social media post for PT Marsi" 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
               <div className="group relative overflow-hidden rounded-xl border border-neutral-100 shadow-sm aspect-[4/5] bg-neutral-100">
                <img 
                  src="/pt-marsi-post-02.webp" 
                  alt="Eclat Romantique" 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* B. Institutional Design – SMK Madinatulquran */}
        <div className="mb-24">
           <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-neutral-900">SMK Madinatulquran</h3>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {smkWorks.map((work) => (
                <div key={work.src} className="aspect-[4/5] bg-neutral-100 rounded-xl relative group overflow-hidden">
                    <img
                        src={work.src}
                        alt={work.alt}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4">
                       <p className="text-white text-xs font-medium">{work.title}</p>
                    </div>
                </div>
              ))}
           </div>

           <div className="mt-4 aspect-[3/1] md:aspect-[5/1] bg-neutral-100 rounded-xl relative group overflow-hidden">
              <img
                  src="/mqfest-banner.webp"
                  alt="Main Event Banner"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
              />
           </div>
        </div>

        {/* C. Team & Experimental Works */}
        <div>
           <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-neutral-900">design.ke.team</h3>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {experimentalWorks.map((work, index) => (
                <div key={work.src} className="md:col-span-2 aspect-[4/5] bg-neutral-100 rounded-xl relative group overflow-hidden">
                    <img
                        src={work.src}
                        alt={`Experimental Visual ${index + 1}`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
              ))}
           </div>
        </div>
      </div>
    </Section>
  );
};

export default PortfolioGallery;