import { useTranslation } from 'react-i18next';
import logo from "./../../assets/images/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div
      className="footer d-flex flex-column align-items-center justify-content-center bg-light mt-5 p-3 text-center"
      style={{ background: "#F2F2F2" }}
    >
      <div className="footer-wrapper w-100 container-lg">
        <div className="footer-container d-flex flex-column align-items-center">
          <div className="footer-logo mb-3">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "50px", height: "50px" }}
              className="mb-2 mx-auto"
            />
          </div>
          <div className="footer-contact small text-dark">
            <div className="footer-contact-item mb-3">
              <h2 className="h5 fw-semibold">
                {t('university_name')}
              </h2>
              <p>{t('university_address')}</p>
            </div>
            <div className="footer-contact-item">
              <h2 className="h5 fw-semibold">{t('contact')}</h2>
              <div className="mt-2">
                <h4 className="fw-medium">Pharthiwath (Win)</h4>
                <p>s65122250031@ssru.ac.th</p>
              </div>
              <div className="mt-2">
                <h4 className="fw-medium">Tadsanai (Dew)</h4>
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