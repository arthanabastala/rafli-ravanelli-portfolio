import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Tools from './Tools';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Tools />
      <Contact />
    </>
  );
};

export default Home;