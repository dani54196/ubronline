import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Layout from '../components/Layout';

export default function IndexPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yeq98hi', //'YOUR_SERVICE_ID',
        'template_8jwmzid', //'YOUR_TEMPLATE_ID',
        form.current,
        'RUX9nW4pQkFsYji1Q' //'YOUR_PUBLIC_KEY'
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
            <h2 className="major">Verificación</h2>
            <p>
              Para verificar trámite, ingresar Número UBRO y correo electrónico
              con el cual inicio su trámite{' '}
            </p>

            <form method="post" action="/#" ref={form} onSubmit={sendEmail}>
              <div className="fields">
                <div className="field">
                  <label htmlFor="email">Numero UBRO</label>
                  <input type="text" name="n_ubro" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="numero">Numero</label>
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
