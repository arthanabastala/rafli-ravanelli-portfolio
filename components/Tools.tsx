import React from 'react';
import Section from './ui/Section';

interface Tool {
  name: string;
  category: string;
  borderClass: string;
  textClass: string;
  bgClass: string;
}

const ToolCard: React.FC<Tool> = ({ name, category, borderClass, textClass }) => {
  return (
    <div 
      className={`group flex flex-col items-center justify-center p-6 bg-white border border-neutral-100 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md ${borderClass}`}
    >
      <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">{category}</span>
      <span 
        className={`font-bold text-neutral-800 text-lg text-center transition-colors ${textClass}`}
      >
        {name}
      </span>
    </div>
  );
};

const Tools: React.FC = () => {
  const tools: Tool[] = [
    {
      name: 'Figma', category: 'Design', borderClass: 'hover:border-[[linear-gradient(to_bottom_left,#0BCF83,#A259FF,#1ABBFF,#F34E20,#FF7362]', textClass: 'group-hover:text-[#A259FF]',
      bgClass: 'hover:bg-[#000000]'
    },
    {
      name: 'Photoshop', category: 'Design', borderClass: 'hover:border-[#06A3FF]', textClass: 'group-hover:text-[#06A3FF]',
      bgClass: 'hover:bg-[#011D33]'
    },
    {
      name: 'Illustrator', category: 'Design', borderClass: 'hover:border-[#FF9A00]', textClass: 'group-hover:text-[#FF9A00]',
      bgClass: 'hover:bg-[#320000]'
    },
    {
      name: 'CapCut', category: 'Design', borderClass: 'hover:border-[#000000]', textClass: 'group-hover:text-[#FFFFFF]',
      bgClass: 'hover:bg-[#ffffff]'
    },
    {
      name: 'Canva', category: 'Design', borderClass: 'hover:border-[#FFFFFF]', textClass: 'group-hover:text-[#FFFFFF]',
      bgClass: 'group-hover:bg-[linear-gradient(to_bottom_right,#7A29E8,#4E4CED,#268BDC,#01C3CC)]'
    },
    {
      name: 'Microsoft Office', category: 'Office', borderClass: 'hover:border-[#FFFFFF]', textClass: 'group-hover:text-[#FFFFFF]',
      bgClass: 'hover:bg-[#EB3B00]'
    },
    {
      name: 'Shopee', category: 'E-commerce', borderClass: 'hover:border-[#FFFFFF]', textClass: 'group-hover:text-[#FFFFFF]',
      bgClass: 'hover:bg-[#F1592A]'
    },
    {
      name: 'TikTok', category: 'Social', borderClass: 'hover:border-[[linear-gradient(to_bottom_right,#34BBBE,#E4004F]', textClass: 'group-hover:text-[#FFFFFF]',
      bgClass: 'hover:bg-[#000000]'
    },
    {
      name: 'YouTube', category: 'Social', borderClass: 'hover:border-[#FE0000]', textClass: 'group-hover:text-[#FFFFFF]',
      bgClass: 'hover:bg-[#FE0000]'
    },
    {
      name: 'Facebook', category: 'Social', borderClass: 'hover:border-[#0117FF]', textClass: 'group-hover:text-[#FFFFFF]',
      bgClass: 'hover:bg-[0117FF]'
    },
  ];

  return (
    <Section id="tools" className="bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">Tools & Platforms</h2>
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