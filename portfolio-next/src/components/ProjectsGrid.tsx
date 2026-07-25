'use client';

import { useState } from 'react';
import { projects } from '@/lib/data';
import AnimatedSection from './AnimatedSection';
import ProjectSpotlight from './ProjectSpotlight';

export default function ProjectsGrid() {
  const [modalData, setModalData] = useState<typeof projects[0] | null>(null);

  const closeModal = () => setModalData(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-h2 section-title">Applied Research & Engineering Initiatives</h2>
        </AnimatedSection>

        {/* AquaWatch Spotlight */}
        <div style={{ marginBottom: '3rem' }}>
          <ProjectSpotlight />
        </div>

        {/* Project Cards */}
        <AnimatedSection stagger>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card reveal"
                onClick={() => setModalData(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setModalData(project)}
              >
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <span className="project-card__cta">
                  View Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Modal */}
      <div
        className={`modal-overlay ${modalData ? 'modal-overlay--open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        {modalData && (
          <div className="modal-card">
            <div className="modal-card__header">
              <h3 className="modal-card__title">{modalData.title}</h3>
              <button className="modal-card__close" onClick={closeModal} aria-label="Close modal">
                ×
              </button>
            </div>
            <div className="modal-card__body">
              <p>A brief overview of the main goals for this project:</p>
              <ul className="modal-card__topics">
                {modalData.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
              {modalData.link !== '#' && (
                <a href={modalData.link} className="modal-card__action">
                  View Full Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
