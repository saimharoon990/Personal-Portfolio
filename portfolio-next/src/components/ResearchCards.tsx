'use client';

import { researchInterests } from '@/lib/data';
import AnimatedSection from './AnimatedSection';

export default function ResearchCards() {
  return (
    <section id="research" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-h2 section-title">Research Interests</h2>
        </AnimatedSection>

        <AnimatedSection stagger>
          <div className="research-grid">
            {researchInterests.map((interest, index) => (
              <div key={index} className="research-card reveal">
                <div className="research-card__icon">
                  <i className={interest.icon} />
                </div>
                <h3 className="research-card__title">{interest.title}</h3>
                <p className="research-card__desc">{interest.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
