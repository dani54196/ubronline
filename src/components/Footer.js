import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2>Nuestras Redes</h2>
        <ul className="icons">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100063761253531"
              className="icon fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=z-SFiSmi1lk&feature=youtu.be"
              className="icon fa-youtube"
            >
              <span className="label">Youtube</span>
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5492994021637&text=Hola,%20Ubro"
              className="icon fa-whatsapp"
            >
              <span className="label">Whatsapp</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; UBRO. All rights reserved.</li>
          <li>
            Design: <a href="http://softwareofosuth.xyz">Software of South</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
