import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about___container">
      <div className="about___header">About</div>
      <div className="about___card">
        <div className="about___card-content">
          <p>
            Mi nombre es Jhosno (She/her). Me dedico a ayudar a diseñadores,
            organizaciones y negocios a encontrar soluciones tecnológicas.
            Convierto la música dark wave en código. Conmigo puedes conseguir
            resultados eficientes y sostenibles a través de CMS, ecommerces y
            sistemas personalizados. Aparte de renovar y mantener módulos o
            vistas. Adoro escuchar música, mi gata, la ilustración y el diseño
            en muchas de sus vertientes. Estoy enfocada en el trabajo frontend y
            trabajar en proyectos grandes y enriquecedores de forma remota.
          </p>
          <div className="about___RRSS">
            <a href="https://twitter.com/jhosno">Twitter</a>
            <a href="https://github.com/jhosno">Github</a>
            <a href="https://www.linkedin.com/in/jhosno/">LinkedIn</a>
            <a href="https://jhosno.github.io">Site</a>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/profile_images/1541820760192425986/viOj940y_400x400.jpg"
          alt="Jhosno"
        />
      </div>
    </div>
  );
};

export default About;
