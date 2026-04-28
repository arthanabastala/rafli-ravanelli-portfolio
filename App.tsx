import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PortfolioPage from './components/PortfolioPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Wrapper to handle Navbar visibility or props if needed
const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen border-t-[8px] border-t-primary bg-neutral-50 text-neutral-900 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;