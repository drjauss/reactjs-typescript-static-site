import React from "react";
import "./Footer.scss";
import minCulturaLogo from "../../images/logo-min.svg";
import bibliotecaLogo from "../../images/logo-biblioteca.svg";
import senalMemoriaLogo from "../../images/senal-memoria.svg";

function Footer() {
  return (
    <div className="Footer pale-green-bg">
      <div className="pure-g footer-columns section-padding">
        <div className="pure-u-1-4">
          <div>
            <h3 className="title no-margin white">Don Os vuelve a Lilac</h3>
            <p className="content small justified white">
              Esta publicación digital es de acceso gratuito, sin ánimo de lucro y tiene fines exclusivamente didácticos
              y culturales. Todos los contenidos aquí utilizados cumplen con la legislación de derechos de autor y no
              pueden ser reporducidos total o parcialmente, en ninguna forma ni por ningún medio, sin autorización
              expresa para ello.
            </p>
          </div>
        </div>
        <div className="pure-u-1-4">
          <div>
            <span className="subject white">Categorías</span>
            <ul>
              <li className="content white">Biografía</li>
              <li className="content white">Obra</li>
              <li className="content white">Contacto</li>
              <li className="content white">Acerca de</li>
            </ul>
          </div>
        </div>
        <div className="pure-u-1-4">
          <span className="subject white">Síguenos</span>
          <p>
            <span className="facebook-icon">Facebook</span>
            <br />
            <span className="instagram-icon">Instagram</span>
          </p>
        </div>
        <div className="pure-u-1-4">
          <div>
            <span className="subject white">Un proyecto con apoyo de</span>
            <p className="row-displayed">
              <img src={minCulturaLogo} alt="Logo del ministerio de cultura" />
              <img src={bibliotecaLogo} alt="Logo de la bibliteca nacional de colombia" />
              <img src={senalMemoriaLogo} alt="Logo de Señal memoria RTVC" />
            </p>
          </div>
        </div>
        <div className="pure-u-1-1 center">
          <p>
            <hr />
          </p>
          <p className="content small white">Ⓒ Ministerio de Cultura - Biblioteca Nacional de Colombia, 2020</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
