import React, { useState } from "react"; 
import "./navbarr.css";

 
export const Navbarr = () => { 
 const [isOpen, setIsOpen] = useState(false); 
 
 const toggleMobileMenu = () => { 
  setIsOpen(!isOpen); 
 }; 
 
 return ( 
  <> 
   <nav className={`nav-container ${isOpen ? "openNav" : ""}`}> 
    <a className="a1" href="https://apexpay.org/index.html"> 
     <img 
      className="brand-logo" 
      alt="apexpay logo" 
      src="https://apexpay.org/static/svg/apexpay-logo.svg" 
     /> 
    </a> 
    <div 
     className={`nav-icon ${isOpen ? "nav-anim" : ""}`} 
     onClick={toggleMobileMenu} 
    > 
     <div className="bar1" /> 
     <div className="bar2" /> 
    </div> 
    <ul className={`nav-list ${isOpen ? "mobile-nav" : ""}`}> 
     <li className="nav-item nav-link"> 
      <a href="https://apexpay.org/#sectionFeatures">Features</a> 
     </li> 
     <li className="nav-item nav-link"> 
      <a href="https://apexpay.org/faq.html">FAQ</a> 
     </li> 
     <li className="nav-item nav-link"> 
      <a href="https://apexpay.org/about.html">About Us</a> 
     </li> 
     <li className="nav-item nav-link"> 
      <a 
       href="https://www.apexpay.org/posts" 
       rel="noopener" 
       target="_blank" 
      > 
       Blog 
      </a> 
     </li> 
    </ul> 
    <div className="auth-btns"> 
     <a 
      className="auth-btn d-none" 
      href="https://dash.apexpay.org/login" 
      target="_blank" 
     > 
      Login 
     </a> 
     <a 
      className="auth-btn auth-btn2" 
      href="https://dash.apexpay.org/register" 
      target="_blank" 
     > 
      Sign Up 
     </a> 
    </div> 
   </nav> 
  </> 
 ); 
}; 
 
export default Navbarr;