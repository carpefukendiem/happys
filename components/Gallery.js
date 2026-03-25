import Image from 'next/image';

const items = [
  { src: '/images/auto-body-experts.jpg', alt: "Happy's auto body and paint experts", label: 'Expert Craftsmanship', className: 'gallery-item-tall', width: 600, height: 800 },
  { src: '/images/gallery-paint-booth.jpg', alt: 'Auto body paint booth', label: 'State-of-the-Art Paint Booth', width: 600, height: 400 },
  { src: '/images/gallery-finish.jpg', alt: 'Professional auto detailing', label: 'Flawless Finishes', width: 600, height: 400 },
  { src: '/images/service-frame.jpg', alt: 'Frame repair and structural work', label: 'Advanced Structural Repairs', width: 600, height: 400 },
  { src: '/images/hero-santa-barbara.jpg', alt: "Happy's Collision Center Santa Barbara service environment", label: 'Serving Santa Barbara', className: 'gallery-item-wide', width: 900, height: 400 },
  { src: '/images/gallery-precision.jpg', alt: 'Car being repaired in shop', label: 'Precision Bodywork', width: 600, height: 400 },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">See the Results</h2>
          <p className="section-desc">Every vehicle leaves our shop looking its absolute best. Here&apos;s a look at our facility and craftsmanship.</p>
        </div>
        <div className="gallery-grid" data-animate="fade-up" data-delay="100">
          {items.map((item) => (
            <div className={`gallery-item ${item.className || ''}`} key={item.alt}>
              <Image src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" />
              <div className="gallery-overlay"><span>{item.label}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
