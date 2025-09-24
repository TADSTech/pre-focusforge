import './Features.css';
import SimpleLogo from '../assets/simple.svg'
import GamifyIcon from '../assets/gamify.svg'
import TrackIcon from '../assets/track.svg'

export default function Features() {
  return (
    <section className="features container" id="features">
      <h2 className="features-title">Why Choose FocusForge?</h2>
      <p className="features-subtitle">
        Build habits that stick with tools designed for progress.
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <img
            src={TrackIcon}
            alt="Track Icon"
            className="feature-icon"
          />
          <h3 className="feature-title">Track Your Progress</h3>
          <p className="feature-description">
            Visualize your streaks and milestones with clear, motivating insights.
          </p>
        </div>
        <div className="feature-card">
          <img
            src={GamifyIcon}
            alt="Gamify Icon"
            className="feature-icon"
          />
          <h3 className="feature-title">Gamified Motivation</h3>
          <p className="feature-description">
            Stay engaged with rewards and challenges that make growth fun.
          </p>
        </div>
        <div className="feature-card">
          <img
            src={SimpleLogo}
            alt="Simple Icon"
            className="feature-icon"
          />
          <h3 className="feature-title">Simple & Focused</h3>
          <p className="feature-description">
            No clutter, no distractions—just a clean tool to keep you on track.
          </p>
        </div>
      </div>
    </section>
  );
}