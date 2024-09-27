import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSocialMenuOpen, setSocialMenuOpen] = useState(false);

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'About Me', href: '#about' },
    { name: 'Contact Me', href: '#contact' },
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/ayushman-rana-1478b32a5/',
      icon: <FaLinkedin size={20} />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/ranaayushman',
      icon: <FaGithub size={20} />,
      label: 'GitHub',
    },
    {
      href: 'https://x.com/AyushmanRa90067',
      icon: <FaTwitter size={20} />,
      label: 'Twitter',
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSocialMenu = () => {
    setSocialMenuOpen(!isSocialMenuOpen);
  };

  return (
    <header className="bg-custom-purple text-custom-text">
      <nav className="flex justify-between p-6 px-12 items-center">
        <a href="/">
          <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#5A639C] from-3% to-[#37B7C3] to-77% hover:from-pink-600 hover:to-[#1c6065] transition duration-300 font-semibold">
            Portfolio
          </div>
        </a>
        <div className="hidden md:flex space-x-6 gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-xl hover:text-slate-200 transition duration-300"
            >
              {item.name}
            </a>
          ))}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-start p-6 bg-custom-purple border-t border-t-gray-300"
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-xl hover:text-slate-200 transition duration-300 my-2"
              onClick={toggleMobileMenu}
            >
              {item.name}
            </a>
          ))}
          <button
            className="text-xl hover:text-slate-200 transition duration-300 my-2"
            onClick={toggleSocialMenu}
          >
            Social Media
          </button>
          {isSocialMenuOpen && (
            <motion.div
              initial={{ opacity: 0, marginTop: 0 }}
              animate={{ opacity: 1, marginTop: 10 }}
              exit={{ opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col space-y-2 pl-4"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center hover:underline transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </a>
              ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
