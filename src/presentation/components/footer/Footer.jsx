import "./Footer.css";

import logo from "./../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <h2>Address</h2>
              <p>1 U-Thong nok Road, Dusit, Bangkok 10300 Thailand</p>
              <div className="footer-contact-item">
                <h2>Contact</h2>
                <h4>Pharthiwath(Win)</h4>
                <p>s65122250031@ssru.ac.th</p>
                <h4>Tadsanai(Dew)</h4>
                <p>s65122250037@ssru.ac.th</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
