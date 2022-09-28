import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Contacto</h2>
        <p>
          Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
          Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
          egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in
          tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
        </p>

        <form method="post" action="/#">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="numero">Numero</label>
              <input type="email" name="numero" id="numero" />
            </div>

            <div className="field">
              <div className="col-12">
                <label htmlFor="demo-category">Tipo de Tramite</label>
                <select name="demo-category" id="demo-category">
                  <option value="">-</option>
                  <option value="1">PERMANENTES</option>
                  <option value="1">INICIALES</option>
                  <option value="1">CAMADAS</option>
                  <option value="1">AFIJOS / KENNEL</option>
                  <option value="1">HOMOLOGACIÓN</option>
                  <option value="1">TRAMITES ESPECIALES</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Enviar Mensaje" />
            </li>
          </ul>
        </form>

        <h2>
          <br />
          Nuestras Redes
        </h2>
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
