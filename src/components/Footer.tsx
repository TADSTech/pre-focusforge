import './Footer.css';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showPolicy, setShowPolicy] = useState(false);

  // Inject JSON-LD structured data for SEO
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FocusForge",
      "url": "https://focusforge.app",
      "logo": "https://focusforge.app/logo.png",
      "sameAs": [
        "https://github.com/TADSTech/focusforge",
        "mailto:focusforgeapp@outlook.com"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "focusforgeapp@outlook.com",
        "contactType": "customer support",
        "availableLanguage": ["English"]
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content container">
        {/* ✅ Brand tagline with keyword */}
        <p className="footer-tagline">
          FocusForge – Forge your focus and build unstoppable habits.
        </p>

        {/* ✅ Footer nav with descriptive link text */}
        <nav className="footer-links" aria-label="Footer navigation">
          <a
            href="https://github.com/TADSTech/focusforge"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View FocusForge on GitHub
          </a>
          <a
            href="mailto:focusforgeapp@outlook.com"
            className="footer-link"
          >
            Contact the FocusForge Team
          </a>
          <button
            className="footer-link footer-link-button"
            onClick={() => setShowPolicy(true)}
            aria-label="Read FocusForge Privacy Policy"
          >
            Privacy Policy
          </button>
        </nav>

        {/* ✅ Contact info with <address> for SEO */}
        <address className="footer-contact">
          📧 <a href="mailto:focusforgeapp@outlook.com">focusforgeapp@outlook.com</a>
        </address>

        {/* ✅ Copyright with <small> */}
        <p className="footer-copyright">
          <small>© {new Date().getFullYear()} FocusForge. All rights reserved.</small>
        </p>
      </div>

      {/* ✅ Modal for privacy policy */}
      {showPolicy && (
        <div className="modal-overlay" onClick={() => setShowPolicy(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowPolicy(false)}
              aria-label="Close privacy policy"
            >
              Close
            </button>
            <div className="policy-text">
              <h1>FocusForge Privacy Policy</h1>
              <p><em>Last updated: Sept 2025</em></p>

              <h2>1. Information We Collect</h2>
              <p>We may collect the following information when you use FocusForge:</p>
              <ul>
                <li>Account information (name, email, login details).</li>
                <li>Habit and task data you track inside the app.</li>
                <li>Device and usage data for analytics.</li>
                <li>Email submissions (waitlist, newsletter).</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>Provide and improve the Service.</li>
                <li>Authenticate and secure user accounts.</li>
                <li>Track and visualize progress (habits, streaks, stats).</li>
                <li>Send updates, promotions, or support messages.</li>
              </ul>

              <h2>3. Data Sharing</h2>
              <p>
                We don’t sell your data. Information may only be shared with service
                providers (like Supabase) or for legal compliance.
              </p>

              <h2>4. Data Security</h2>
              <p>
                Your data is securely stored on Supabase-hosted servers. We take
                reasonable measures to protect it, but no system is 100% secure.
              </p>

              <h2>5. Your Rights</h2>
              <p>
                Depending on your region, you may request access, deletion, or
                corrections to your data by emailing us at{" "}
                <a href="mailto:focusforgeapp@outlook.com">
                  focusforgeapp@outlook.com
                </a>.
              </p>

              <h2>6. Children’s Privacy</h2>
              <p>
                FocusForge is not intended for children under 13. We do not knowingly
                collect data from children.
              </p>

              <h2>7. Updates</h2>
              <p>
                We may update this Privacy Policy over time. Changes will be reflected
                here with a new date.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                For questions about this policy, email us at:{" "}
                <a href="mailto:focusforgeapp@outlook.com">
                  focusforgeapp@outlook.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
