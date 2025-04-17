import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Mackenzie Goodwin</h2>
        <p><a href="mailto:mackenziejgoodwin@outlook.com">mackenziejgoodwin@outlook.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mackenzie. I&apos;m a massive crypto investor and advocate.
        I jumped into the hardware and software stratosphere and can&apos;wait for the conclusion.
        I&apos;m currently working at <a href="https://www.tesla.com/">Tesla Inc.</a> working on
        the AI revolution.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mackenzie Goodwin <Link to="/">mackenzieg.tech</Link>.</p>
    </section>
  </section>
);

export default SideBar;
