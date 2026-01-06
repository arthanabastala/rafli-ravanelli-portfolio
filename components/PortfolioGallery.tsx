import React from 'react';
import Section from './ui/Section';

const PortfolioGallery: React.FC = () => {
  const smkWorks = [
    { src: '/Event-Poster.jpg', alt: 'Event Banner for SMK Madinatulquran', title: 'Tumbnail Event Post' },
    { src: '/mq-instagram-story.jpg', alt: 'Instagram Story design for SMK Madinatulquran', title: 'PPDB Poster' },
    { src: '/mq-documentation.jpg', alt: 'Event documentation for SMK Madinatulquran', title: 'Instagram Post' },
    { src: '/mqfest-poster.jpg', alt: 'MQFest Celebration Event Promotional Poster', title: 'MQFest Poster' }
  ];

  const experimentalWorks = [
    { src: '/exp-visual-01.jpg', aspect: '4/5', span: 'col-span-1' },
    { src: '/exp-visual-02.jpg', aspect: '4/5', span: 'col-span-1' },
    { src: '/exp-visual-03.jpg', aspect: '9/16', span: 'col-span-1' },
    { src: '/exp-visual-04.jpg', aspect: '9/16', span: 'col-span-1' }
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
           
           <div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {smkWorks.map((work) => (
                  <div key={work.src} className="aspect-[4/5] bg-neutral-100 rounded-xl border border-neutral-100 shadow-sm relative group overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                      <img
                          src={work.src}
                          alt={work.alt}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                         <p className="text-white text-xs font-medium">{work.title}</p>
                      </div>
                  </div>
                ))}
             </div>

             <div className="mt-4 aspect-[3/1] bg-neutral-100 rounded-xl border border-neutral-100 shadow-sm relative group overflow-hidden">
                <img
                    src="/mqfest-banner.jpg"
                    alt="Main Event Banner"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-white text-xl font-bold">School Event Promotion</h4>
                </div>
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
              {experimentalWorks.map((work, index) => (
                <div key={work.src} className={`md:col-span-2 aspect-[${work.aspect}] bg-neutral-100 rounded-xl border border-neutral-100 shadow-sm relative group overflow-hidden transform hover:-translate-y-1 transition-all duration-300`}>
                    <img
                        src={work.src}
                        alt={`Experimental Visual ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                       <p className="text-white text-xs font-medium">Visual Post & Story 0{index + 1}</p>
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