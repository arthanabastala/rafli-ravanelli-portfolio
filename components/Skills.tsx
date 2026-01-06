import React from 'react';
import Section from './ui/Section';
import { Palette, Monitor, PenTool, Users } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => (
  <div className="p-6 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-900 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-neutral-900">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-neutral-600">
          <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full mr-3"></span>
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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">My Skills</h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
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