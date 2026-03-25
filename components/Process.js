const steps = [
  { num: '01', title: 'Free Estimate', desc: 'Bring your vehicle in or submit photos online for a comprehensive damage assessment and detailed repair estimate.' },
  { num: '02', title: 'Insurance & Scheduling', desc: 'We coordinate directly with your insurance company and schedule your repair at a time that works for you.' },
  { num: '03', title: 'Expert Repair', desc: 'Our certified technicians restore your vehicle using state-of-the-art equipment and OEM-quality parts.' },
  { num: '04', title: 'Quality Delivery', desc: 'Final quality inspection, detailing, and delivery. Your vehicle leaves looking as good as new with our 5-year warranty.' },
];

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Our Repair Process</h2>
          <p className="section-desc">We make collision repair simple and stress-free from start to finish.</p>
        </div>
        <div className="process-steps">
          {steps.map((step, i) => (
            <div key={step.num} style={{ display: 'contents' }}>
              {i > 0 && <div className="process-connector"></div>}
              <div className="process-step" data-animate="fade-up" data-delay={i * 150}>
                <div className="step-number">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
