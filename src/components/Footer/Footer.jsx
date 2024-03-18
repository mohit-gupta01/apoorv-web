import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import { logo_black } from '../../assets';

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
          <div className="footer_content flex flex-col md:flex-row justify-between items-center gap-4">
            <div className='flex flex-col gap-2 w-full items-center md:items-start md:w-[300px]'>
              <img src={logo_black} className='w-[10rem]' alt="" />
              <div className='poppins text-[13px] leading-4 hidden md:block'>A fest that celebrates both the innumerous shades of our culture and one of its own kind.</div>
            </div>
            <div className="footer__contact poppins text-[13px] leading-4 font-medium flex flex-col gap-1 text-center md:text-right">
              <ul className='flex flex-col gap-1'>
                <li>
                  <Link to="#" className="a-link">+91 8247340743</Link>
                </li>
                <li>
                  <Link to="#" className="a-link">apoorv@iiitkottayam.ac.in</Link>
                </li>
                <li>IIIT Kottayam</li>
              </ul>
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
          </filter>
        </defs>
      </svg>
    </>
  )
}

export default Footer;