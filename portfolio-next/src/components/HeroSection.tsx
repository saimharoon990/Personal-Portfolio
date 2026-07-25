'use client';

import Image from 'next/image';
import { heroData, socialLinks } from '@/lib/data';

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      {/* Oversized background typography */}
      <div className="hero__watermark" aria-hidden="true">
        <span>SAIM</span>
        <span>HAROON</span>
      </div>

      <div className="hero__content">
        {/* Portrait */}
        <div className="hero__portrait-wrapper">
          <div className="hero__portrait-ring" />
          <Image
            src={heroData.portrait}
            alt={heroData.name}
            width={300}
            height={300}
            className="hero__portrait"
            priority
          />
        </div>

        {/* Name & Info */}
        <h1 className="hero__name">{heroData.name}</h1>
        <p className="hero__tagline">{heroData.tagline}</p>
        <p className="hero__school">{heroData.school}</p>

        {/* Bio */}
        <p
          className="hero__bio"
          dangerouslySetInnerHTML={{ __html: heroData.bio }}
        />

        {/* Pill-shaped social links */}
        <div className="hero__pills">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pill"
              aria-label={link.label}
            >
              <i className={link.icon} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
