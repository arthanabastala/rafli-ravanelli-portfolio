import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 border-t-[8px] border-primary text-neutral-400 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-white mb-2 uppercase">Mohammad Rafli Ravanelli</h2>
        <p className="mb-8 font-medium">Graphic Designer | IT Support | UI/UX Design</p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.linkedin.com/in/mohammad-rafli-ravanelli-ba7b8b210" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-primary transition-colors font-bold uppercase tracking-wider text-sm"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/nbstlaa/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-primary transition-colors font-bold uppercase tracking-wider text-sm"
          >
            Instagram
          </a>
        </div>
        
        <p className="text-sm text-neutral-600">
          © {new Date().getFullYear()} Rafli Ravanelli. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;