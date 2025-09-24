import './CTA.css';
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function CTA() {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [statusType, setStatusType] = useState<'success' | 'error' | 'info' | ''>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email input
    if (!email.trim()) {
      setStatus('Please enter an email to join.');
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
          setStatus('This email is already on the waitlist. You’re set!');
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
        setStatus('Thanks for joining the waitlist! Forge ahead.');
        setStatusType('success');
        setEmail('');
      }
    } catch (unexpectedError) {
      setStatus('An unexpected error occurred. Please try again.');
      setStatusType('error');
      console.log(unexpectedError)
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
    <section id="cta" className="cta container">
      <div className="cta-content">
        <h2 className="cta-title">Ready to Forge Your Focus?</h2>
        <p className="cta-subtitle">
          Take the first step to unstoppable habits. Join our waitlist now and be the first to transform your productivity.
        </p>
        <form className="cta-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email to start"
            className="cta-input"
            aria-label="Email for waitlist"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="cta-button">Join the Waitlist</button>
        </form>
        <p className="cta-motivation">
          Your journey to consistency starts here. Act now!
        </p>
        {status && (
          <div className={`status-bar status-${statusType}`}>
            <p className="status-text">{status}</p>
          </div>
        )}
      </div>
    </section>
  );
}