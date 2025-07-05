import React, { useState, useEffect } from 'react';

/**
 * Mailchimp Newsletter Section for Canopy Nepal
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to your Mailchimp account > Audience > Signup forms > Embedded forms
 * 2. Select "Naked" form format
 * 3. Copy the form action URL - it looks like: https://canopynepal.us1.list-manage.com/subscribe/post?u=12345abc&id=67890def
 * 4. Extract the 'u' and 'id' values from the URL and add them below
 */

// Extend the Window interface to allow window.callback
declare global {
  interface Window {
    callback?: (response: any) => void;
  }
}

const MailchimpNewsletter = () => {
  // Your actual Mailchimp values from the embedded form
  const MAILCHIMP_URL = import.meta.env.VITE_MAILCHIMP_URL;
  const MAILCHIMP_U = import.meta.env.VITE_MAILCHIMP_U; // Your unique account ID from the form action URL
  const MAILCHIMP_ID = import.meta.env.VITE_MAILCHIMP_ID; // Your audience/list ID from the form action URL

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // Clear status message after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('sending');
    setMessage('');
    setMessageType('');

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      setMessageType('error');
      setLoading(false);
      return;
    }

    // Create URL with query parameters
    const url = new URL(MAILCHIMP_URL);
    url.searchParams.append('u', MAILCHIMP_U);
    url.searchParams.append('id', MAILCHIMP_ID);
    url.searchParams.append('EMAIL', email);
    if (name) url.searchParams.append('FNAME', name);
    url.searchParams.append('f_id', '00feaae6f0'); // Form ID from your embedded form
    url.searchParams.append('c', 'callback'); // Required for JSONP

    // Create script element for JSONP request
    const script = document.createElement('script');
    script.src = url.toString();
    script.id = 'mailchimp-jsonp';
    
    // Define the callback function
    window.callback = (response: any) => {
      delete window.callback;
      document.body.removeChild(script);
      
      setLoading(false);
      
      if (response.result === 'success') {
        // Success
        setStatus('success');
        setMessage('Thank you for subscribing to our newsletter!');
        setMessageType('success');
        setEmail('');
        setName('');
      } else {
        // Error
        setStatus('error');
        
        // Check if it's already subscribed message
        if (response.msg.includes('already subscribed')) {
          setMessage('You\'re already subscribed to our newsletter.');
          setMessageType('info');
        } else {
          setMessage(response.msg || 'An error occurred. Please try again.');
          setMessageType('error');
        }
      }
    };

    // Append script to the document
    document.body.appendChild(script);
  };

  return (
    <section className="bg-secondary-gray py-16 px-6 rounded-2xl">
      <div className="max-w-4xl mx-auto">
        {/* Newsletter Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-red mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Subscribe to our newsletter for updates on student stories, impact reports, 
            and opportunities to support education in Nepal.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Name Field */}
            <div className="flex-1">
              <label htmlFor="newsletter-name" className="sr-only">First Name</label>
              <input
                id="newsletter-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your first name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                disabled={loading}
              />
            </div>
            
            {/* Email Field */}
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
                disabled={loading}
              />
            </div>
            
            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`px-8 py-3 rounded-lg font-medium text-white transition-colors duration-300 ${
                loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-red-600 hover:bg-primary-cyan hover:shadow-md'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing
                </span>
              ) : "Subscribe"}
            </button>
          </div>
          
          {/* Status Message */}
          {message && (
            <div className={`mt-4 p-3 rounded-lg ${
              messageType === 'success' ? 'bg-green-100 text-green-800' :
              messageType === 'error' ? 'bg-red-100 text-red-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {message}
            </div>
          )}
          
          {/* Privacy Notice */}
          <div className="text-center text-sm text-gray-500 mt-6">
            We respect your privacy. Your information will never be shared with third parties.
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default MailchimpNewsletter;