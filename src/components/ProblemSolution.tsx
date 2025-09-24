import './ProblemSolution.css';

export default function ProblemSolution() {
  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="problem-solution"
      className="problemsolution container"
      aria-labelledby="problem-title solution-title"
    >
      <div className="problemsolution-grid">
        {/* Problem Block */}
        <div className="problemsolution-card problem">
          <h2 id="problem-title" className="problemsolution-title">
            The Productivity Problem
          </h2>
          <p className="problemsolution-description">
            <strong>Building good habits is hard</strong>. Distractions are
            everywhere, and most productivity apps are either overloaded with
            features, too gimmicky to trust, or simply fail to keep you engaged
            in the long run. As a result, motivation drops and goals remain
            out of reach.
          </p>
        </div>

        {/* Solution Block */}
        <div className="problemsolution-card solution">
          <h2 id="solution-title" className="problemsolution-title">
            The FocusForge Solution
          </h2>
          <p className="problemsolution-description">
            <strong>FocusForge</strong> is a clean, motivating platform that
            combines <em>habit tracking</em>, <em>progress visualization</em>,
            and <em>gamification</em> to keep you consistent. With streak
            counters, achievement badges, and progress charts, FocusForge helps
            you build habits that stick—while staying enjoyable and practical
            for everyday use.
          </p>
          <button
            className="problemsolution-button"
            onClick={handleScrollToCTA}
            aria-label="Scroll to call-to-action section to start building habits with FocusForge"
          >
            Start Building Now
          </button>
        </div>
      </div>
    </section>
  );
}
