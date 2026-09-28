import React, { useRef, useState, useEffect, useCallback } from 'react';
import ShinyText from '../ShinyText/ShinyText';
import './ServicesSection.css';

const servicesData = [
  {
    number: '01',
    title: 'Website Designing',
    tagline: 'Modern, clean websites built around your brand, not a template.',
    features: [
      {
        tag: 'Custom Design',
        description: 'Built from scratch for your brand — no templates',
      },
      {
        tag: 'Fully Responsive',
        description: 'Works well on mobile, tablet, and desktop',
      },
      {
        tag: 'Clean & Fast',
        description: 'Simple layout, nothing slowing it down',
      },
      {
        tag: 'Clear Call-to-Action',
        description: 'Easy for visitors to know what to do next',
      },
    ],
  },
  {
    number: '02',
    title: 'App Making',
    tagline: 'Simple, clean apps focused on what your users actually need.',
    features: [
      {
        tag: 'Custom Design',
        description: 'Built around your idea, not a generic layout',
      },
      {
        tag: 'Easy Navigation',
        description: 'Simple for anyone to use, no learning curve',
      },
      {
        tag: 'Clean UI',
        description: 'Clear screens, nothing confusing',
      },
      {
        tag: 'Built to Grow',
        description: 'Designed to handle more features later',
      },
    ],
  },
  {
    number: '03',
    title: 'Logo Designing',
    tagline: 'A logo made to fit your brand, not a random template.',
    features: [
      {
        tag: 'Custom Design',
        description: 'Made specifically for your brand, not reused',
      },
      {
        tag: 'Brand Fit',
        description: 'Matches your business tone and identity',
      },
      {
        tag: 'Simple & Memorable',
        description: 'Easy to recognize and remember',
      },
      {
        tag: 'All Formats',
        description: "Delivered in every file type you'll need",
      },
    ],
  },
  {
    number: '04',
    title: 'Festival Creatives, Logo Design, Posters & Ad Creatives (Canva)',
    tagline: 'Clean, simple designs for your everyday marketing needs.',
    features: [
      {
        tag: 'Festival Creatives',
        description: 'Designs for festivals and special occasions',
      },
      {
        tag: 'Brand Logo Designs',
        description: 'Simple logo designs for your brand',
      },
      {
        tag: 'Ad Posters',
        description: 'Eye-catching posters for promotions',
      },
      {
        tag: 'Ad Creatives',
        description: 'Ready-to-post designs for social media',
      },
    ],
  },
  {
    number: '05',
    title: 'Script Writing',
    tagline: 'Clear, engaging scripts written to hold attention from start to finish.',
    features: [
      {
        tag: 'Video Scripts',
        description: 'Written for reels, ads, or full video content',
      },
      {
        tag: 'Clear Structure',
        description: 'Easy flow from hook to message to close',
      },
      {
        tag: 'Tone Matched',
        description: "Written in your brand's voice, not a generic style",
      },
      {
        tag: 'Ready to Shoot',
        description: 'Clean, usable scripts — no extra edits needed',
      },
    ],
  },
  {
    number: '06',
    title: 'Social Media Management',
    tagline: 'Keeping your social presence active, consistent, and on-brand.',
    features: [
      {
        tag: 'Content Planning',
        description: 'Organized posting schedule, not random uploads',
      },
      {
        tag: 'Consistent Branding',
        description: "Every post matches your brand's look and tone",
      },
      {
        tag: 'Regular Posting',
        description: 'Keeps your account active and visible',
      },
      {
        tag: 'Growth Focused',
        description: 'Built around getting more reach and engagement',
      },
    ],
  },
];

const ServiceCardItem = ({ service, index }) => {
  const cardRef = useRef(null);
  const beamSpeed = 4.2 + (index % 3) * 0.9;
  const beamDelay = -(index * 0.75);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--rot-x', `${rotateX.toFixed(2)}deg`);
    card.style.setProperty('--rot-y', `${rotateY.toFixed(2)}deg`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--mouse-x', `50%`);
    card.style.setProperty('--mouse-y', `50%`);
    card.style.setProperty('--rot-x', `0deg`);
    card.style.setProperty('--rot-y', `0deg`);
  }, []);

  return (
    <div
      ref={cardRef}
      className="service-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        animationDelay: `${index * 0.08}s`,
      }}
    >
      {/* Top Edge Horizon Light */}
      <div className="card-top-light" />

      {/* Inner Card Surface */}
      <div className="service-card-inner">
        {/* Interactive Mouse-Following Spotlight */}
        <div className="service-card-spotlight" />

        {/* Top Header Row */}
        <div className="service-card-top">
          <div className="service-number-badge">
            <span className="service-number">{service.number}</span>
            <div className="service-live-dot" />
          </div>

          <div className="service-corner-action">
            <span className="service-card-pill">OFFERING</span>
            <div className="service-arrow-circle">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Heading & Tagline */}
        <div className="service-card-heading-group">
          <h3 className="service-name">{service.title}</h3>
          <p className="service-tagline">{service.tagline}</p>
        </div>

        {/* Features List */}
        <div className="service-features-list">
          {service.features.map((feature, fIndex) => (
            <div key={fIndex} className="service-feature-row">
              <span className="feature-tag-badge">{feature.tag}</span>
              <span className="feature-description">{feature.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`services-section ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Background layer: ambient overlay */}
      <div className="services-bg-layer">
        <div className="services-blur-overlay" />
      </div>

      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <span className="services-tag">02 / SERVICES</span>
          <h2 className="services-title">
            <ShinyText
              text="CORE SERVICES"
              speed={2.2}
              delay={0}
              color="#888890"
              shineColor="#ffffff"
              spread={135}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
            />
          </h2>
          <p className="services-intro">
            I build the pieces that make a brand impossible to ignore — from how it looks to how it's heard.
          </p>
        </div>

        {/* Feature Grid: 6 Service Cards with 3D micro-tilt and interactive spotlight */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCardItem key={index} service={service} index={index} />
          ))}
        </div>

        {/* Closing Line & CTA Banner */}
        <div className="services-closing-banner">
          <div className="services-closing-content">
            <p className="closing-sub">
              Every design here is made with full focus and real care.
            </p>
            <h3 className="closing-headline">
              Let's build something worth showing off.
            </h3>
          </div>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="services-cta-btn"
          >
            <span>Book a call with me</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cta-arrow"
            >
              <path
                d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
