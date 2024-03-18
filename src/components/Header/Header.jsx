import { logo, logo_secondary } from "../../assets";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    console.log("toggleOffcanvas");
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };
  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };


  return (
    <>
      <header className={`header_area ${isOffcanvasOpen ? "open" : ""}`}>
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/" className="a-link">
              <img
                alt="Site Logo"
                width="33"
                height="100"
                className="logo-primary"
                src={logo}
              />
              <img
                alt="Site Logo"
                className="logo-secondary w-[30vw] md:w-[200px]"
                src={logo_secondary}
              />
            </Link>
          </div>
          <div className="header__nav-icon">
            <button id="open_offcanvas" onClick={toggleOffcanvas}>
              <img
                alt="Menubar Icon"
                width="22"
                height="22"
                decoding="async"
                data-nimg="1"
                srcSet="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmenu-white.5dba0f21.png&w=32&q=75"
                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmenu-white.5dba0f21.png&w=32&q=75"
              />
            </button>
          </div>
          <div className="header__support">
            <p>
              Contact US <Link to="#" className="a-link">+91 8247340743</Link>
            </p>
          </div>
        </div>
        <div className={`offcanvas__area ${isOffcanvasOpen ? "open" : ""}`}>
          <div className="offcanvas__body">
            <div className="offcanvas__left">
              <div className="offcanvas__logo">
                <Link to="/" className="a-link" onClick={toggleOffcanvas}>
                  <img
                    alt="Offcanvas Logo"
                    src={logo_secondary}
                    className="w-[15rem]"
                    style={{
                      color: "transparent",
                      height: "auto",
                    }}
                  />
                </Link>
              </div>
              <div className="offcanvas__social">
                <h3 className="social-title">Follow Us</h3>
                <ul>
                  <li>
                    <Link to="https://www.instagram.com/apoorv_iiitk/" className="a-link">Instagram</Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/company/92505348/admin/" className="a-link">LinkedIn</Link>
                  </li>
                </ul>
              </div>
              <div className="offcanvas__links" style={{opacity: 0}}>
                <ul>
                  <li>
                    <Link to="#" className="a-link">About</Link>
                  </li>
                  <li>
                    <Link to="#" className="a-link">contact</Link>
                  </li>
                  <li>
                    <Link to="#" className="a-link">Career</Link>
                  </li>
                  <li>
                    <Link to="#" className="a-link">blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="offcanvas__mid">
              <div className="offcanvas__menu-wrapper">
                <nav className="offcanvas__menu">
                  <ul className="menu-anim title">
                    <li>
                      <div className="header_title">
                        <Link to="/" className="a-link" onClick={toggleOffcanvas}>
                          <div className="menu-text">
                            <span>H</span>
                            <span>O</span>
                            <span>M</span>
                            <span>E</span>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="header_title">
                        <Link to="/events" className="a-link" onClick={toggleOffcanvas}>
                          <div className="menu-text">
                            <span>E</span>
                            <span>V</span>
                            <span>E</span>
                            <span>N</span>
                            <span>T</span>
                            <span>S</span>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="header_title d-flex">
                        <Link to="/sponsor" className="a-link" onClick={toggleOffcanvas}>
                          <div className="menu-text">
                            <span>S</span>
                            <span>P</span>
                            <span>O</span>
                            <span>N</span>
                            <span>S</span>
                            <span>O</span>
                            <span>R</span>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="header_title">
                        <Link to="/team" className="a-link" onClick={toggleOffcanvas}>
                          <div className="menu-text">
                            <span>T</span>
                            <span>E</span>
                            <span>A</span>
                            <span>M</span>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="header_title">
                        <Link to="/developers" className="a-link" onClick={toggleOffcanvas}>
                          <div className="menu-text">
                            <span>D</span>
                            <span>E</span>
                            <span>V</span>
                            <span>E</span>
                            <span>L</span>
                            <span>O</span>
                            <span>P</span>
                            <span>E</span>
                            <span>R</span>
                            <span>S</span>
                          </div>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="offcanvas__right">
              <div className="offcanvas__search">
              </div>
              <div className="offcanvas__contact">
                <h3>Get in touch</h3>
                <ul>
                  <li>
                    <Link to="#" className="a-link">+91 8247340743</Link>
                  </li>
                  <li>
                    <Link to="#" className="a-link">apoorv@iiitkottayam.ac.in</Link>
                  </li>
                  <li>IIIT Kottayam</li>
                </ul>
              </div>
              <img
                alt="shape"
                width="189"
                height="94"
                decoding="async"
                data-nimg="1"
                className="shape-1"
                srcSet="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.9b9acc5a.png&w=384&q=75"
                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.9b9acc5a.png&w=384&q=75"
                style={{ color: "transparent", width: "auto", height: "auto" }}
              />
              <img
                alt="shape"
                width="81"
                height="80"
                decoding="async"
                data-nimg="1"
                className="shape-2"
                srcSet="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.1566e1c7.png&w=256&q=75"
                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.1566e1c7.png&w=256&q=75"
                style={{ color: "transparent", width: "auto", height: "auto" }}
              />
            </div>
            <div className="offcanvas__close">
              <button type="button" onClick={closeOffcanvas}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="xmark"
                  className="svg-inline--fa fa-xmark "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;