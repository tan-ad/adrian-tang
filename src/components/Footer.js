import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* <p classname="footer-item">
                    Email: adrian.s.tang@gmail.com
                </p> */}
                <li classname="footer-item">
                    GitHub:
                    &nbsp;
                    <a href="https://github.com/tan-ad" target="_blank">tan-ad</a>
                </li>
                <li classname="footer-item">
                    LinkedIn:
                    &nbsp;
                    <a href="https://www.linkedin.com/in/adrian-tang-0788aa233/" target="_blank">Adrian Tang</a>
                </li>
            </div>
        </footer>
    );
}

export default Footer;
