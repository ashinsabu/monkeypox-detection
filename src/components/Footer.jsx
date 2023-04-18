import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import './Footer.css'
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import Twitter from "../assets/twitter.png";
const Footer = () => {
    return(
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-links-container">
                    <Link to="/">Home</Link>
                    <Link to="/research">Read about the Research</Link>
                    <Link to="/try/mobilenet">Try Mobilenet</Link>
                </div>
                <div className="footer-links-container">
                    <a href='https://github.com/rohanthorat27/Monkeypox-Detection' target='__blank'>View Original Research Code</a>
                    <a href='https://github.com/rohanthorat27/Monkeypox-Detection' target='__blank'>View Research Paper</a>
                </div>
                <div className="footer-links-container">
                    <h4>Connect with the team</h4>
                    <h3>Ashin Sabu</h3>
                    <span className='socials-flex'>
                        <a href='https://www.linkedin.com/in/ashin-sabu-1059a6175/' target='__blank'>
                            <img src={LinkedIn} alt='LinkedIn' />
                        </a>
                        <a href='https://github.com/ashinsabu/' target='__blank'>
                            <img src={GitHub} alt='GitHub'/>
                        </a>
                        <a href='https://twitter.com/ashinsabu3' target='__blank'>
                            <img src={Twitter} alt='Twitter'/>
                        </a>
                    </span>
                    <h3>Rohan Thorat</h3>
                    <span className='socials-flex'>
                        <a href='https://www.linkedin.com/in/rohan-thorat-b1655a253/' target='__blank'>
                            <img src={LinkedIn} alt='LinkedIn'/>
                        </a>
                        <a href='https://github.com/rohanthorat27' target='__blank'>
                            <img src={GitHub} alt='GitHub'/>
                        </a>
                    </span>
                </div>
            </div>
            <a href='https://github.com/ashinsabu/monkeypox-detection/' target='__blank'>View source code</a>
            <p id='footnote'>Made with 🤍 by Ashin Sabu, Rohan Thorat</p>
        </div>
    )
}

export default Footer;