import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="/Tramites"
            >
              Tramites
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="/Requisitos"
            >
              Requisitos
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="/Comprobar"
            >
              Comprobar
            </Link>
          </li>
        </ul>
        <a
          className="close"
          onClick={(e) => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
