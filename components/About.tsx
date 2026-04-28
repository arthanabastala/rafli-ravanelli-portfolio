import React from 'react';
import Section from './ui/Section';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <span className="absolute -top-6 -left-4 text-4xl md:text-5xl font-script text-primary opacity-80 z-0 transform -rotate-2">
            Get to know
          </span>
          <h2 className="relative z-10 text-4xl font-black text-neutral-900 uppercase">About Me</h2>
        </div>
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[8px_8px_0_0_#D5CCBB] border-2 border-neutral-200">
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-medium">
            I am a versatile professional combining a creative eye for design with a solid foundation in technical support. 
            With experience ranging from high-volume IT deployments to managing digital content strategies, 
            I excel in environments that require both <strong className="text-neutral-900">problem-solving skills</strong> and <strong className="text-neutral-900">aesthetic precision</strong>.
            I am passionate about creating user-centric designs while ensuring the underlying systems run smoothly.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-neutral-100">
            <div>
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Role</h3>
              <p className="font-medium text-neutral-900">Graphic Designer<br/>IT Support<br/>UI/UX Design</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Location</h3>
              <p className="font-medium text-neutral-900">Jakarta, Indonesia</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Availability</h3>
              <p className="font-medium text-green-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-600"></span> Open for Work
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;