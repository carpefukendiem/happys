import Image from 'next/image';

const services = [
  {
    title: 'Collision Repair',
    desc: 'Full-service collision repair for all makes and models. From minor fender benders to major structural damage, we restore your vehicle to pre-accident condition.',
    img: '/images/service-collision.jpg',
    alt: 'Collision repair work',
  },
  {
    title: 'Paintless Dent Repair',
    desc: 'Advanced PDR technology removes dents and dings without affecting your factory paint finish. Faster, more affordable, and eco-friendly.',
    img: '/images/service-pdr.jpg',
    alt: 'Paintless dent repair',
  },
  {
    title: 'Expert Color Matching',
    desc: 'Our computerized paint matching system ensures a seamless, factory-perfect finish every time. Your vehicle will look like it just rolled off the lot.',
    img: '/images/service-paint.jpg',
    alt: 'Auto paint color matching',
  },
  {
    title: 'Frame & Unibody Repair',
    desc: "State-of-the-art frame straightening and unibody repair equipment restores your vehicle's structural integrity to manufacturer specifications.",
    img: '/images/service-frame.jpg',
    alt: 'Frame and unibody repair',
  },
  {
    title: 'Hail & Storm Damage',
    desc: 'Specialized repair for weather-related damage including hail dents, storm debris, and flood damage. We work with your insurance to simplify claims.',
    img: '/images/service-hail.jpg',
    alt: 'Hail and storm damage repair',
  },
  {
    title: 'Insurance Assistance',
    desc: 'We work with all major insurance companies and handle the paperwork for you. Towing coordination, rental car assistance, and claims support included.',
    img: '/images/service-insurance.jpg',
    alt: 'Insurance paperwork assistance',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-desc">
            Comprehensive collision repair services backed by state-of-the-art equipment and I-CAR Gold certified technicians.
          </p>
        </div>
        <div className="services-grid">
          {services.map((svc, i) => (
            <div className="service-card" data-animate="fade-up" data-delay={i * 100} key={svc.title}>
              <div className="service-card-img">
                <Image src={svc.img} alt={svc.alt} width={600} height={400} loading="lazy" />
              </div>
              <div className="service-card-body">
                <h3 className="service-name">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
