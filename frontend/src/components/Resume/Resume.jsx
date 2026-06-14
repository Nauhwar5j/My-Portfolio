import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <section id="resume" className={`${styles.resumeSection} section`}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Curriculum Vitae</span>
          <h2 className="section-title">My Resume</h2>
        </div>

        <div className={styles.resumeContainer}>
          <a
            href="/resume.pdf"
            download="Abhishek_Kumar_Resume.pdf"
            className="btn btn-primary"
            style={{ padding: '0.8rem 2rem' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF Resume
          </a>

          <div className={styles.resumeWrapper}>
            <div className={styles.resumeHeader}>
              <div className={styles.headerLeft}>
                <h3>Abhishek Kumar</h3>
                <p>B.Tech Student (AI & ML)</p>
              </div>
              <div className={styles.headerRight}>
                <p>Mathura, Uttar Pradesh, India</p>
                <p>abhishek.kumar_cs.aiml25@gla.ac.in</p>
              </div>
            </div>

            <div className={styles.resumeBody}>
              {/* Education */}
              <div className={styles.bodySection}>
                <h4 className={styles.sectionTitle}>Education</h4>
                <div className={styles.sectionContent}>
                  <div>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>B.Tech (Artificial Intelligence & Machine Learning)</span>
                      <span className={styles.itemPeriod}>2025 - 2029</span>
                    </div>
                    <div className={styles.itemMeta}>GLA University, Mathura</div>
                    <p className={styles.itemDesc}>
                      Studying CS foundation, problem-solving, algorithms, cloud concepts, and relational databases. 
                      Specialized coursework in Database Management Systems (DBMS), Data Engineering pipelines, and Machine Learning.
                    </p>
                  </div>
                  <div>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>High School & Intermediate</span>
                      <span className={styles.itemPeriod}>Completed 2025</span>
                    </div>
                    <div className={styles.itemMeta}>CBSE Board</div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className={styles.bodySection}>
                <h4 className={styles.sectionTitle}>Key Skills</h4>
                <div className={styles.sectionContent}>
                  <div>
                    <div className={styles.itemName} style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Programming & Scripting</div>
                    <div className={styles.tagGroup}>
                      <span className={styles.tag}>C Programming</span>
                      <span className={styles.tag}>Python</span>
                      <span className={styles.tag}>SQL</span>
                    </div>
                  </div>
                  <div>
                    <div className={styles.itemName} style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Databases & Infrastructure</div>
                    <div className={styles.tagGroup}>
                      <span className={styles.tag}>DBMS</span>
                      <span className={styles.tag}>MySQL</span>
                      <span className={styles.tag}>Microsoft Azure Cloud</span>
                      <span className={styles.tag}>HTML5 / CSS3 / JS</span>
                    </div>
                  </div>
                  <div>
                    <div className={styles.itemName} style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Tools & Workflows</div>
                    <div className={styles.tagGroup}>
                      <span className={styles.tag}>Git & GitHub</span>
                      <span className={styles.tag}>VS Code</span>
                      <span className={styles.tag}>Data Pipelines (ETL)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className={styles.bodySection}>
                <h4 className={styles.sectionTitle}>Key Projects</h4>
                <div className={styles.sectionContent}>
                  <div>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>DBMS Project</span>
                      <span className={styles.itemPeriod}>2026</span>
                    </div>
                    <p className={styles.itemDesc}>
                      Developed a database management system project to model tables, practice database schema normalization rules, 
                      and structure queries to retrieve user/academic records efficiently.
                    </p>
                  </div>
                  <div>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>Data Engineering Project</span>
                      <span className={styles.itemPeriod}>2025</span>
                    </div>
                    <p className={styles.itemDesc}>
                      Built data processing pipelines inside a Python environment to clean, transform, and map datasets, 
                      integrating Pandas and file management systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
