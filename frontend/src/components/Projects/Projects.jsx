import React, { useState, useEffect } from 'react';
import { getProjects } from '../../services/api';
import styles from './Projects.module.css';

// Local fallbacks in case the backend database is not active yet
const MOCK_PROJECTS = [
  {
    _id: 'mock-1',
    title: 'DBMS Project',
    description: 'A database management system project focusing on relational model concepts, database normalization, efficient SQL querying, and schema implementation to solve data organization problems.',
    technologies: ['SQL', 'DBMS', 'MySQL', 'Database Design'],
    githubLink: 'https://github.com/Nauhwar5j/DBMS-PROJECT',
    liveLink: '',
    imageUrl: '/dbms_1.png',
    images: ['/dbms_1.png', '/dbms_2.png', '/dbms_3.png', '/dbms_4.png', '/dbms_5.png', '/dbms_6.png', '/dbms_7.png', '/dbms_8.png'],
    featured: true,
  },
  {
    _id: 'mock-2',
    title: 'Data Engineering Project',
    description: 'A data engineering platform that implements ETL pipelines, processes dataset structures, and manages data workflows using Python scripting and data transformation tools.',
    technologies: ['Python', 'Data Engineering', 'ETL', 'Pandas'],
    githubLink: 'https://github.com/Nauhwar5j/Data_engineeringProject',
    liveLink: '',
    imageUrl: '/weather_1.png',
    images: ['/weather_1.png', '/weather_2.png', '/weather_3.png'],
    featured: true,
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  // Lightbox Modal States
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProjects();
      
      if (data && data.length > 0) {
        setProjects(data);
        setIsOfflineMode(false);
      } else {
        // If API returns empty array, fall back to mock data
        setProjects(MOCK_PROJECTS);
        setIsOfflineMode(true);
      }
    } catch (err) {
      console.warn('Backend API connection failed, loading local projects fallback.', err.message);
      // Fail gracefully and use mock projects for a working demo
      setProjects(MOCK_PROJECTS);
      setIsOfflineMode(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const openLightbox = (project) => {
    const imgs = project.images && project.images.length > 0 
      ? project.images 
      : [project.imageUrl].filter(Boolean);
    
    if (imgs.length > 0) {
      setLightboxImages(imgs);
      setCurrentImageIndex(0);
      setLightboxOpen(true);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
  };

  // Extract all unique technologies for the dynamic filter buttons
  const getFilters = () => {
    const allTech = projects.flatMap((p) => p.technologies || []);
    // Normalize casing for unique values
    const uniqueTech = Array.from(new Set(allTech.map((t) => t.trim())));
    return ['All', ...uniqueTech];
  };

  // Filter projects based on active filter button
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => 
        p.technologies.some(tech => tech.toLowerCase().trim() === activeFilter.toLowerCase().trim())
      );

  return (
    <section id="projects" className={`${styles.projectsSection} section`}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">My Projects</h2>
          {isOfflineMode && (
            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600' }}>
              ℹ️ Displaying offline showcase. To connect, start your MongoDB server and backend.
            </div>
          )}
        </div>

        {loading ? (
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
            <p>Loading dynamic projects from database...</p>
          </div>
        ) : error ? (
          <div className={styles.errorState}>
            <p>Error loading projects: {error}</p>
            <button className="btn btn-primary retryBtn" onClick={fetchProjects}>
              Retry Connection
            </button>
          </div>
        ) : (
          <>
            {/* Filter Bar */}
            <div className={styles.filters}>
              {getFilters().map((filter) => (
                <button
                  key={filter}
                  className={`${styles.filterBtn} ${
                    activeFilter === filter ? styles.activeFilterBtn : ''
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <article key={project._id} className={styles.projectCard}>
                  {project.featured && (
                    <div className={styles.featuredBadge}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      Featured Project
                    </div>
                  )}

                  <div 
                    className={styles.imageContainer} 
                    onClick={() => openLightbox(project)}
                    title="Click to view screenshots gallery"
                  >
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className={styles.projectImage}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className={styles.fallbackImage} 
                      style={{ display: project.imageUrl ? 'none' : 'flex' }}
                    >
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <span style={{ fontSize: '0.85rem', marginTop: '0.5rem', fontWeight: '600' }}>
                        Screenshot Placeholder
                      </span>
                    </div>
                  </div>

                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.description}</p>
                    
                    <div className={styles.techTags}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={styles.links}>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          GitHub
                        </a>
                      )}
                      
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxImages.length > 0 && (
        <div className={styles.lightbox} onClick={() => setLightboxOpen(false)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setLightboxOpen(false)} aria-label="Close image">
              &times;
            </button>

            {lightboxImages.length > 1 && (
              <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev} aria-label="Previous image">
                &#10094;
              </button>
            )}

            <div className={styles.lightboxImageWrapper}>
              <img 
                src={lightboxImages[currentImageIndex]} 
                alt={`Screenshot ${currentImageIndex + 1}`} 
                className={styles.lightboxImage}
              />
            </div>

            {lightboxImages.length > 1 && (
              <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext} aria-label="Next image">
                &#10095;
              </button>
            )}

            <div className={styles.lightboxMeta}>
              <span className={styles.counter}>
                {currentImageIndex + 1} / {lightboxImages.length}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Click outside or press &times; to close
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
