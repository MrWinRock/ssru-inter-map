import logo from "./../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footer flex flex-col items-center justify-center bg-[#f2f2f2] p-5 text-center">
      <div className="footer-wrapper w-full max-w-screen-lg">
        <div className="footer-container flex flex-col items-center">
          <div className="footer-logo mb-4">
            <img src={logo} alt="Logo" className="w-16 h-16 mb-2 mx-auto" />
          </div>
          <div className="footer-contact text-sm text-[#333]">
            <div className="footer-contact-item mb-4">
              <h2 className="text-lg font-semibold">Address</h2>
              <p>1 U-Thong nok Road, Dusit, Bangkok 10300 Thailand</p>
            </div>
            <div className="footer-contact-item">
              <h2 className="text-lg font-semibold">Contact</h2>
              <div className="mt-2">
                <h4 className="font-medium">Pharthiwath (Win)</h4>
                <p>s65122250031@ssru.ac.th</p>
              </div>
              <div className="mt-2">
                <h4 className="font-medium">Tadsanai (Dew)</h4>
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
