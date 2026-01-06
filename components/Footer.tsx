import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Mohammad Rafli Ravanelli</h2>
        <p className="mb-8">Graphic Designer | IT Support | UI/UX Design</p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.linkedin.com/in/mohammad-rafli-ravanelli-ba7b8b210" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/nbstlaa/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
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