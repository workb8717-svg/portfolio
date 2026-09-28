import { useRef, useEffect, useState, useCallback } from 'react';
import './GooeyNav.css';

const GooeyNav = ({
  items = [],
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  initialActiveIndex = 0,
  forcedActiveIndex = null
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const particlesContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(
    forcedActiveIndex !== null && forcedActiveIndex !== undefined ? forcedActiveIndex : initialActiveIndex
  );
  const [pillStyle, setPillStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };

  const spawnGooeyParticles = (targetLeft, targetTop, targetWidth, targetHeight) => {
    if (!particlesContainerRef.current) return;
    const container = particlesContainerRef.current;
    const centerX = targetLeft + targetWidth / 2;
    const centerY = targetTop + targetHeight / 2;
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    container.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);

      const particle = document.createElement('span');
      const point = document.createElement('span');
      particle.classList.add('gooey-particle');
      particle.style.left = `${centerX}px`;
      particle.style.top = `${centerY}px`;
      particle.style.setProperty('--start-x', `${p.start[0]}px`);
      particle.style.setProperty('--start-y', `${p.start[1]}px`);
      particle.style.setProperty('--end-x', `${p.end[0]}px`);
      particle.style.setProperty('--end-y', `${p.end[1]}px`);
      particle.style.setProperty('--time', `${p.time}ms`);
      particle.style.setProperty('--scale', `${p.scale}`);
      particle.style.setProperty('--rotate', `${p.rotate}deg`);

      point.classList.add('gooey-point');
      particle.appendChild(point);
      container.appendChild(particle);

      setTimeout(() => {
        try {
          if (container.contains(particle)) {
            container.removeChild(particle);
          }
        } catch {
          // ignore
        }
      }, t);
    }
  };

  const updatePill = useCallback((index) => {
    if (!navRef.current || !containerRef.current) return;
    const lis = navRef.current.querySelectorAll('li');
    const targetLi = lis[index];
    if (!targetLi) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const liRect = targetLi.getBoundingClientRect();

    const newStyle = {
      left: liRect.left - containerRect.left,
      top: liRect.top - containerRect.top,
      width: liRect.width,
      height: liRect.height,
      opacity: 1
    };

    setPillStyle(newStyle);
    return newStyle;
  }, []);

  const handleClick = (e, index) => {
    e.preventDefault();
    const item = items[index];

    if (activeIndex !== index) {
      setActiveIndex(index);
      const pos = updatePill(index);
      if (pos) {
        spawnGooeyParticles(pos.left, pos.top, pos.width, pos.height);
      }
    }

    if (item?.href) {
      if (item.href.startsWith('#')) {
        const targetId = item.href.slice(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = `/${item.href}`;
        }
      } else {
        window.location.href = item.href;
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e, index);
    }
  };

  useEffect(() => {
    if (forcedActiveIndex !== null && forcedActiveIndex !== undefined) {
      setActiveIndex(forcedActiveIndex);
      updatePill(forcedActiveIndex);
    }
  }, [forcedActiveIndex, updatePill]);

  useEffect(() => {
    updatePill(activeIndex);

    const handleResize = () => {
      updatePill(activeIndex);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, updatePill]);

  useEffect(() => {
    if (forcedActiveIndex !== null && forcedActiveIndex !== undefined) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        if (item.href?.startsWith('#')) {
          const el = document.getElementById(item.href.slice(1));
          if (el) {
            const top = el.offsetTop;
            if (scrollPos >= top) {
              if (activeIndex !== i) {
                setActiveIndex(i);
                updatePill(i);
              }
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items, activeIndex, updatePill, forcedActiveIndex]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      {/* SVG Gooey Filter definition - creates crisp liquid surface tension with zero blur */}
      <svg className="gooey-svg-filter" aria-hidden="true">
        <defs>
          <filter id="gooey-nav-filter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* 1. Behind: The Gooey Liquid Layer (Pill + Bubbling Particles filtered together) */}
      <div className="gooey-liquid-layer">
        <div
          className="gooey-sliding-pill"
          style={{
            transform: `translate3d(${pillStyle.left}px, ${pillStyle.top}px, 0)`,
            width: `${pillStyle.width}px`,
            height: `${pillStyle.height}px`,
            opacity: pillStyle.opacity
          }}
        />
        <div className="gooey-particles-holder" ref={particlesContainerRef} />
      </div>

      {/* 2. In front: Pure, Razor-Sharp Links with Zero Filter distortion */}
      <nav className="gooey-nav-links">
        <ul ref={navRef}>
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <li key={index} className={isActive ? 'nav-item active' : 'nav-item'}>
                <a
                  href={item.href}
                  onClick={e => handleClick(e, index)}
                  onKeyDown={e => handleKeyDown(e, index)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default GooeyNav;
