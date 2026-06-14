import React from 'react';
import styles from './About.module.css';

const About = () => {
  const timelineEvents = [
    {
      year: '2025 (Early)',
      title: 'B.Tech AI & ML Journey Begins',
      description: 'Entered GLA University to pursue my Bachelor of Technology. Started with core computing concepts and learned the fundamentals of C programming.',
    },
    {
      year: '2025 (Late)',
      title: 'Python Scripting & Problem Solving',
      description: 'Learned Python programming, structural algorithms, and scripting logic. Built initial automation tools and focused on algorithms.',
    },
    {
      year: '2026 (Early)',
      title: 'Databases & Relational Modelling (DBMS)',
      description: 'Explored database systems. Wrote relational query models and SQL schemas, laying the groundwork for our academic DBMS project.',
    },
    {
      year: '2026 (Mid)',
      title: 'Microsoft Azure Cloud Certified',
      description: 'Expanded knowledge into cloud infrastructure. Prepared for and successfully passed the Microsoft Certified: Azure Fundamentals exam.',
    },
  ];

  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Biography</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className={styles.aboutGrid}>
          <div className={`${styles.bioCard} glass`}>
            <h3 className={styles.bioTitle}>Who I Am</h3>
            <p className={styles.bioText}>
              Hi, my name is **Abhishek Kumar**. I am a B.Tech student majoring in Artificial Intelligence & Machine Learning (AI & ML) at **GLA University** (Batch of 2025 - 2029).
            </p>
            <p className={styles.bioText}>
              Currently in my second year, I started my programming journey with basic C programming and Python. 
              I am highly interested in databases (DBMS) and data engineering, building clean data flows and relational schemas.
              Recently, I validated my cloud capabilities by earning the Microsoft Certified: Azure Fundamentals certification.
            </p>
            <div className={styles.metaInfo}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Location</span>
                <span className={styles.metaValue}>Mathura, India</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>University</span>
                <span className={styles.metaValue}>GLA University</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Specialization</span>
                <span className={styles.metaValue}>B.Tech (AI & ML)</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Email</span>
                <span className={styles.metaValue}>abhishek.kumar_cs.aiml25@gla.ac.in</span>
              </div>
            </div>
          </div>

          <div className={`${styles.educationCard} glass`}>
            <div>
              <h3 className={styles.eduTitle}>Education</h3>
              <div className={styles.eduItem}>
                <h4 className={styles.eduDegree}>Bachelor of Technology (B.Tech)</h4>
                <p className={styles.eduSchool}>Artificial Intelligence & Machine Learning (AI & ML)</p>
                <p className={styles.eduSchool}>GLA University, Mathura</p>
                <span className={styles.eduDuration}>2025 - 2029</span>
              </div>
              <div className={styles.eduItem}>
                <h4 className={styles.eduDegree}>High School & Intermediate</h4>
                <p className={styles.eduSchool}>CBSE Board</p>
                <span className={styles.eduDuration}>Completed 2025</span>
              </div>
            </div>

            <div>
              <h3 className={styles.eduTitle} style={{ marginTop: '1rem', fontSize: '1.4rem' }}>Career Objective</h3>
              <p className={styles.bioText} style={{ marginBottom: 0 }}>
                To apply my database management (DBMS), Python data engineering, and Microsoft Azure cloud skills in a hands-on developer role 
                to build clean database schemas and data processing applications.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.timelineSection}>
          <h3 className={styles.timelineTitle}>My Learning Journey</h3>
          <div className={styles.timeline}>
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${
                  index % 2 === 0 ? styles.timelineItemLeft : styles.timelineItemRight
                }`}
              >
                <div className={styles.timelineDot}></div>
                <div className={`${styles.timelineContent} glass`}>
                  <span className={styles.timelineYear}>{event.year}</span>
                  <h4 className={styles.timelineHeading}>{event.title}</h4>
                  <p className={styles.timelineText}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
