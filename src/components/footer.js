import Link from "next/link";
import Image from "next/image";
// import call from "../images/call.png";
// import visa from "../images/visa.png";

const Footer = () => {
  const call = "/images/call.png";
const visa = "/images/visa.png";
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="footer-logo">
                <Link href="/" className="navbar-brand">
                  BEER GOGGLES DISTRO
                </Link>
                <div className="flexx">
                  <Image src={call} />
                  <h5>
                    <span>Got Question? Call us 24/7!</span>
                    (123) 8001-8588, (321) 541 657
                  </h5>
                </div>

                <div className="footer-contact-info">
                  <h5>Contact info:</h5>
                  <p>The standard Lorem Ipsum paassage, used since</p>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-card">
                    <h5>COMPANY</h5>
                    <ul>
                      <li>
                        <Link href="/">About Us</Link>
                      </li>
                      <li>
                        <Link href="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/">Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link href="/">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-card">
                    <h5>COMPANY</h5>
                    <ul>
                      <li>
                        <Link href="/">Registration</Link>
                      </li>
                      <li>
                        <Link href="/">My Account</Link>
                      </li>
                      <li>
                        <Link href="/">My Orders</Link>
                      </li>
                      <li>
                        <Link href="/">Recover Password</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-card">
                    <h5>COMPANY</h5>
                    <ul>
                      <li>
                        <Link href="/">My Account</Link>
                      </li>
                      <li>
                        <Link href="/">Track your Order</Link>
                      </li>
                      <li>
                        <Link href="/">Customer Service</Link>
                      </li>
                      <li>
                        <Link href="/">Returns/Exchange</Link>
                      </li>
                      <li>
                        <Link href="/">FAQs</Link>
                      </li>
                      <li>
                        <Link href="/">Product Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="container d-flex justify-content-between">
          <p>© 2024 Beer Goggles Distro - All Rights Reserved</p>
          <Image src={visa} />
        </div>
      </div>
    </>
  );
};

export default Footer;
