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

      <section className="beneficios">
        <h3 className="major">
          avalar, guardar y proteger el historial genético de tu mascota
        </h3>
        <ul className="alt">
          <li>PROTEGER E INDENTIFICAR A TU CASCOTA</li>
          <li>PARTICIPE EN CONCURSOS - CURSOS - CEMINARIOS Internacionales</li>
          <li>HOMOLOGUE NUENSTRO REGISTRO A UN NIVEL MUNDIAL</li>
          <li>REGISTROS PARA ROTAS LAS RAZAS -</li>
          <li>eficacia en la entrega de tus tramites</li>
        </ul>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
