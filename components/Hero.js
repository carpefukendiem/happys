import Image from 'next/image';
import Link from 'next/link';
import Counter from './Counter';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <Image
          src="/images/hero-santa-barbara.jpg"
          alt=""
          fill
          priority
          className="hero-bg-image"
          sizes="100vw"
        />
        <div className="hero-overlay"></div>
        <div className="hero-noise"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge" data-animate="fade-up">
          <Image
            src="/images/carstar-logo.png"
            alt="CARSTAR Auto Body Repair Experts"
            width={200}
            height={60}
            className="hero-carstar-logo"
            priority
          />
        </div>
        <h1 className="hero-title" data-animate="fade-up" data-delay="100">
          Expert Collision Repair<br />
          <span className="hero-accent">You Can Trust</span>
        </h1>
        <p className="hero-subtitle" data-animate="fade-up" data-delay="200">
          Santa Barbara&apos;s trusted auto body repair specialists.<br className="hide-mobile" />
          I-CAR certified technicians. 5-year nationwide warranty.
        </p>
        <div className="hero-actions" data-animate="fade-up" data-delay="300">
          <Link href="#contact" className="btn btn-primary">Get a Free Estimate</Link>
          <a href="tel:8055000335" className="btn btn-outline">Call (805) 500-0335</a>
        </div>
        <div className="hero-stats" data-animate="fade-up" data-delay="400">
          <div className="stat">
            <Counter target={25} /><span className="stat-plus">+</span>
            <span className="stat-label">Years of Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <Counter target={1} />
            <span className="stat-label">Locations</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <Counter target={5} /><span className="stat-suffix">-Year</span>
            <span className="stat-label">Nationwide Warranty</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">4.8</span><span className="stat-suffix">★</span>
            <span className="stat-label">Average Rating</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
