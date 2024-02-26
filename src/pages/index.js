import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/logo_b.jpg';
import pic2 from '../assets/images/logo_b.jpg';
import pic3 from '../assets/images/logo_b.jpg';
import pic4 from '../assets/images/banner3.jpg';
import pic5 from '../assets/images/banner3.jpg';
import pic6 from '../assets/images/banner3.jpg';
import pic7 from '../assets/images/banner3.jpg';
import premios from '../assets/images/premios.jpeg';

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
            <h2 className="major">QUIENES SOMOS:</h2>
            <p>
              UBRO, es una organización de nivel internacional, compuesta por
              socios, colegas que nos apoyan y hacen que cada día esta familia
              crezca. UBRO ES EL PRIMER <strong>REGISTRO DE MASCOTAS</strong> ONLINE, en ofrecer
              trámites digitales y homologación de trámites de otros registros
              reconocidos, con lo que, lo ubica en ser un servicio de
              vanguardia, eficiente, seguro y confiable, que certifica y da
              soluciones a nuestros clientes. También nuestro amplio Staff de
              Jueces, Cinólogos, Criadores y Profesionales, bridan cursos,
              seminarios y reuniones dedicadas a la canofilia y cinología canina
              a nivel mundial.
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
        <h3 className="major">LOS BENEFICIOS DE REGISTRAR CON UBRO</h3>
        <ul className="alt">
          <li>
            Garantiza, guarda y protege el historial genético de tu mascota.
          </li>
          <li>Certificación con validez internacional.</li>
          <li>
            Acceso a seminarios, reuniones, capacitaciones, shows, eventos, y
            demás actividades.
          </li>
          <li>Derechos a participar en los campeonatos oficiales.</li>
        </ul>
        <img src={premios} width="100%" />
      </section>

      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">NUESTROS SERVICIOS</h2>
            <ul className="alt">
              <li>Asesoramiento 100 % online. </li>
              <li>Eficiencia en los diferentes Trámites.</li>
              <li>Atención telefónica personal. </li>
              <li>
                Actualizaciones de datos, (fotografías, títulos de campeón,
                numero de chip, perdidas, defunción, etc)
              </li>
              <li>Informes. </li>
              <li>Verificación, seguimiento de trámites. </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
