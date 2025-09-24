import './ProblemSolution.css';

export default function ProblemSolution() {

  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="problemsolution container">
      <div className="problemsolution-grid">
        <div className="problemsolution-card problem">
          <h2 className="problemsolution-title">The Problem</h2>
          <p className="problemsolution-description">
            Building habits is tough. Distractions lurk everywhere, and most apps are either too complex, gimmicky, or fail to keep you engaged long-term.
          </p>
        </div>
        <div className="problemsolution-card solution">
          <h2 className="problemsolution-title">Our Solution</h2>
          <p className="problemsolution-description">
            FocusForge delivers a sleek, gamified system to track your habits, visualize your progress, and fuel your motivation. It’s the practical tool you’ll love using daily to stay consistent and crush your goals.
          </p>
          <button className="problemsolution-button" onClick={handleScrollToCTA}>Start Building Now</button>
        </div>
      </div>
    </section>
  );
}