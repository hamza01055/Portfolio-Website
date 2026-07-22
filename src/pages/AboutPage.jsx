import React from 'react';
import About from './About';
import Journey from './Journey';

// About page: About Me + Experience/Journey timeline only.
const AboutPage = () => (
  <main className="relative z-10">
    <About />
    <Journey />
  </main>
);

export default AboutPage;
