import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-bg-pattern"></div>
      <div className="container">
        <div className="cta-content" data-animate="fade-up">
          <h2 className="cta-title">Been in an Accident?</h2>
          <p className="cta-text">
            Don&apos;t stress — we&apos;ll handle everything. Get a free estimate today and let our experts take care of the rest.
          </p>
          <div className="cta-actions">
            <Link href="#contact" className="btn btn-white">Request Free Estimate</Link>
            <a href="tel:8007227827" className="btn btn-outline-white">Call (800) CARSTAR</a>
          </div>
        </div>
      </div>
    </section>
  );
}
