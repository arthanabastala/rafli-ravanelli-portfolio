import React from 'react';
import Section from './ui/Section';

interface Tool {
  name: string;
  category: string;
  borderClass: string;
  textClass: string;
}

const ToolCard: React.FC<Tool> = ({ name, category, borderClass, textClass }) => {
  return (
    <div 
      className={`group flex flex-col items-center justify-center p-6 bg-white border-2 border-neutral-200 rounded-xl shadow-[4px_4px_0_0_#D5CCBB] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#D5CCBB] transition-all duration-300 ${borderClass}`}
    >
      <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">{category}</span>
      <span 
        className={`font-black text-neutral-800 text-lg text-center transition-colors ${textClass}`}
      >
        {name}
      </span>
    </div>
  );
};

const Tools: React.FC = () => {
  const tools: Tool[] = [
    { name: 'Figma', category: 'Design', borderClass: 'hover:border-[#A259FF]', textClass: 'group-hover:text-[#A259FF]' },
    { name: 'Photoshop', category: 'Design', borderClass: 'hover:border-[#31A8FF]', textClass: 'group-hover:text-[#31A8FF]' },
    { name: 'Illustrator', category: 'Design', borderClass: 'hover:border-[#FF9A00]', textClass: 'group-hover:text-[#FF9A00]' },
    { name: 'CapCut', category: 'Design', borderClass: 'hover:border-[#000000]', textClass: 'group-hover:text-[#000000]' },
    { name: 'Canva', category: 'Design', borderClass: 'hover:border-[#00C4CC]', textClass: 'group-hover:text-[#00C4CC]' },
    { name: 'Microsoft Office', category: 'Office', borderClass: 'hover:border-[#D83B01]', textClass: 'group-hover:text-[#D83B01]' },
    { name: 'Shopee', category: 'E-commerce', borderClass: 'hover:border-[#EE4D2D]', textClass: 'group-hover:text-[#EE4D2D]' },
    { name: 'TikTok', category: 'Social', borderClass: 'hover:border-[#FE2C55]', textClass: 'group-hover:text-[#FE2C55]' },
    { name: 'YouTube', category: 'Social', borderClass: 'hover:border-[#FF0000]', textClass: 'group-hover:text-[#FF0000]' },
    { name: 'Facebook', category: 'Social', borderClass: 'hover:border-[#1877F2]', textClass: 'group-hover:text-[#1877F2]' },
  ];

  return (
    <Section id="tools" className="bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="relative text-center mb-12">
          <span className="absolute -top-6 inset-x-0 text-4xl md:text-5xl font-script text-primary opacity-80 z-0 transform -rotate-2">
            Tech stack
          </span>
          <h2 className="relative z-10 text-4xl font-black text-neutral-900 uppercase">Tools & Platforms</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map((tool) => (
            <ToolCard 
              key={tool.name} 
              name={tool.name} 
              category={tool.category} 
              borderClass={tool.borderClass}
              textClass={tool.textClass}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Tools;