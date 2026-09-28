import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ShinyText from '../ShinyText/ShinyText';
import { packagesData } from '../../data/packagesData';
import './SubscriptionSection.css';

const PackageCard = ({ pkg }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    const ry = ((x / rect.width) - 0.5) * 8; // ±4 deg
    const rx = ((y / rect.height) - 0.5) * -8;

    card.style.setProperty('--mouse-x', `${xPercent.toFixed(1)}%`);
    card.style.setProperty('--mouse-y', `${yPercent.toFixed(1)}%`);
    card.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-6px)`;
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (card) card.classList.add('hovered');
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.classList.remove('hovered');
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    }
  };

  const handleChoosePackage = (e) => {
    e.preventDefault();
    navigate(pkg.path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div
      ref={cardRef}
      className="sub-package-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Edge Laser Line */}
      <div className="sub-laser-line" />

      {/* Cursor Spotlight Glow */}
      <div className="sub-spotlight-glow" />

      {/* Card Header */}
      <div className="sub-card-header">
        <div className="sub-num-badge">
          <span className="sub-pulse-dot" />
          <span className="sub-num-text">{pkg.number}</span>
        </div>
        <span className="sub-tag-label">PACKAGE</span>
      </div>

      {/* Card Body */}
      <div className="sub-card-body">
        <h3 className="sub-package-title">{pkg.name}</h3>
        <p className="sub-package-teaser">{pkg.teaser}</p>
      </div>

      {/* Card Footer Action */}
      <div className="sub-card-footer">
        <button
          className="sub-choose-btn"
          onClick={handleChoosePackage}
          aria-label={`Choose ${pkg.name} package`}
        >
          <span className="sub-btn-text">Choose Your Package</span>
          <span className="sub-btn-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

const SubscriptionSection = () => {
  return (
    <section id="subscription" className="subscription-section">
      {/* Ambient backdrop */}
      <div className="sub-ferro-bg-wrapper">
        <div className="sub-ambient-backdrop" />
      </div>

      <div className="sub-container">
        {/* Section Header */}
        <div className="sub-header">
          <div className="sub-index-pill">
            <span className="sub-index-dot" />
            <span className="sub-index-text">03 / SUBSCRIPTION</span>
          </div>
          <h2 className="sub-headline">
            <ShinyText
              text="PACKAGES & PLANS"
              disabled={false}
              speed={4}
              className="sub-shiny-title"
              color="#9a9aa2"
              shineColor="#ffffff"
              spread={135}
            />
          </h2>
          <p className="sub-description">
            Choose the package that fits your ambition. Clear scopes, dedicated focus, and uncompromising execution.
          </p>
        </div>

        {/* 4 Package Cards Grid */}
        <div className="sub-grid">
          {packagesData.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
