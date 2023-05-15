import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"
import logo from "../assets/images/logo.png"


export const Navbar = () => {
    return (
        <div className="">
               <nav class="navbar navbar-expand-lg nav-back">
        <div class="container-fluid">
        <a className="navbar-brand" href="/#"><img className="logo" src={logo} alt="" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon navbar-dark"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link about" aria-current="page" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link service" aria-current="page" href="#services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link portfolio" aria-current="page" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link portfolio" aria-current="page" href="#portfolio">Blog</a>
              </li>
              </ul>
            <li className="d-flex">
                <Link to="#contactme" className="nav-link nav-cta"><button className="contact-me">Be in touch</button></Link>
            </li>
            </div>
        </div>
      </nav>
</div>
    )
}