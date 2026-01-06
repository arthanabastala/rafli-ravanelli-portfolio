import React from 'react';
import Section from './ui/Section';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Let's Work Together</h2>
        <p className="text-xl text-neutral-500 mb-12 max-w-2xl mx-auto">
          Whether you need a sleek design, IT support, or help managing your digital content, I'm ready to help you achieve your goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            href="mailto:arthanabastala@gmail.com"
            className="group flex flex-col items-center p-8 border border-neutral-200 rounded-2xl hover:border-neutral-900 hover:bg-neutral-900 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-neutral-900 transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-white">Email Me</h3>
            <p className="text-neutral-500 mb-4 group-hover:text-neutral-300">arthanabastala@gmail.com</p>
            <span className="flex items-center text-sm font-semibold text-neutral-900 group-hover:text-white">
              Send Message <ArrowUpRight size={16} className="ml-1" />
            </span>
          </a>

          <a 
            href="https://wa.me/628568720233"
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 border border-neutral-200 rounded-2xl hover:border-green-600 hover:bg-green-600 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-white">WhatsApp</h3>
            <p className="text-neutral-500 mb-4 group-hover:text-green-100">+62 856-8720-233</p>
            <span className="flex items-center text-sm font-semibold text-neutral-900 group-hover:text-white">
              Chat Now <ArrowUpRight size={16} className="ml-1" />
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;