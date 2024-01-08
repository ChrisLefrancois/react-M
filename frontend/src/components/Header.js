import React from 'react';

const Header = () => {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-green py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-great-vibes text-green">
          La Rose des Vents
        </div>

        {/* Navigation */}
        <nav className="space-x-4">
          <a href="/" className="text-green hover:text-gray-200">Home</a>
          <button className="text-green hover:text-gray-200" onClick={scrollToAbout}>About</button>
          <a href="/classes" className="text-green hover:text-gray-200">Classes</a>
          <a href="/services" className="text-green hover:text-gray-200">Services</a>
          <a href="/contact" className="text-green hover:text-gray-200">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
