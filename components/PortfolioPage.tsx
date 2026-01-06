import React from 'react';
import PortfolioHero from './PortfolioHero';
import PortfolioGallery from './PortfolioGallery';
import Experience from './Experience';
import Contact from './Contact';
import Section from './ui/Section';
import { Palette, PenTool, Monitor, Users } from 'lucide-react';

const PortfolioSkills: React.FC = () => {
  return (
    <Section id="skills" className="bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Design */}
          <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Palette size={20} />
            </div>
            <h3 className="font-bold text-lg mb-3">Design</h3>
            <ul className="space-y-2 text-neutral-600 text-sm">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Poster Design</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Banner</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Social Media Content</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <PenTool size={20} />
            </div>
            <h3 className="font-bold text-lg mb-3">Tools</h3>
            <ul className="space-y-2 text-neutral-600 text-sm">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Figma</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Adobe Photoshop</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Adobe Illustrator</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Canva</li>
            </ul>
          </div>

          {/* IT (Basic) */}
          <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <Monitor size={20} />
            </div>
            <h3 className="font-bold text-lg mb-3">IT (Basic)</h3>
            <ul className="space-y-2 text-neutral-600 text-sm">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Basic UI/UX</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Basic Android & Web</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
            <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4">
              <Users size={20} />
            </div>
            <h3 className="font-bold text-lg mb-3">Soft Skills</h3>
            <ul className="space-y-2 text-neutral-600 text-sm">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>Teamwork</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>Communication</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>Time Management</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

const PortfolioPage: React.FC = () => {
  return (
    <>
      <PortfolioHero />
      
      <Section id="about" className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">About Me</h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            I am a vocational high school student with a strong passion for graphic design and IT. 
            My focus is on creating clean, communicative, and functional designs that solve real problems.
            I believe in learning through doing, which is why I actively seek out real projects and hands-on experiences to refine my skills in both creative and technical fields.
          </p>
        </div>
      </Section>

      <PortfolioSkills />
      
      <PortfolioGallery />
      
      <Experience />
      
      <Contact />
    </>
  );
};

export default PortfolioPage;