const reviews = [
  {
    text: "They did an incredible job on my car after a rear-end collision. The paint match was flawless and they handled all the insurance paperwork. Couldn't be happier with the results!",
    author: 'Maria G.',
    location: 'Santa Barbara',
    initial: 'M',
  },
  {
    text: "Professional from start to finish. They kept me updated throughout the entire repair process. My truck looks brand new! The team at Happy's is truly top-notch.",
    author: 'James T.',
    location: 'Santa Barbara',
    initial: 'J',
  },
  {
    text: "After a hailstorm damaged my car, Happy's made it look perfect again. Fast turnaround, great communication, and they worked seamlessly with my insurance company. Highly recommend!",
    author: 'Sarah K.',
    location: 'Santa Barbara',
    initial: 'S',
  },
];

function Stars() {
  return (
    <div className="review-stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-desc">Don&apos;t just take our word for it — hear from the people we&apos;ve helped.</p>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card" data-animate="fade-up" data-delay={i * 100} key={r.author}>
              <Stars />
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <strong>{r.author}</strong>
                  <span>{r.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
