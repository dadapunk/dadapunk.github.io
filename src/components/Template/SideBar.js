import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/profile.png`} alt="" />
      </Link>
      <header>
        <h2>Sebastián Velásquez</h2>
        <p><a href="mailto:sebastian.v.a@riseup.net">sebastian.v.a[at]riseup.net</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Sebastián. I like building things.
        I am a chilean computer engineer living in Girona, Spain.<br></br>
      <a href={`https://github.com/dadapunk/CV-Latex/raw/main/CV-IT-EN-Velasquez.pdf`}>Download my CV in Pdf.</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Sebastián Velásquez <Link to="/">dadapunk</Link>.</p>
    </section>
  </section>
);

export default SideBar;
