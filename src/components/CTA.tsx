import './CTA.css';
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function CTA() {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [statusType, setStatusType] = useState<'success' | 'error' | 'info' | ''>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('Please enter an email to join.');
      setStatusType('error');
      return;
    }

    if (!supabase) {
      setStatus('Unable to connect to the server. Try again later.');
      setStatusType('error');
      return;
    }

    setStatus('Submitting...');
    setStatusType('info');

    try {
      const { error } = await supabase
        .from('waitlist_emails')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setStatus('This email is already on the waitlist. You’re set!');
          setStatusType('success');
        } else if (error.code === '22007' || error.message.includes('invalid')) {
          setStatus('Please enter a valid email address.');
          setStatusType('error');
        } else {
          setStatus('Something went wrong. Please try again.');
          setStatusType('error');
        }
      } else {
        setStatus('Thanks for joining the FocusForge waitlist! 🚀');
        setStatusType('success');
        setEmail('');
      }
    } catch (unexpectedError) {
      setStatus('An unexpected error occurred. Please try again.');
      setStatusType('error');
      console.error(unexpectedError);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
        setStatusType('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status, statusType]);

  return (
    <section
      id="cta"
      className="cta container"
      role="region"
      aria-labelledby="cta-title"
      aria-describedby="cta-subtitle"
    >
      <div className="cta-content">
        <h2 id="cta-title" className="cta-title">
          Ready to Build Lasting Habits with FocusForge?
        </h2>


        <p id="cta-subtitle" className="cta-subtitle">
          Join our exclusive waitlist and be the first to access{" "}
          <strong>habit tracking tools</strong> that boost your{" "}
          <em>focus, consistency, and productivity</em>.
        </p>

        <form className="cta-form" onSubmit={handleSubmit}>
          <label htmlFor="email-input" className="sr-only">
            Enter your email to join the FocusForge waitlist
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="Enter your email address"
            className="cta-input"
            aria-label="Email address for waitlist signup"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="cta-button"
            aria-label="Join the FocusForge waitlist"
          >
            Join the Waitlist
          </button>
        </form>

        <p className="cta-motivation">
          Over <strong>1,000+ students and creators</strong> are already forging
          their focus. Don’t miss early access!
        </p>

        {status && (
          <div
            className={`status-bar status-${statusType}`}
            role="status"
            aria-live="polite"
          >
            <p className="status-text">{status}</p>
          </div>
        )}
      </div>
    </section>
  );
}
