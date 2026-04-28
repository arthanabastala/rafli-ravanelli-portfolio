import React from 'react';
import Section from './ui/Section';

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, period, description, current }) => (
  <div className="relative pl-8 md:pl-0">
    {/* Desktop Timeline Line */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 transform -translate-x-1/2"></div>
    
    <div className={`md:flex items-start justify-between mb-12 group ${current ? 'opacity-100' : 'opacity-90'}`}>
      
      {/* Date (Left on Desktop) */}
      <div className="md:w-1/2 md:pr-12 md:text-right mb-2 md:mb-0">
        <span className="inline-block px-4 py-2 bg-neutral-100 text-neutral-800 rounded-lg text-sm font-bold tracking-wide uppercase border border-neutral-200 shadow-sm">
          {period}
        </span>
      </div>

      {/* Circle Marker */}
      <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-primary border-4 border-white shadow-[0_0_0_2px_#b8242a] rounded-full transform md:-translate-x-1/2 mt-1.5 z-10"></div>

      {/* Content (Right on Desktop) */}
      <div className="md:w-1/2 md:pl-12">
        <h3 className="text-2xl font-bold text-neutral-900 leading-tight">{role}</h3>
        <h4 className="text-lg text-primary mb-4 font-bold">{company}</h4>
        <ul className="space-y-3">
          {description.map((item, idx) => (
            <li key={idx} className="text-neutral-600 leading-relaxed text-sm md:text-base flex items-start font-medium">
               <span className="mr-3 mt-1.5 text-primary text-xs">●</span>
               {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Media & Publication Team',
      company: "SMK Madinatul Qur’an",
      period: 'Apr 2025 – Present',
      current: true,
      description: [
        'Designed engaging social media content and promotional materials.',
        'Managed publishing schedules and digital documentation.',
        'Collaborated with the team to ensure consistent brand messaging.'
      ]
    },
    {
      role: 'Admin Online Shop',
      company: 'PT Marsi',
      period: 'Feb 2025 – Apr 2025',
      description: [
        'Created high-volume daily photo and video content (14 posts/week).',
        'Managed cross-platform postings on Shopee, TikTok, YouTube, and Facebook.',
        'Handled monthly financial records using Excel and Google Sheets.'
      ]
    },
    {
      role: 'IT Support',
      company: 'PT Karlin Masterindo',
      period: 'Nov 2022 – Jan 2023',
      description: [
        'Installed, configured, and maintained Windows 10 on over 1,000 devices.',
        'Troubleshot hardware, software, and network connectivity issues.',
        'Configured static IP addresses and managed basic LAN network setups.'
      ]
    }
  ];

  return (
    <Section id="experience" className="bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-16 text-center">
          <span className="absolute -top-6 inset-x-0 text-4xl md:text-5xl font-script text-primary opacity-80 z-0 transform -rotate-2">
            Journey
          </span>
          <h2 className="relative z-10 text-4xl font-black text-neutral-900 uppercase">Work Experience</h2>
        </div>
        <div className="relative">
           {/* Mobile Timeline Line */}
           <div className="md:hidden absolute left-2 top-0 bottom-0 w-px bg-neutral-200"></div>
           
           {experiences.map((exp, idx) => (
             <ExperienceItem key={idx} {...exp} />
           ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;