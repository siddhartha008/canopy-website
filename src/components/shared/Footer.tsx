import React from 'react';
import logo from '../../assets/logo.svg';
import { Instagram, Facebook, Linkedin, Link, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFBF2] text-[#333] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          
          {/* Column 1: Logo and Mission */}
          <div className="lg:col-span-1 flex flex-col items-center text-center">
            <img src={logo} alt="Canopy Nepal Logo" className="w-40 mb-2 mx-auto" />
            <p className="text-base max-w-xs text-center mx-auto">
              Canopy empowers marginalized students through scholarships and storytelling, ensuring access to quality education.
            </p>
          </div>

          {/* Column 2: Take Action & Stay Updated */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start lg:pl-16">
            <div className="text-left text-center">
              <h3 className="font-bold text-base text-primary-orange mb-3 text-center">Take Action</h3>
              <ul className="space-y-2 text-base text-center">
                <li><a href="#" className="hover:underline">Donate Now</a></li>
                <li><a href="#" className="hover:underline">Get Involved</a></li>
                <li><a href="#" className="hover:underline">Join the Team</a></li>
              </ul>
            </div>
            <div className="mt-8 text-left w-full">
              <h3 className="font-bold text-base text-primary-orange mb-3">Stay Updated</h3>
              <form className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="bg-[#F7E6C6] rounded-md px-3 py-2 text-sm placeholder-[#7a6a3a] focus:ring-2 focus:ring-primary-orange focus:outline-none flex-grow"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-[#F7E6C6] text-[#333] rounded-md px-4 py-2 text-sm font-semibold hover:bg-primary-orange hover:text-white transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start lg:pl-6">
             <div className="text-left">
                <h3 className="font-bold text-base text-primary-orange mb-3 text-center">Resources</h3>
                <ul className="space-y-2 text-base text-center">
                    <li><a href="#" className="hover:underline">FAQs</a></li>
                    <li><a href="#" className="hover:underline">Annual Report</a></li>
                    <li><a href="#" className="hover:underline">Policies and Guidelines</a></li>
                    <li><a href="#" className="hover:underline">Features</a></li>
                </ul>
             </div>
          </div>

          {/* Column 4: Our Office & Follow Us */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="text-left">
                <h3 className="font-bold text-base text-primary-orange mb-3 text-center">Our Office</h3>
                <div className="text-base space-y-2 text-center">
                    <a
                      href="https://www.google.com/maps/place/Canopy+Nepal/@27.7213195,85.3276936,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb18e14638255f:0x173205d784efa912!8m2!3d27.7213148!4d85.3302685!16s%2Fg%2F11f1nc4dhb?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-primary-blue"
                    >
                      Canopy Nepal<br />
                      Thirbam Sadak, Baluwatar-04<br />
                      Kathmandu 44600, Nepal
                    </a>
                    <p>Contact Number: +977-01-4541478</p>
                    <p>Email: info@canopynepal.org</p>
                </div>
            </div>
            <div className="mt-8 text-left w-full">
                <h3 className="font-bold text-base text-primary-orange mb-3">Follow Us</h3>
                <div className="flex items-center gap-3 text-lg">
                    <a href="#" aria-label="Instagram" className="bg-primary-orange p-2 rounded-md text-white hover:opacity-80 transition-opacity">
                        <Instagram size={20} />
                    </a>
                    <a href="#" aria-label="Facebook" className="bg-primary-orange p-2 rounded-md text-white hover:opacity-80 transition-opacity">
                        <Facebook size={20} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="bg-primary-orange p-2 rounded-md text-white hover:opacity-80 transition-opacity">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" aria-label="Website" className="bg-primary-orange p-2 rounded-md text-white hover:opacity-80 transition-opacity">
                        <Youtube size={20} />
                    </a>
                </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar: Copyright */}
        <div className="text-center text-xl font-semibold text-primary-orange pt-6">
          <p> © 2025 Canopy Nepal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;