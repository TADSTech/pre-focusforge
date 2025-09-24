import './Hero.css';
import Logo from '/FocusForgeFullbg.svg';
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Hero() {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [statusType, setStatusType] = useState<'success' | 'error' | 'info' | ''>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('Please enter an email to start forging.');
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
          setStatus('This email is already on the waitlist. You’re ready to forge!');
          setStatusType('success');
        } else if (error.code === '22007' || error.message.includes('invalid')) {
          setStatus('Please enter a valid email address.');
          setStatusType('error');
        } else {
          setStatus('Something went wrong. Please try again.');
          setStatusType('error');
        }
      } else {
        setStatus('Thanks for joining the waitlist! Your journey begins now.');
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
      className="hero container"
      id="hero"
      aria-labelledby="hero-title"
      aria-describedby="hero-subtitle"
    >
      <div className="hero-content">
        <div className="hero-logo-wrapper">
          {/* ✅ alt text optimized for branding + keywords */}
          <img
            src={Logo}
            alt="FocusForge Logo - Productivity and Habit Tracking"
            className="hero-logo"
            width="200"
            height="200"
          />
        </div>

        <div className="hero-text-content">
          {/* ✅ h1 is keyword-rich */}
          <h1 id="hero-title" className="hero-title">
            Forge Your Focus – Build Habits That Last
          </h1>

          {/* ✅ strong subtitle with keywords */}
          <p id="hero-subtitle" className="hero-subtitle">
            FocusForge helps you <strong>track your habits</strong>, 
            <strong> stay consistent</strong>, and 
            <strong> achieve your goals</strong> — one day at a time.
          </p>

          {/* ✅ form is semantic and labeled */}
          <form className="hero-form" onSubmit={handleSubmit}>
            <label htmlFor="waitlist-email" className="sr-only">
              Enter your email to join the FocusForge waitlist
            </label>
            <input
              id="waitlist-email"
              type="email"
              placeholder="Enter your email to start forging"
              className="hero-input"
              aria-label="Email for waitlist"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />
            <button type="submit" className="hero-button">
              Join the Waitlist
            </button>
          </form>

          <p className="hero-motivation">
            Start your journey with <em>habit tracking</em> and 
            <em> personal growth</em>. Forge focus. Build resilience. Win daily.
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
      </div>
    </section>
  );
}
