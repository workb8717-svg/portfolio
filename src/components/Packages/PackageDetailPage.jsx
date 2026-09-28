import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ShinyText from '../ShinyText/ShinyText';
import { packagesData, getPackageBySlug } from '../../data/packagesData';
import './PackageDetailPage.css';

const TierCard = ({ tier, pkgName }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    const ry = ((x / rect.width) - 0.5) * 6;
    const rx = ((y / rect.height) - 0.5) * -6;

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

  return (
    <div
      ref={cardRef}
      className={`pkg-tier-card ${tier.isPopular ? 'is-popular' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Edge Laser Line */}
      <div className="pkg-laser-line" />

      {/* Spotlight Cursor Glow */}
      <div className="pkg-spotlight-glow" />

      {/* Popular Badge */}
      {tier.isPopular && (
        <div className="pkg-popular-tag">
          <span className="pkg-tag-dot" />
          <span>MOST POPULAR</span>
        </div>
      )}

      {/* Tier Header */}
      <div className="pkg-tier-header">
        <div className="pkg-tier-name-row">
          <h3 className="pkg-tier-name">{tier.name}</h3>
          {tier.badge && !tier.isPopular && (
            <span className="pkg-tier-badge">{tier.badge}</span>
          )}
        </div>
        <div className="pkg-price-row">
          <span className="pkg-price-amount">{tier.price}</span>
        </div>
        <p className="pkg-tier-tagline">{tier.tagline}</p>
      </div>

      <div className="pkg-divider" />

      {/* Features List */}
      <div className="pkg-features-wrap">
        <span className="pkg-features-title">WHAT'S INCLUDED:</span>
        <ul className="pkg-features-list">
          {tier.features.map((feature, idx) => (
            <li key={idx} className="pkg-feature-item">
              <span className="pkg-check-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ff66" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="pkg-feature-text">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action CTA */}
      <div className="pkg-tier-action">
        <a
          href={`https://wa.me/918780054574?text=Hi%20Jay,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkgName)}%20(${encodeURIComponent(tier.name)}%20Tier)`}
          target="_blank"
          rel="noopener noreferrer"
          className={`pkg-tier-btn ${tier.isPopular ? 'primary' : 'secondary'}`}
        >
          <span>Choose {tier.name}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

const PlaceholderTierCard = ({ tierName, badge, isPopular = false }) => {
  return (
    <div className={`pkg-tier-card placeholder-card ${isPopular ? 'is-popular' : ''}`}>
      <div className="pkg-laser-line" />
      <div className="pkg-tier-header">
        <div className="pkg-tier-name-row">
          <h3 className="pkg-tier-name">{tierName}</h3>
          <span className="pkg-tier-badge">{badge}</span>
        </div>
        <div className="pkg-price-row">
          <span className="pkg-price-placeholder">Pricing coming soon</span>
        </div>
        <p className="pkg-tier-tagline">Tier details and scope specifications are currently being finalized.</p>
      </div>

      <div className="pkg-divider" />

      <div className="pkg-features-wrap">
        <span className="pkg-features-title">SCOPE SPECIFICATIONS:</span>
        <div className="pkg-placeholder-box">
          <span className="pkg-placeholder-pulse" />
          <p className="pkg-placeholder-text">Detailed inclusions, revisions, and timelines will be announced shortly.</p>
        </div>
      </div>

      <div className="pkg-tier-action">
        <button disabled className="pkg-tier-btn disabled">
          <span>Details Coming Soon</span>
        </button>
      </div>
    </div>
  );
};

const PackageDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const pkg = getPackageBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!pkg) {
    return (
      <div className="pkg-detail-page not-found-page">
        <div className="pkg-container text-center">
          <h1 className="pkg-title">Package Not Found</h1>
          <p className="pkg-subtitle">The package you are looking for does not exist.</p>
          <Link to="/" className="pkg-back-btn">← Back to Homepage</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pkg-detail-page">
      {/* Ambient Backdrop */}
      <div className="pkg-ferro-bg-wrapper">
        <div className="pkg-ambient-backdrop" />
      </div>

      <div className="pkg-container">
        {/* Top Navigation & Breadcrumbs */}
        <div className="pkg-top-nav">
          <button
            className="pkg-back-btn"
            onClick={() => {
              navigate('/#subscription');
              setTimeout(() => {
                const el = document.getElementById('subscription');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          >
            <span className="pkg-back-arrow">←</span>
            <span>Back to Homepage</span>
          </button>

          {/* Package Switcher Pills */}
          <div className="pkg-switcher-wrap">
            {packagesData.map((item) => {
              const isCurrent = item.slug === slug;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`pkg-switcher-pill ${isCurrent ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Package Header */}
        <div className="pkg-main-header">
          <div className="pkg-index-pill">
            <span className="pkg-index-dot" />
            <span className="pkg-index-text">PACKAGE {pkg.number}</span>
          </div>

          <h1 className="pkg-main-title">
            <ShinyText
              text={pkg.name.toUpperCase()}
              disabled={false}
              speed={4}
              className="pkg-shiny-headline"
              color="#9a9aa2"
              shineColor="#ffffff"
              spread={135}
            />
          </h1>

          <p className="pkg-main-teaser">{pkg.teaser}</p>
        </div>

        {/* Tiers Grid */}
        <div className={`pkg-tiers-grid ${!pkg.isPlaceholder && pkg.tiers.length === 1 ? 'single-tier' : ''} ${!pkg.isPlaceholder && pkg.tiers.length === 2 ? 'two-tiers' : ''}`}>
          {pkg.isPlaceholder ? (
            <>
              <PlaceholderTierCard tierName="Basic" badge="Standard" />
              <PlaceholderTierCard tierName="Pro" badge="Popular" isPopular={true} />
              <PlaceholderTierCard tierName="Premium" badge="Ultimate" />
            </>
          ) : (
            pkg.tiers.map((tier) => (
              <TierCard key={tier.id} tier={tier} pkgName={pkg.name} />
            ))
          )}
        </div>

        {/* Bottom Banner */}
        <div className="pkg-bottom-banner">
          <div className="pkg-banner-content">
            <h4 className="pkg-banner-title">Need a custom scope or have specific requirements?</h4>
            <p className="pkg-banner-sub">Every project gets direct attention, clean architecture, and dedicated focus.</p>
          </div>
          <a
            href="https://wa.me/918780054574?text=Hi%20Jay,%20I%20have%20a%20custom%20project%20inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="pkg-banner-cta"
          >
            <span>Book a Custom Consultation</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;
