import './Footer.css';
import { useState } from 'react';

export default function Footer() {
  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-content container">
        <p className="footer-tagline">Forge your focus, one habit at a time.</p>
        <div className="footer-links">
          <a href="https://github.com/TADSTech/focusforge" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:focusforgeapp@outlook.com" className="footer-link">Contact</a>
          <span className="footer-link footer-link-button" onClick={() => setShowPolicy(true)}>Privacy Policy</span>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} FocusForge. All rights reserved.
        </p>
      </div>
      {showPolicy && (
        <div className="modal-overlay" onClick={() => setShowPolicy(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPolicy(false)}>Close</button>
            <div className="policy-text">
              <h1>FocusForge Privacy Policy</h1>
              <p>Last updated: Sept 2025</p>
              <p>FocusForge (“we,” “our,” or “us”) respects your privacy and is committed to protecting it. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website, application, and related services (the “Service”).</p>
              
              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of information when you use FocusForge:</p>
              <ul>
                <li>Account Information: When you sign up, we collect your name, email address, and authentication details (via Supabase Auth or OAuth providers like Google).</li>
                <li>User Data: Habits, tasks, and progress you create and track within the app.</li>
                <li>Device & Usage Data: Basic analytics such as browser type, device information, and interaction data (page visits, feature usage).</li>
                <li>Email Submissions: If you join our waitlist or newsletter, we collect your email address.</li>
              </ul>
              
              <h2>2. How We Use Your Information</h2>
              <p>We use collected data to:</p>
              <ul>
                <li>Provide and improve the Service.</li>
                <li>Authenticate and secure user accounts.</li>
                <li>Track and visualize your progress (habits, streaks, stats).</li>
                <li>Communicate updates, promotions, or support messages (you can opt out anytime).</li>
                <li>Analyze aggregated usage to guide product improvements.</li>
              </ul>
              
              <h2>3. How We Share Your Information</h2>
              <p>We do not sell your data. Your information may be shared only with:</p>
              <ul>
                <li>Service Providers: Tools like Supabase (database, auth, storage) and hosting platforms.</li>
                <li>Legal Compliance: If required by law, regulation, or to protect the rights/safety of FocusForge and its users.</li>
              </ul>
              
              <h2>4. Data Storage & Security</h2>
              <ul>
                <li>Your data is stored securely on Supabase-hosted servers.</li>
                <li>We take reasonable measures to protect against unauthorized access or misuse.</li>
                <li>However, no system is 100% secure — use the Service at your own risk.</li>
              </ul>
              
              <h2>5. Your Rights</h2>
              <p>Depending on your location, you may have rights to:</p>
              <ul>
                <li>Access or export your data.</li>
                <li>Request correction or deletion of your data.</li>
                <li>Opt out of marketing communications.</li>
              </ul>
              <p>To exercise these rights, contact us at focusforgeapp@outlook.com.</p>
              
              <h2>6. Children’s Privacy</h2>
              <p>FocusForge is not intended for children under 13. We do not knowingly collect personal data from children.</p>
              
              <h2>7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically. Updates will be posted on this page with a new “Last updated” date.</p>
              
              <h2>8. Contact Us</h2>
              <p>For questions about this Privacy Policy or how your data is handled, contact us at:</p>
              <p>📧 focusforgeapp@outlook.com</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}