'use client';

import { educationEntries, experienceEntries, TimelineEntry } from '@/lib/data';
import AnimatedSection from './AnimatedSection';

function TimelineColumn({ title, entries, id }: { title: string; entries: TimelineEntry[]; id?: string }) {
  return (
    <div id={id}>
      <AnimatedSection>
        <h2 className="text-h2 timeline-column__title">{title}</h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="timeline">
          {entries.map((entry, index) => (
            <div key={index} className="timeline-entry">
              <div className="timeline-dot" />
              <h3 className="timeline-entry__title">{entry.title}</h3>
              <p className="timeline-entry__meta">
                <a href={entry.orgUrl} target="_blank" rel="noopener noreferrer">
                  {entry.org}
                </a>
                {' • '}
                {entry.period}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

export default function EducationTimeline() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <div className="timeline-grid">
          <TimelineColumn title="Education" entries={educationEntries} />
          <TimelineColumn title="Experience" entries={experienceEntries} id="experience" />
        </div>
      </div>
    </section>
  );
}
