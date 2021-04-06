import React from 'react';
import './Footer.scss';

export const Footer = () => (
  <footer className="App__footer footer">
    <div className="footer__copyrights">
      <strong>
        copyrights 2021 by
        {' '}
        <a href="https://github.com/vamonospest">
          Dmitry Morozov
        </a>
      </strong>
    </div>
  </footer>
);
