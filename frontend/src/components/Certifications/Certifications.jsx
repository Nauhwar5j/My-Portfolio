import React, { useState, useEffect } from 'react';
import { getCertifications } from '../../services/api';
import styles from './Certifications.module.css';

const MOCK_CERTS = [
  {
    _id: 'mock-c1',
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    issueDate: 'May 19, 2026',
    credentialLink: 'https://verify.certiport.com', // Credential Verification ID: yVXm-Dw8X
    imageUrl: '/azure_cert.jpg',
  }
];

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  const fetchCertifications = async () => {
    try {
      setLoading(true);
      const data = await getCertifications();
      if (data && data.length > 0) {
        setCertifications(data);
        setIsOfflineMode(false);
      } else {
        setCertifications(MOCK_CERTS);
        setIsOfflineMode(true);
      }
    } catch (err) {
      console.warn('Backend API connection failed, loading local certifications fallback.', err.message);
      setCertifications(MOCK_CERTS);
      setIsOfflineMode(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertifications();
  }, []);

  return (
    <section id="certifications" className={`${styles.certificationsSection} section`}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          {isOfflineMode && (
            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600' }}>
              ℹ️ Displaying offline credentials. Connect your backend database to fetch dynamic data.
            </div>
          )}
        </div>

        {loading ? (
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
            <p>Fetching certificates...</p>
          </div>
        ) : (
          <div className={styles.certificationsGrid}>
            {certifications.map((cert) => (
              <article key={cert._id} className={styles.certCard}>
                <a
                  href={cert.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Click to view full certificate"
                  style={{ display: 'block', cursor: 'pointer' }}
                >
                  <div className={styles.imageContainer}>
                    {cert.imageUrl ? (
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className={styles.certImage}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className={styles.fallbackImage}
                      style={{ display: cert.imageUrl ? 'none' : 'flex' }}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: '600' }}>
                        Certificate Badge
                      </span>
                    </div>
                  </div>
                </a>

                <div className={styles.certContent}>
                  <div className={styles.certIssuer}>{cert.issuer}</div>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <div className={styles.certDate}>Issued: {cert.issueDate}</div>
                  
                  {cert.credentialLink && (
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Verify Credential
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
