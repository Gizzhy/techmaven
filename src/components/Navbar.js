// import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css";
// import logo from "../assets/images/logo.png"
import logo2 from "../assets/images/logo2.png";
import React, { useEffect } from "react";
import $ from "jquery"; // Import jQuery library
// import { Helmet } from 'react-helmet';
// import useBootstrapNavbar from "../hooks/useBootstrapNavbar"

export const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        $(".navbar").addClass("scrolled");
      } else {
        $(".navbar").removeClass("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img className="logo" src={logo2} alt="Logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div className="nav-things">
            <ul class="navbar-nav">
              <li className="nav-item nav-link">
                <Link className="about" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item nav-link">
              <a href="https://gideon-dev.netlify.app/#portfolio">Services</a>
                {/* <Link className="services" to="#services">
                  Services
                </Link> */}
              </li>
              <li className="nav-item nav-link">
                <Link className="portfolio" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item nav-link">
                <a href="skillset-codesystic.pdf" className="blog">
                  Skillset
                </a>
              </li>
            </ul>
          </div>
          <a href="/contact">
            <button class="in-touch">Be in touch</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
