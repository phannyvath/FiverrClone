import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const categories = [
    { name: 'Graphics & Design', path: '/services?category=graphics-design' },
    { name: 'Digital Marketing', path: '/services?category=digital-marketing' },
    { name: 'Writing & Translation', path: '/services?category=writing-translation' },
    { name: 'Video & Animation', path: '/services?category=video-animation' },
    { name: 'Programming & Tech', path: '/services?category=programming-tech' },
  ];

  const aboutLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press & News', path: '/press' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const supportLinks = [
    { name: 'Help & Support', path: '/support' },
    { name: 'Trust & Safety', path: '/trust' },
    { name: 'Selling on FiverrClone', path: '/selling' },
    { name: 'Buying on FiverrClone', path: '/buying' },
  ];

  const communityLinks = [
    { name: 'Community Standards', path: '/community' },
    { name: 'Forum', path: '/forum' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
    { name: 'Influencers', path: '/influencers' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link to={category.path} className="text-gray-400 hover:text-white transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Mobile Apps</h4>
              <div className="flex space-x-2">
                <a href="#" className="bg-black text-white px-3 py-2 rounded-md text-xs flex items-center">
                  <span className="mr-1">App Store</span>
                </a>
                <a href="#" className="bg-black text-white px-3 py-2 rounded-md text-xs flex items-center">
                  <span className="mr-1">Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="text-2xl font-bold text-white">
                FiverrClone
              </Link>
              <p className="text-gray-400 text-sm mt-1">
                &copy; {currentYear} FiverrClone Inc.
              </p>
            </div>
            <div className="flex items-center">
              <select className="bg-gray-800 text-gray-400 rounded-md px-2 py-1 text-sm mr-4">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
              <select className="bg-gray-800 text-gray-400 rounded-md px-2 py-1 text-sm">
                <option value="usd">$ USD</option>
                <option value="eur">€ EUR</option>
                <option value="gbp">£ GBP</option>
                <option value="cad">$ CAD</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;