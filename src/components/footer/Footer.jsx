import React from 'react';
import logo from '../images/logo-white.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="footer-left col-7">
            <div className="footer-logo">
              <a href="#"><img src={logo} title="" alt="sorry" /></a>
            </div>
            <p>
              PO Box 84008<br />
              Lincoln, NE 68501
            </p>
            <p><a href="tel:(866) 376-1669">(866) 376-1669</a></p>
          </div>
          <div className="footer-links col-3">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="https://ibexis.com/about-us">Our Company</a></li>
              <li><a href="https://ibexis.com/myga-plus">MYGA Plus™</a></li>
              <li><a href="https://ibexis.com/fia-plus">FIA Plus™</a></li>
              <li><a href="https://ibexis.com/contact">Contact</a></li>
              <li><a href="https://ibexis.com/privacy">Privacy Policy</a></li>
              <li><a href="https://ibexis.com/disclaimers">Disclaimers</a></li>
              <li><a href="https://ibexis.com/disclosures">Disclosures</a></li>
            </ul>
          </div>
          <div className="footer-right col-2">
            <div className="footer-right-border"></div>
            <p>Products are issued by Ibexis Life & Annuity Insurance Company™.</p>
            <p>Product and feature availability may vary by state and broker/dealer.</p>
            <p>Ⓒ 2024. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
