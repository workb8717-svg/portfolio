import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GooeyNav from '../GooeyNav/GooeyNav';
import ShinyText from '../ShinyText/ShinyText';
import characterCutout from '../../assets/character-cutout.png';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Subscription', href: '#subscription' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isPackagesPage = location.pathname.startsWith('/packages');
  const currentActiveIndex = isPackagesPage ? 3 : 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`global-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Brand on Left */}
      <a
        href="#home"
        onClick={(e) => {
          if (location.pathname !== '/') {
            e.preventDefault();
            window.location.href = '/#home';
          }
        }}
        className="global-nav-brand"
      >
        <div className="brand-avatar">
          <img src={characterCutout} alt="Jay" />
        </div>
        <span className="brand-name">
          <ShinyText
            text="Jay"
            speed={2.5}
            delay={0}
            color="#f4f4f5"
            shineColor="#ffffff"
            spread={135}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
          />
        </span>
      </a>

      {/* Center Gooey Nav Pill Bar */}
      <div className="global-nav-center">
        <GooeyNav
          items={navItems}
          particleCount={14}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={currentActiveIndex}
          forcedActiveIndex={isPackagesPage ? 3 : null}
          animationTime={950}
          timeVariance={400}
        />
      </div>

      {/* Right CTA Button */}
      <div className="global-nav-cta">
        <a
          href="#contact"
          onClick={(e) => {
            if (location.pathname !== '/') {
              e.preventDefault();
              window.location.href = '/#contact';
            }
          }}
          className="status-badge"
        >
          <span className="status-dot"></span>
          Available for work
        </a>
      </div>
    </header>
  );
};

export default Navbar;
