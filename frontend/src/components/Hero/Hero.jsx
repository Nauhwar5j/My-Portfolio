import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <div className={`${styles.heroText} animate-fade-in`}>
            <span className={styles.welcome}>Welcome to my portfolio</span>
            <h1 className={styles.name}>Abhishek Kumar</h1>
            <h2 className={styles.title}>B.Tech Student | AI & ML</h2>
            <p className={styles.bio}>
              I am a student currently pursuing my **B.Tech in Artificial Intelligence & Machine Learning (AI & ML)** at **GLA University** (Batch 2025 - 2029). 
              With a solid foundation in C, Python programming, database management systems (DBMS), frontend design, and cloud architectures, 
              I enjoy building data pipelines and relational schemas.
            </p>
            <div className={styles.ctas}>
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View Projects
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('resume')}>
                Download Resume
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                Contact Me
              </button>
            </div>
          </div>

          <div className={styles.heroImageContainer}>
            <div className={styles.avatarCard}>
              <div className={styles.glowRing}></div>
              {/* Professional Developer SVG Illustration */}
              <svg className={styles.avatarSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="var(--accent)" />
                  </linearGradient>
                  <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--bg-tertiary)" />
                    <stop offset="100%" stopColor="var(--card-border)" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="90" fill="url(#bgGrad)" />
                {/* Visual elements representing AI/ML & Web Development */}
                <rect x="50" y="60" width="100" height="70" rx="10" fill="none" stroke="url(#avatarGrad)" strokeWidth="4" />
                <path d="M 60 75 L 85 75" stroke="url(#avatarGrad)" strokeWidth="3" strokeLinecap="round" />
                <path d="M 60 90 L 95 90" stroke="url(#avatarGrad)" strokeWidth="3" strokeLinecap="round" />
                <path d="M 60 105 L 75 105" stroke="url(#avatarGrad)" strokeWidth="3" strokeLinecap="round" />
                
                {/* AI / ML nodes representation */}
                <circle cx="130" cy="80" r="5" fill="var(--accent)" />
                <circle cx="150" cy="95" r="5" fill="var(--primary)" />
                <circle cx="130" cy="110" r="5" fill="var(--accent)" />
                <line x1="130" y1="80" x2="150" y2="95" stroke="var(--text-muted)" strokeWidth="1.5" />
                <line x1="130" y1="110" x2="150" y2="95" stroke="var(--text-muted)" strokeWidth="1.5" />
                <line x1="130" y1="80" x2="130" y2="110" stroke="var(--text-muted)" strokeWidth="1.5" />

                {/* Keyboard and Stand */}
                <rect x="85" y="130" width="30" height="15" fill="var(--text-secondary)" />
                <path d="M 65 145 L 135 145" stroke="var(--text-secondary)" strokeWidth="5" strokeLinecap="round" />

                {/* Developer Avatar Silhouette inside screens */}
                <circle cx="100" cy="170" r="25" fill="url(#avatarGrad)" opacity="0.85" />
                <circle cx="100" cy="138" r="10" fill="url(#avatarGrad)" opacity="0.85" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
