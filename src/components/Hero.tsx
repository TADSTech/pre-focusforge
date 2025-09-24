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

    // Validate email input
    if (!email.trim()) {
      setStatus('Please enter an email to start forging.');
      setStatusType('error');
      return;
    }

    // Check if Supabase client is initialized
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
        // Handle specific Supabase errors
        if (error.code === '23505') {
          // Duplicate email (unique constraint violation)
          setStatus('This email is already on the waitlist. You’re ready to forge!');
          setStatusType('success');
        } else if (error.code === '22007' || error.message.includes('invalid')) {
          // Invalid email format
          setStatus('Please enter a valid email address.');
          setStatusType('error');
        } else {
          // Generic error
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

  // Auto-dismiss status message after 3 seconds
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
    <section className="hero container">
      <div className="hero-content">
        <div className="hero-logo-wrapper">
          <img src={Logo} alt="FocusForge Logo" className="hero-logo" />
        </div>
        <div className="hero-text-content">
          <h1 className="hero-title">Forge Your Focus</h1>
          <p className="hero-subtitle">
            Build unstoppable habits. Track your progress. Unleash your potential.
          </p>
          <form className="hero-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email to start forging"
              className="hero-input"
              aria-label="Email for waitlist"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="hero-button">
              Join the Waitlist
            </button>
          </form>
          <p className="hero-motivation">
            Track. Grow. Stay consistent. Your journey starts now.
          </p>
          {status && (
            <div className={`status-bar status-${statusType}`}>
              <p className="status-text">{status}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}