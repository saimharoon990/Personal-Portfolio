'use client';

import { useState } from 'react';
import { newsItems } from '@/lib/data';
import AnimatedSection from './AnimatedSection';

export default function NewsTimeline() {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = 4;
  const hasMore = newsItems.length > visibleCount;
  const displayItems = expanded ? newsItems : newsItems.slice(0, visibleCount);

  return (
    <section id="news" className="section section--alt">
      <div className="container container--narrow">
        <AnimatedSection>
          <h2 className="text-h2 section-title">Recent News</h2>
        </AnimatedSection>

        <div className="news-list">
          {displayItems.map((item, index) => (
            <AnimatedSection key={index}>
              <div className="news-item">
                <div className="news-date">{item.date}</div>
                <div
                  className="news-content"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {hasMore && (
          <div style={{ textAlign: 'center' }}>
            <button
              className={`news-toggle ${expanded ? 'news-toggle--expanded' : ''}`}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show Less' : 'Older News'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
