import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

// Extend the Window interface to allow window.callback
declare global {
  interface Window {
    callback?: (response: any) => void;
  }
}

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const site = useSite();
  const footer = site.footer;
  
  // Mailchimp configuration
  const MAILCHIMP_URL = import.meta.env.VITE_MAILCHIMP_URL;
  const MAILCHIMP_U = import.meta.env.VITE_MAILCHIMP_U;
  const MAILCHIMP_ID = import.meta.env.VITE_MAILCHIMP_ID;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // Clear status message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setMessageType('');

    // Check if name is provided
    if (!name.trim()) {
      setMessage('Please enter your name');
      setMessageType('error');
      setLoading(false);
      return;
    }

    // Check if email is provided
    if (!email.trim()) {
      setMessage('Please enter your email address');
      setMessageType('error');
      setLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
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
        setMessage('Thank you for subscribing to our newsletter!');
        setMessageType('success');
        setEmail('');
        setName('');
      } else {
        // Error
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
    <footer className="bg-[#FFFBF2] text-[#333] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          
          {/* Column 1: Logo and Mission */}
          <div className="lg:col-span-1 flex flex-col items-center text-center">
            <img src={mediaUrl(site.site.logo)} alt="Canopy Nepal Logo" className="w-40 mb-2 mx-auto" />
            <p className="text-base max-w-xs text-center mx-auto">
              {footer.mission}
            </p>
          </div>

          {/* Column 2: Take Action & Stay Updated */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start lg:pl-16">
            <div className="text-center lg:text-left">
              <h3 className="font-bold text-base text-primary-orange mb-3 text-center">Take Action</h3>
              <ul className="space-y-2 text-base text-center">
                {footer.takeAction.map((link) => (
                  <li key={link.id}><a href={link.href} onClick={(e) => { e.preventDefault(); navigate(link.href); }} className="hover:underline cursor-pointer">{link.label}</a></li>
                ))}
              </ul>
            </div>
            {/* Stay Updated - Hidden on md and sm, shown on lg+ */}
            <div className="mt-8 text-left w-full hidden lg:block">
              <h3 className="font-bold text-base text-primary-orange mb-3">Stay Updated</h3>
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="bg-[#F7E6C6] rounded-md px-3 py-2 text-sm placeholder-[#7a6a3a] focus:ring-2 focus:ring-primary-orange focus:outline-none w-24"
                  aria-label="Name for newsletter"
                  disabled={loading}
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="bg-[#F7E6C6] rounded-md px-3 py-2 text-sm placeholder-[#7a6a3a] focus:ring-2 focus:ring-primary-orange focus:outline-none flex-grow"
                  aria-label="Email for newsletter"
                  required
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-[#F7E6C6] text-[#333] rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 transform ${
                    loading 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-primary-cyan hover:text-white hover:scale-105 hover:shadow-md cursor-pointer'
                  }`}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {/* Status Message */}
              {message && (
                <div className={`mt-2 p-2 rounded-md text-xs ${
                  messageType === 'success' ? 'bg-green-100 text-green-800' :
                  messageType === 'error' ? 'bg-red-100 text-red-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {message}
                </div>
              )}
            </div>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start lg:pl-6">
             <div className="text-left">
                <h3 className="font-bold text-base text-primary-orange mb-3 text-center">Resources</h3>
                <ul className="space-y-2 text-base text-center">
                    {footer.resources.map((link) => (
                      <li key={link.id}><a href={link.href} onClick={(e) => { e.preventDefault(); navigate(link.href); }} className="hover:underline cursor-pointer">{link.label}</a></li>
                    ))}
                </ul>
             </div>
          </div>

          {/* Column 4: Our Office & Follow Us */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="text-left">
                <h3 className="font-bold text-base text-primary-orange mb-3 text-center">Our Office</h3>
                <div className="text-base space-y-2 text-center">
                    <a
                      href={footer.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-primary-blue"
                    >
                      {footer.officeLines.map((line) => <span key={line}>{line}<br /></span>)}
                    </a>
                    <p>{footer.phoneLabel} <a href={`tel:${footer.phone}`} className="hover:underline text-primary-blue">{footer.phone}</a></p>
                    <p>{footer.emailLabel} <a href={`mailto:${footer.email}`} className="hover:underline text-primary-blue">{footer.email}</a></p>
                </div>
            </div>
            {/* Stay Updated - Visible on md and sm, hidden on lg+ */}
            <div className="mt-8 text-left w-full lg:hidden">
              <h3 className="font-bold text-base text-primary-orange mb-3 text-center">Stay Updated</h3>
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="bg-[#F7E6C6] rounded-md px-3 py-2 text-sm placeholder-[#7a6a3a] focus:ring-2 focus:ring-primary-orange focus:outline-none w-24"
                  aria-label="Name for newsletter"
                  disabled={loading}
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="bg-[#F7E6C6] rounded-md px-3 py-2 text-sm placeholder-[#7a6a3a] focus:ring-2 focus:ring-primary-orange focus:outline-none flex-grow"
                  aria-label="Email for newsletter"
                  required
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-[#F7E6C6] text-[#333] rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 transform ${
                    loading 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-primary-cyan hover:text-white hover:scale-105 hover:shadow-md cursor-pointer'
                  }`}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {/* Status Message */}
              {message && (
                <div className={`mt-2 p-2 rounded-md text-xs ${
                  messageType === 'success' ? 'bg-green-100 text-green-800' :
                  messageType === 'error' ? 'bg-red-100 text-red-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {message}
                </div>
              )}
            </div>
            <div className="mt-8 text-left w-full">
                <h3 className="font-bold text-base text-primary-orange mb-3 text-center lg:text-left">Follow Us</h3>
                <div className="flex items-center gap-3 text-lg justify-center lg:justify-start">
                    <a href={footer.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-primary-orange p-2 rounded-md text-white hover:opacity-80 transition-opacity">
                        <Instagram size={20} />
                    </a>
                    <a href={footer.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-primary-orange p-2 rounded-md text-white hover:opacity-80 transition-opacity">
                        <Facebook size={20} />
                    </a>
                    <a href={footer.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-primary-orange p-2 rounded-md text-white hover:opacity-80 transition-opacity">
                        <Linkedin size={20} />
                    </a>
                    <a href={footer.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-primary-orange p-2 rounded-md text-white hover:opacity-80 transition-opacity">
                        <Youtube size={20} />
                    </a>
                </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar: Copyright */}
        <div className="text-center text-xl font-semibold text-primary-orange pt-6">
          <p> {site.site.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;