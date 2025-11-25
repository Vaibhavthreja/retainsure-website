import React, { useState } from 'react';
import { Mail, X, CheckCircle, AlertCircle } from 'lucide-react';

interface EmailGateModalProps {
  onSuccess: () => void;
}

function EmailGateModal({ onSuccess }: EmailGateModalProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreeToUpdates, setAgreeToUpdates] = useState(false);

  const blockedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];

  const validateEmail = (email: string): string | null => {
    if (!email) {
      return 'Email is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    const domain = email.split('@')[1]?.toLowerCase();
    if (blockedDomains.includes(domain)) {
      return `Please use a business email. ${domain} addresses are not allowed`;
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    if (!agreeToUpdates) {
      setError('Please agree to receive updates to continue');
      return;
    }

    setLoading(true);

    try {
      const verificationToken = crypto.randomUUID();

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/demo_access_requests`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            email: email.toLowerCase(),
            verification_token: verificationToken,
            verified: false
          })
        }
      );

      if (!response.ok) {
        if (response.status === 409) {
          setError('This email has already been submitted. Please check your inbox for the verification link.');
        } else {
          setError('Failed to submit email. Please try again.');
        }
        setLoading(false);
        return;
      }

      localStorage.setItem('demo_pending_email', email.toLowerCase());
      localStorage.setItem('demo_verification_token', verificationToken);

      setSubmitted(true);
      setLoading(false);

      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (err) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#039143' }}>
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#022610' }}>
            Access Granted!
          </h2>
          <p className="text-base" style={{ color: '#022610', opacity: 0.8 }}>
            Thank you for submitting your email. You now have access to our interactive demos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#039143' }}>
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: '#022610' }}>
              One step away
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#022610' }}>
              Business Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              placeholder="you@company.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{
                borderColor: error ? '#ef4444' : '#d1d5db',
                focusRing: '#039143'
              }}
              disabled={loading}
            />
            {error && (
              <div className="flex items-start space-x-2 mt-2">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-500">{error}</p>
              </div>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs" style={{ color: '#022610', opacity: 0.7 }}>
              <strong>Note:</strong> Please provide your business email to access our interactive demos. We collect this information to better understand our audience. Free email providers (Gmail, Yahoo, Outlook) are not accepted.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="agree-updates"
              checked={agreeToUpdates}
              onChange={(e) => {
                setAgreeToUpdates(e.target.checked);
                if (error === 'Please agree to receive updates to continue') {
                  setError('');
                }
              }}
              className="mt-1 w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-opacity-50"
              style={{ accentColor: '#039143' }}
              disabled={loading}
            />
            <label htmlFor="agree-updates" className="text-xs" style={{ color: '#022610', opacity: 0.7 }}>
              By continuing, you agree to receive updates about RetainSure. You can unsubscribe at any time.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#039143' }}
          >
            {loading ? 'Submitting...' : 'Continue to Demos'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmailGateModal;
