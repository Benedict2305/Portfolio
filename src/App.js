import React, { useEffect } from 'react';
import './styles/DesignSystem.css';
import './App.css';
import NavBarV2 from './components/NavBarV2';
import HeroV2 from './components/HeroV2';
import AboutV2 from './components/AboutV2';
import ProjectsV2 from './components/ProjectsV2';
import ExperienceV2 from './components/ExperienceV2';
import ContactV2 from './components/ContactV2';
import FooterV2 from './components/FooterV2';

function App() {

  // Scroll Reveal — Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Cursor glow effect
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;
    const move = (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="App">
      {/* Animated mesh background */}
      <div className="mesh-bg" aria-hidden="true"></div>

      {/* Cursor glow */}
      <div id="cursor-glow" className="cursor-glow" aria-hidden="true"></div>

      {/* Navigation */}
      <NavBarV2 />

      {/* Main Content */}
      <main id="main-content">
        <HeroV2 />
        <AboutV2 />
        <ProjectsV2 />
        <ExperienceV2 />
        <ContactV2 />
      </main>

      {/* Footer */}
      <FooterV2 />
    </div>
  );
}

export default App;
