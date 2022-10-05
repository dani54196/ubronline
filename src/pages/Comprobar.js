import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2 className="major">Verificación</h2>
          <p>
            Para verificar trámite, ingresar Número UBRO y correo electrónico
            con el cual inicio su trámite{' '}
          </p>

          <form method="post" action="/#">
            <div className="fields">
              <div className="field">
                <label htmlFor="email">Numero UBRO</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="numero">Numero</label>
                <input type="email" name="numero" id="numero" />
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
