// import React from 'react'
// import { Link } from "react-router-dom";
import "./navbar.css"
// import logo from "../assets/images/logo.png"
import logo from "../assets/images/logo.jpg"
import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery library
// import { Helmet } from 'react-helmet';
// import useBootstrapNavbar from "../hooks/useBootstrapNavbar"


export const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        $('.navbar').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
      <nav class="navbar navbar-expand-lg navbar-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="https://techmavendev.netlify.app/"><img className="logo" src={logo} alt="Logo"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="https://techmavendev.netlify.app/">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://techmavendev.netlify.app/">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://techmavendev.netlify.app/">Blog</a>
            </li>
          </ul>
          <button class="btn btn-primary">Be in touch</button>
        </div>
      </div>
      
    </nav>
    

    );
};


export default Navbar;