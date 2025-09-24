import './WhoWeAre.css';

export default function WhoWeAre() {
  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="who-we-are" className="whoweare container">
      <div className="whoweare-content">
        <h2 className="whoweare-title">Who We Are</h2>
        <p className="whoweare-subtitle">
          FocusForge is your partner in building unstoppable habits.
        </p>
        <p className="whoweare-description">
          FocusForge is crafted by students, for students—and anyone driven to grow. We fuse simplicity, motivation, and data-driven insights to keep you consistent, focused, and on track to crush your goals.
        </p>
        <div className="whoweare-cta">
          <button className="whoweare-button" onClick={handleScrollToCTA}>Start Your Journey</button>
        </div>
      </div>
    </section>
  );
}