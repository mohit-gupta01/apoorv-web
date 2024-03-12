import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="main">
        <div className="footer">
          <div className="bubbles">
            {Array.from({ length: 128 }, (_, i) => (
              <div
                className="bubble"
                style={{
                  '--size': `${2 + Math.random() * 4}rem`,
                  '--distance': `${6 + Math.random() * 4}rem`,
                  '--position': `${-5 + Math.random() * 110}%`,
                  '--time': `${2 + Math.random() * 2}s`,
                  '--delay': `${-1 * (2 + Math.random() * 2)}s`,
                }}
              />
            ))}
          </div>
          <div className="footer_content">
            <div className=''>
              <div className=''>
                <b>Eldew</b>
                <Link to="#">Secuce</Link>
                <Link to="#">Drupand</Link>
                <Link to="#">Oceash</Link>
                <Link to="#">Ugefe</Link>
                <Link to="#">Babed</Link>
              </div>
              <div>
                <b>Spotha</b>
                <Link to="#">Miskasa</Link>
                <Link to="#">Agithe</Link>
                <Link to="#">Scesha</Link>
                <Link to="#">Lulle</Link>
              </div>
              <div>
                <b>Chashakib</b>
                <Link to="#">Chogauw</Link>
                <Link to="#">Phachuled</Link>
                <Link to="#">Tiebeft</Link>
                <Link to="#">Ocid</Link>
                <Link to="#">Izom</Link>
                <Link to="#">Ort</Link>
              </div>
              <div>
                <b>Athod</b>
                <Link to="#">Pamuz</Link>
                <Link to="#">Vapert</Link>
                <Link to="#">Neesk</Link>
                <Link to="#">Omemanen</Link>
              </div>
            </div>
            <div>
              <Link
                className="image"
                to="#"
                style={{ backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")' }}
              />
              <p>©2019 Not Really</p>
            </div>
          </div>
        </div>
      </div>
      <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
            {/* feComposite(in="SourceGraphic" in2="blob" operator="atop") //After reviewing this after years I can't remember why I added this but it isn't necessary for the blob effect */}
          </filter>
        </defs>
      </svg>
    </>
  )
}

export default Footer;