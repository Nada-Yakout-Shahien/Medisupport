import React from "react";
import './footer.css';
import Youtube from '../images/youtube.png';
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';


const Footer = () => {
  return (
        <div className="footer">
          <div className="sb_footer section_padding">
            <div className="sb_footer-bef">
            <div className="sb_footer-add">
                  <h4>Medisupport</h4>
                  <h6>for Health Tracker</h6>
            </div>  
              <div className="socialmedia">
                    <p><img src={Youtube} alt="" /></p>
                    <p><img src={Facebook} alt="" /></p>
                    <p><img src={Twitter} alt="" /></p>
                    <p><img src={instagram} alt="" /></p>
                    <p><img src={linkedin} alt="" /></p>
              </div>
            </div>
              <hr />
              <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                  <p>
                      CompanyName @ 202X. All rights reserved.
                  </p>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/Eleven">Eleven</a>
                    <a href="/Twelve">Twelve</a>
                    <a href="/Thirteen">Thirteen</a>
                    <a href="/Fourteen">Fourteen</a>
                    <a href="/Fifteen">Fifteen</a>
                    <a href="/Sixteen">Sixteen</a>
                </div>
              </div>
          </div>
          {/* <span>🧡</span> */}
        </div>
      
  );
};

export default Footer;
