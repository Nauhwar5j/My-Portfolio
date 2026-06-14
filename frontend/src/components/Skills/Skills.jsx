import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3 / Modules', level: 85 },
        { name: 'JavaScript (ES6+)', level: 80 },
        { name: 'React.js', level: 75 },
      ],
    },
    {
      title: 'Backend Development',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 75 },
        { name: 'Python scripting', level: 80 },
        { name: 'Basic C programming', level: 75 },
      ],
    },
    {
      title: 'Database Management',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      ),
      skills: [
        { name: 'MongoDB (Mongoose)', level: 70 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'DBMS Core / SQL', level: 85 },
      ],
    },
    {
      title: 'Tools & Workflows',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      ),
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman API Testing', level: 75 },
        { name: 'Command Line / CLI', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Proficiencies</span>
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`${styles.skillCategoryCard} glass`}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                {category.title}
              </h3>
              
              <div className={styles.skillsList}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBarContainer}>
                      <div 
                        className={styles.progressBar} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
