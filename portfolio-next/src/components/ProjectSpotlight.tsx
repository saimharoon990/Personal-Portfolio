'use client';

import { aquawatchData } from '@/lib/data';
import AnimatedSection from './AnimatedSection';

export default function ProjectSpotlight() {
  return (
    <div id="aquawatch-spotlight">
      <AnimatedSection>
        <div className="spotlight">
          <div className="spotlight__header">
            <div className="spotlight__badge">
              <i className="fas fa-water" />
              Featured Project
            </div>
            <h2 className="spotlight__title">{aquawatchData.title}</h2>
            <p className="spotlight__subtitle">{aquawatchData.subtitle}</p>
          </div>

          <div className="spotlight__body">
            <div className="spotlight__description">
              <p>{aquawatchData.description}</p>
              <a
                href={aquawatchData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="spotlight__link"
              >
                Visit AquaWatch
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="spotlight__sidebar">
              <h3 className="spotlight__sidebar-title">Purpose</h3>
              <div className="spotlight__goals">
                {aquawatchData.goals.map((goal, index) => (
                  <div key={index} className="spotlight__goal">
                    <div className="spotlight__goal-icon">
                      <i className={goal.icon} />
                    </div>
                    <div className="spotlight__goal-text">
                      <strong>{goal.title}</strong>
                      <span>{goal.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
