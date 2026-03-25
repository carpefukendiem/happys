const locations = [
  {
    city: 'Santa Barbara',
    name: "CARSTAR Happy's Collision Center",
    address: '502 E Haley St, Santa Barbara, CA 93103',
    phone: '(805) 500-0335',
    phoneTel: '8055000335',
    hours: 'Mon – Fri: 8:00 AM – 6:00 PM',
    rating: '4.7 Stars (107 Reviews)',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.8!2d-119.697!3d34.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e9148b0c768d4b%3A0x1db86d8e6f5b0a39!2s502%20E%20Haley%20St%2C%20Santa%20Barbara%2C%20CA%2093103!5e0!3m2!1sen!2sus!4v1',
    directionsUrl: 'https://www.google.com/maps/dir//502+E+Haley+St,+Santa+Barbara,+CA+93103',
  },
];

function Icon({ d }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d={d}></path>
    </svg>
  );
}

export default function Locations() {
  return (
    <section className="locations" id="locations">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span className="section-tag">Find Us</span>
          <h2 className="section-title">Our Santa Barbara Location</h2>
          <p className="section-desc">Conveniently located in Santa Barbara for fast, trusted collision repair.</p>
        </div>
        <div className="locations-grid">
          {locations.map((loc, i) => (
            <div className="location-card" data-animate="fade-up" data-delay={i * 150} key={loc.city}>
              <div className="location-map">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${loc.city} location map`}
                ></iframe>
              </div>
              <div className="location-info">
                <div className="location-badge">{loc.city}</div>
                <h3 className="location-name">{loc.name}</h3>
                <div className="location-details">
                  <div className="location-detail">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>{loc.address}</span>
                  </div>
                  <div className="location-detail">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <a href={`tel:${loc.phoneTel}`}>{loc.phone}</a>
                  </div>
                  <div className="location-detail">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>{loc.hours}</span>
                  </div>
                  <div className="location-detail">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                    <span>{loc.rating}</span>
                  </div>
                </div>
                <a href={loc.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Get Directions</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
