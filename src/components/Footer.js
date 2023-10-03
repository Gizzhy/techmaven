import React from "react";
// import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="foots">
      <footer className="container">
        <div className="row">
          <div className="col-lg-4 foott">
            <p className="footb">Products</p>
            <ul className="no-bullets">
              <a href="/portfolio">
                <li className="footy">Web Development</li>
              </a>
              <a href="/portfolio">
                <li className="footy">Mobile App Development</li>
              </a>
              <a href="/portfolio">
                <li className="footy">Web3</li>
              </a>
              <a href="/portfolio">
                <li className="footy">Designs</li>
              </a>
            </ul>
          </div>
          <div className="col-lg-4 foott">
            <p className="footb">Company</p>
            <ul className="no-bullets">
              <a href="/about">
                <li className="footy">About</li>
              </a>
              <a href="/contact">
                <li className="footy">Contact</li>
              </a>
              
             
            </ul>
          </div>
          {/* <div className="col-lg-3 foott">
            <p className="footb">Legal</p>
            <ul className="no-bullets">
              <a href="/terms">
                <li className="footy">Terms</li>
              </a>
              <a href="/privacy">
                <li className="footy">Privacy</li>
              </a>
            </ul>
          </div> */}
          <div className="col-lg-4 foott">
            <p className="">Lagos, Nigeria.</p>
            <ul className="no-bullets">
              <a href="mailto:hello@codesystic.dev">
                <li className="footy">hello@codesystic.dev</li>
              </a>
              <a href="https://wa.me/+234701019078s3">
                <li className="footy">+2347010190783</li>
              </a>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
