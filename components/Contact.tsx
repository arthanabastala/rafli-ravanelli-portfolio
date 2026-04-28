import React from 'react';
import Section from './ui/Section';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative mb-6">
          <span className="absolute -top-6 inset-x-0 text-4xl md:text-5xl font-script text-primary opacity-80 z-0 transform -rotate-2">
            Reach out
          </span>
          <h2 className="relative z-10 text-4xl font-black text-neutral-900 uppercase">Let's Work Together</h2>
        </div>
        <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto font-medium">
          Whether you need a sleek design, IT support, or help managing your digital content, I'm ready to help you achieve your goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            href="mailto:arthanabastala@gmail.com"
            className="group flex flex-col items-center p-8 border-2 border-neutral-200 rounded-2xl hover:border-primary hover:bg-neutral-50 shadow-[4px_4px_0_0_#D5CCBB] hover:shadow-[0px_0px_0_0_#D5CCBB] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary transition-colors">Email Me</h3>
            <p className="text-neutral-600 mb-4 font-medium">arthanabastala@gmail.com</p>
            <span className="flex items-center text-sm font-bold uppercase tracking-wider text-primary">
              Send Message <ArrowUpRight size={16} className="ml-1" />
            </span>
          </a>

          <a 
            href="https://wa.me/628568720233"
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 border-2 border-neutral-200 rounded-2xl hover:border-primary hover:bg-neutral-50 shadow-[4px_4px_0_0_#D5CCBB] hover:shadow-[0px_0px_0_0_#D5CCBB] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary transition-colors">WhatsApp</h3>
            <p className="text-neutral-600 mb-4 font-medium">+62 856-8720-233</p>
            <span className="flex items-center text-sm font-bold uppercase tracking-wider text-primary">
              Chat Now <ArrowUpRight size={16} className="ml-1" />
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;