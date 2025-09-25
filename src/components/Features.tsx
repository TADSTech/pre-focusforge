import './Features.css';
import SimpleLogo from '../assets/simple.svg';
import GamifyIcon from '../assets/gamify.svg';
import TrackIcon from '../assets/track.svg';

export default function Features() {
  return (
    <section
      className="features container"
      id="features"
      aria-labelledby="features-title"
      aria-describedby="features-subtitle"
    >
      <h2 id="features-title" className="features-title">
        Why Choose FocusForge for Habit Tracking?
      </h2>


      <p id="features-subtitle" className="features-subtitle">
        FocusForge helps you <strong>build lasting habits</strong> with
        <em> progress tracking</em>, <em>gamification</em>, and a
        <em> simple, distraction-free design</em>.
      </p>

      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-card">
          <img
            src={TrackIcon}
            alt="Progress tracking icon – streaks, charts, and milestones"
            className="feature-icon"
            width="64"
            height="64"
          />
          <h3 className="feature-title">Track Your Progress</h3>
          <p className="feature-description">
            Stay motivated with detailed habit tracking. Visualize your daily
            streaks, weekly stats, and milestone achievements with clean,
            interactive charts.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <img
            src={GamifyIcon}
            alt="Gamification icon – rewards, challenges, and badges"
            className="feature-icon"
            width="64"
            height="64"
          />
          <h3 className="feature-title">Gamified Motivation</h3>
          <p className="feature-description">
            Turn self-improvement into a fun challenge. Earn XP, unlock
            achievement badges, and push your streaks further with playful,
            science-backed gamification.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <img
            src={SimpleLogo}
            alt="Minimalist design icon – clean and distraction-free"
            className="feature-icon"
            width="64"
            height="64"
          />
          <h3 className="feature-title">Simple & Focused</h3>
          <p className="feature-description">
            No unnecessary clutter. FocusForge provides a clean, intuitive
            interface that keeps your attention where it belongs, on building
            habits that last.
          </p>
        </div>
      </div>
    </section>
  );
}
