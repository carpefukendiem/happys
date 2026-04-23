import Image from 'next/image';

const features = [
  { title: 'I-CAR Gold Certified', desc: 'Highest industry training standards' },
  { title: '5-Year Nationwide Warranty', desc: 'Coverage wherever you travel' },
  { title: 'All Insurance Accepted', desc: 'We handle the claims process' },
  { title: '24/7 Accident Assistance', desc: 'Always here when you need us' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-bg-pattern"></div>
      <div className="container">
        <div className="about-grid">
          <div className="about-images" data-animate="fade-right">
            <div className="about-img-wrapper about-img-main">
              <Image src="/images/auto-body-experts.jpg" alt="Happy's Collision Center auto body shop team" width={600} height={450} />
            </div>
            <div className="about-img-wrapper about-img-secondary">
              <Image src="/images/service-paint.jpg" alt="Refinishing bay and paint equipment" width={330} height={248} />
            </div>
            <div className="about-experience-badge">
              <span className="exp-number">25+</span>
              <span className="exp-text">Years of<br />Excellence</span>
            </div>
          </div>
          <div className="about-content" data-animate="fade-left">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">The Happy&apos;s Difference</h2>
            <p className="about-lead">
              For over 25 years, Happy&apos;s Collision Center has been a trusted name in Santa Barbara auto body repair, combining local craftsmanship with industry-leading training and equipment.
            </p>
            <p className="about-text">
              Every vehicle that enters our shop receives the same meticulous attention to detail. Our I-CAR Gold certified technicians use state-of-the-art equipment and the latest repair techniques to ensure your vehicle is restored to its pre-accident condition — or better.
            </p>
            <div className="about-features">
              {features.map((f) => (
                <div className="about-feature" key={f.title}>
                  <div className="feature-check">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
