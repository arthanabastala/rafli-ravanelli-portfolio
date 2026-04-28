import React from 'react';
import Section from './ui/Section';
import { Palette, Monitor, PenTool, Users } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => (
  <div className="p-8 bg-white rounded-2xl border-2 border-neutral-200 shadow-[4px_4px_0_0_#D5CCBB] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#D5CCBB] transition-all">
    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-neutral-900 uppercase tracking-tight">{title}</h3>
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-neutral-600 font-medium">
          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="relative text-center mb-16">
          <span className="absolute -top-6 inset-x-0 text-4xl md:text-5xl font-script text-primary opacity-80 z-0 transform -rotate-2">
            Capabilities
          </span>
          <h2 className="relative z-10 text-4xl font-black text-neutral-900 uppercase">My Skills</h2>
          <p className="text-neutral-600 max-w-xl mx-auto font-medium mt-4">
            A balanced mix of creative design capabilities and technical IT expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCategory 
            title="Design" 
            icon={<Palette size={24} />}
            skills={['Poster Design', 'Web Banners', 'Social Media Content', 'Visual Identity']}
          />
          <SkillCategory 
            title="Creative Tools" 
            icon={<PenTool size={24} />}
            skills={['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva']}
          />
          <SkillCategory 
            title="IT & Technical" 
            icon={<Monitor size={24} />}
            skills={['Windows Support', 'Basic UI/UX', 'Networking Basics', 'Hardware Troubleshooting']}
          />
          <SkillCategory 
            title="Soft Skills" 
            icon={<Users size={24} />}
            skills={['Teamwork', 'Communication', 'Time Management', 'Problem Solving']}
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;