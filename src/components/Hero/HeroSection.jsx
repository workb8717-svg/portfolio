import React from 'react';
import Ferrofluid from '../Ferrofluid/Ferrofluid';
import ShinyText from '../ShinyText/ShinyText';
import characterCutout from '../../assets/character-cutout.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      {/* 1. Background layer: Ferrofluid WebGL canvas */}
      <div className="hero-bg-layer">
        <Ferrofluid
          colors={['#ffffff', '#ffffff', '#ffffff']}
          speed={0.5}
          scale={1}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={3}
          shimmer={1}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction={true}
          mouseStrength={1}
          mouseRadius={0.3}
        />
      </div>

      {/* 2. Behind Character: Equinox Headline */}
      <div className="hero-headline-layer">
        <div className="hero-headline">
          <span className="headline-line line-think">THINK</span>
          <span className="headline-line line-creatively">
            <ShinyText
              text="CREATIVELY"
              speed={2.5}
              delay={0}
              color="#e4e4e7"
              shineColor="#ffffff"
              spread={135}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
            />
          </span>
        </div>
      </div>

      {/* 3. Center Layer: 3D Character */}
      <div className="hero-character-layer">
        <div className="character-floating-wrapper">
          <img
            src={characterCutout}
            alt="Jay 3D Character"
            className="character-cutout-img"
          />
        </div>
      </div>

      {/* 4. Bottom Right CTA Button */}
      <footer className="hero-footer">
        <div className="hero-footer-cta">
          <a
            href="https://wa.me/918780054574?text=Hi%20Jay,%20I%20would%20like%20to%20book%20a%20call%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="book-call-btn"
          >
            Book a call with me
          </a>
        </div>
      </footer>
    </section>
  );
};

export default HeroSection;
