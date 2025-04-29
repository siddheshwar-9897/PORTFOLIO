import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-xl font-bold text-primary"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("home");
            }}
          >
            SK
          </a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-secondary focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {["home", "about", "skills", "experience", "projects", "certifications", "contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`}
                  className="hover:text-primary transition-colors duration-300 capitalize"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden mt-4 ${mobileMenuOpen ? '' : 'hidden'}`}>
          <ul className="flex flex-col space-y-4">
            {["home", "about", "skills", "experience", "projects", "certifications", "contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`}
                  className="block hover:text-primary transition-colors duration-300 capitalize"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
