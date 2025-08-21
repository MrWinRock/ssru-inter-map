import { useTranslation } from 'react-i18next';
import logo from "./../../assets/images/logo.png";
import github_logo from "./../../assets/images/github-icon.svg";

import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div
      className="footer"
    >
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-logo">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div className="footer-content">
            <div className="footer-content-item">
              <h2 className="footer-university">
                {t('university_name')}
              </h2>
              <p>{t('university_address')}</p>
            </div>
          </div>
          <div className='footer-links'>
            <a href="https://github.com/MrWinRock/ssru-inter-map" target="_blank" rel="noopener noreferrer nofollow">
              <img src={github_logo} alt="GitHub Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;