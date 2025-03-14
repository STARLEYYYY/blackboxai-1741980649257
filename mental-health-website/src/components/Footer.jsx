import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mental Health Foundation</h3>
            <p className="text-gray-400 mb-4">
              Working towards good mental health for all.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/mentalhealthfoundation" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/mentalhealthfoundation" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/mentalhealthfoundation" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/company/mentalhealthfoundation" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about-us" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/our-work" className="text-gray-400 hover:text-white">Our Work</a></li>
              <li><a href="/news-media" className="text-gray-400 hover:text-white">News & Media</a></li>
              <li><a href="/get-involved" className="text-gray-400 hover:text-white">Get Involved</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/mental-health-az" className="text-gray-400 hover:text-white">Mental Health A-Z</a></li>
              <li><a href="/support-groups" className="text-gray-400 hover:text-white">Support Groups</a></li>
              <li><a href="/publications" className="text-gray-400 hover:text-white">Publications</a></li>
              <li><a href="/research" className="text-gray-400 hover:text-white">Research</a></li>
              <li><a href="/help-support" className="text-gray-400 hover:text-white">Help & Support</a></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and resources.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
              />
              <button className="w-full bg-primary text-white py-2 rounded hover:bg-accent transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 Mental Health Foundation. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="/terms-of-use" className="text-gray-400 hover:text-white text-sm">Terms of Use</a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
