import React from 'react'
// import { Link } from "react-router-dom";
import "./footer.css"

export const Footer = () => {
    return (
        <div className='foots'>
        <footer className='container'>
            <div className='row'>
                <div className='col-lg-3 foott'>
                   <p className='footb'>Products</p>
                   <ul className="no-bullets">
                    <a href="https://gideon-dev.netlify.app/"><li className="footy">Web Development</li></a>
                    <a href="https://gideon-dev.netlify.app/"><li className="footy">Mobile App Development</li></a>
                    <a href="https://gideon-dev.netlify.app/"><li className="footy">Web3</li></a>
                    <a href="https://gideon-dev.netlify.app/"><li className="footy">Designs</li></a>
                  </ul>
                </div>
                <div className='col-lg-3 foott'>
                   <p className='footb'>Company</p>
                   <ul className="no-bullets">
                    <a href="https://gideon-dev.netlify.app/"><li className="footy">About</li></a>
                    <a href="https://gideon-dev.netlify.app/"><li className="footy">Contact</li></a>
                    <a href="https://gideon-dev.netlify.app/"><li className="footy">FAQs</li></a>
                    <a href="https://gideon-dev.netlify.app/"><li className="footy">Blog</li></a>
                  </ul>
                </div>
                <div className='col-lg-3 foott'>
                   <p className='footb'>Legal</p>
                   <ul className="no-bullets">
                    <a href="https://gideon-dev.netlify.app/"><li className="footy">Terms</li></a>
                    <a href="https://gideon-dev.netlify.app/"><li className="footy">Privacy</li></a>
                  </ul>
                </div>
                <div className='col-lg-3 foott'>
                   <p className=''>Lagos, Nigeria.</p>
                   <ul className="no-bullets">
                    <a href="gideonakinlotan16@gmail.com"><li className="footy">gideonakinlotan16@gmail.com</li></a>
                    <a href="https://wa.me/+234701019073"><li className="footy">+234701019073</li></a>
                  </ul>
                </div>
            
            </div>

        </footer>
        </div>
        
    )
}