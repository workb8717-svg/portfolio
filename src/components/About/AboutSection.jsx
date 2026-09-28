import React, { useRef, useState, useEffect } from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import Ferrofluid from '../Ferrofluid/Ferrofluid';
import avatarClean from '../../assets/avatar-clean.png';
import './AboutSection.css';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className={`about-section ${isVisible ? 'is-visible' : ''}`}>
      {/* Background layer: Ferrofluid with subtle blur overlay */}
      <div className="about-bg-layer">
        <Ferrofluid
          colors={['#ffffff', '#ffffff', '#ffffff']}
          speed={0.4}
          scale={1}
          turbulence={0.9}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={3}
          shimmer={0.8}
          glow={1.5}
          flowDirection="down"
          opacity={0.85}
          mouseInteraction={true}
          mouseStrength={0.8}
          mouseRadius={0.3}
        />
        <div className="about-blur-overlay" />
      </div>

      <div className="about-container">
        {/* Section Label Header */}
        <div className="about-header">
          <span className="about-tag">01 / DISCOVER</span>
          <h2 className="about-title">ABOUT ME</h2>
        </div>

        {/* Two-Column Grid */}
        <div className="about-grid">
          {/* Left Column: Interactive 3D Profile Card with Jay's Custom Avatar */}
          <div className="about-profile-card-col">
            <ProfileCard
              name="Jay.J"
              title="Evolving AI Generalist"
              avatarUrl={avatarClean}
              miniAvatarUrl={avatarClean}
              contactText="Let's Talk"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              innerGradient="linear-gradient(145deg, rgba(24, 24, 27, 0.95) 0%, rgba(9, 9, 11, 0.98) 100%)"
              behindGlowColor="rgba(255, 255, 255, 0.12)"
              behindGlowSize="40%"
              onContactClick={() => {
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </div>

          {/* Right Column: Capabilities Card */}
          <div className="about-content-col">
            <div className="about-content-card">
              <div className="about-card-badge-row">
                <span className="about-author-badge">Jay.J</span>
              </div>
              <div className="about-card-body">
                <h3 className="about-content-heading">Capabilities</h3>
                <p className="about-content-text">
                  I help creators, agencies, and businesses turn raw ideas into fully functional digital experiences. Whether it's designing clean modern websites, developing custom mobile and web applications, editing high-retention short-form content, or crafting strong brand identities — I bridge the gap between creative vision and technical execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
