import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MouseGlow, Navbar, SearchModal, WorkTransition, setWorkFocusListener } from './components/shared';
import { LoadingExperience, NeuralNetworkFooter } from './components/sections';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutPage';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [workFocusMode, setWorkFocusMode] = useState(false);
  const location = useLocation();

  // After navigating to a different route with a #hash (cross-page nav
  // links), scroll to that section once its content has mounted.
  useEffect(() => {
    if (!location.hash) return;
    requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(storedTheme || (prefersDark ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setWorkFocusListener(setWorkFocusMode);
    return () => setWorkFocusListener(null);
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const exitWorkFocus = () => {
    setWorkFocusMode(false);
    requestAnimationFrame(() => {
      document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  return (
    <div className="relative bg-primary min-h-screen overflow-x-hidden">
      <LoadingExperience />
      <MouseGlow />
      <WorkTransition />
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        currentTime={currentTime}
      />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
        currentTime={currentTime}
      />
      <Routes>
        <Route path="/" element={<HomePage workFocusMode={workFocusMode} exitWorkFocus={exitWorkFocus} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {!workFocusMode && <NeuralNetworkFooter />}
    </div>
  );
}

export default App;
