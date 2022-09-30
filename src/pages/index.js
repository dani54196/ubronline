import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/logo_b.jpg';
import pic2 from '../assets/images/logo_b.jpg';
import pic3 from '../assets/images/logo_b.jpg';
import pic4 from '../assets/images/banner3.jpg';
import pic5 from '../assets/images/banner3.jpg';
import pic6 from '../assets/images/banner3.jpg';
import pic7 from '../assets/images/banner3.jpg';

import logo from '../assets/img/website-icon.png';
import bannerIndex from '../assets/images/bannerIndex.jpeg';
import wp from '../assets/images/boton-whatsapp.png';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img src={logo} width="250" />
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">QUINES SOMOS :</h2>
            <p>
              UBRO , es una organización de talla internacional., sino también
              por nuestros socios y colegas de nivel mundial que nos avalan.
              Contamos con un amplio Staff de Jueces, Cinólogos y Profesores;
              brindando siempre cursos, seminarios y reuniones dedicadas a la
              canofilia y cinología canina a nivel mundial. UBRO CUENTA con
              registros homologables a nivel internacional, UBRO ES EL PRIMER
              registros en brindar Documentos virtuales y físicos para la mejor
              comodidad y transporte a favor del usuario.!!
            </p>
            <a href="https://api.whatsapp.com/send?phone=5492994021637&text=Hola,%20Ubro">
              <img src={wp} width="300" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <img src={bannerIndex} width="100%" />
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major"> Nuestros beneficios son todos premium :</h2>
          <p>
            beneficiosbeneficios beneficios beneficiosbeneficios beneficios
            beneficiosbeneficios beneficios beneficiosbeneficios beneficios
            beneficiosbeneficios beneficios beneficiosbeneficios beneficios
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">PROTEGER E INDENTIFICAR A TU CASCOTA</h3>
              <p>descripcion descripcion descripcion descripcion descripcion</p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">
                PARTICIPE EN CONCURSOS - CURSOS - CEMINARIOS Internacionales
              </h3>
              <p>descripcion descripcion descripcion descripcion descripcion</p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">
                HOMOLOGUE NUENSTRO REGISTRO A UN NIVEL MUNDIAL
              </h3>
              <p>descripcion descripcion descripcion descripcion descripcion</p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">REGISTROS PARA ROTAS LAS RAZA</h3>
              <p>descripcion descripcion descripcion descripcion descripcion</p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Saber Mas
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
