import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2 className="major">Tramites</h2>
          <p></p>

          <form method="post" action="/#">
            <div className="fields">
              <div className="field">
                <div className="col-12">
                  <label htmlFor="demo-category">Tipo de Tramite</label>
                  <select name="demo-category" id="demo-category">
                    <option value="">Elejir</option>
                    <option value="1">INICIALES</option>
                    <option value="1">PERMANENTES</option>
                    <option value="1">AFIJOS / KENNEL</option>
                    <option value="1">HOMOLOGACIÓN</option>
                    <option value="1">TRAMITES ESPECIALES</option>
                    <option value="1">CAMADAS</option>
                    <option value="1">INFORMES Y ACTUALIZACIONES</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="numero">
                  Numero(Especificando, Código de Área y Numero)
                </label>
                <input type="email" name="numero" id="numero" />
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
        </div>
      </header>
    </section>
  </Layout>
);

export default IndexPage;
