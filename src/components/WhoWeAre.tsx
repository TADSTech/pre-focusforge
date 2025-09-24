import './WhoWeAre.css';

export default function WhoWeAre() {
  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="who-we-are"
      className="whoweare container"
      aria-labelledby="whoweare-title"
      aria-describedby="whoweare-description"
    >
      <div className="whoweare-content">
        {/* ✅ h2 with keyword focus */}
        <h2 id="whoweare-title" className="whoweare-title">
          Who We Are – The Team Behind FocusForge
        </h2>

        {/* ✅ Strong subtitle with branding + keywords */}
        <p className="whoweare-subtitle">
          FocusForge is your <strong>productivity partner</strong> for 
          <em> building better habits</em> and 
          <em> unlocking your potential</em>.
        </p>

        {/* ✅ Keyword-rich description */}
        <p id="whoweare-description" className="whoweare-description">
          Born from a community of students and creators, FocusForge was built
          to solve one core challenge: <strong>staying consistent</strong> in a world
          full of distractions. We combine <em>habit tracking</em>, 
          <em> progress analytics</em>, and a 
          <em> motivational design system</em> to help you stay disciplined,
          reach your goals, and grow daily.
        </p>

        {/* ✅ Button with descriptive aria-label */}
        <div className="whoweare-cta">
          <button
            className="whoweare-button"
            onClick={handleScrollToCTA}
            aria-label="Scroll to call-to-action section to start your FocusForge journey"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
