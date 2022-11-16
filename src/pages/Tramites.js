import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Layout from '../components/Layout';

export default function IndexPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_smhaj7f', //'YOUR_SERVICE_ID',
        'template_u6irizs', //'YOUR_TEMPLATE_ID',
        form.current,
        'phP3Y2bB2iA7YN1Gc' //'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout fullMenu>
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2 className="major">Tramites</h2>
            <p></p>

            <form method="post" action="/#" ref={form} onSubmit={sendEmail}>
              <div className="fields">
                <div className="field">
                  <div className="col-12">
                    <label htmlFor="demo-category">Tipo de Tramite</label>
                    <select name="tipo_tramite" id="demo-category">
                      <option value="">Elejir</option>
                      <option value="Inicial">INICIALES</option>
                      <option value="Permanente">PERMANENTES</option>
                      <option value="Afijo/Kennel">AFIJOS / KENNEL</option>
                      <option value="Homologacion">HOMOLOGACIÓN</option>
                      <option value="Tramites Especiales">
                        TRAMITES ESPECIALES
                      </option>
                      <option value="Camadas">CAMADAS</option>
                      <option value="Informes y Actualizaciones">
                        INFORMES Y ACTUALIZACIONES
                      </option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email">Nombre</label>
                  <input type="text" name="nombre" id="nombre" />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>

                <div className="field">
                  <label htmlFor="number">Numero</label>
                  <input type="text" name="n_cel" id="numero" />
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
}
