import React, { useEffect, useState } from "react";
import "../styles/Navigation.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiMenu, FiX } from "react-icons/fi"; // Feather icons

const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">GSN</h1>
        </a>

        <nav id="navmenu" className={`navmenu ${mobileNavOpen ? "mobile-nav-active" : ""}`}>
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#joinus">Join Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="mobile-nav-toggle d-xl-none" onClick={toggleMobileNav}>
           {mobileNavOpen ? <FiX /> : <FiMenu />}
          </div>
        </nav>

        <a className="btn-getstarted" href="#contact">Get Started</a>
      </div>
    </header>
  );
};

export default Navigation;
