import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about___container">
      <div className="about___header">About</div>
      <div className="about___card">
        <div className="about___card-content">
          <p>
          Mi nombre es Jhosno (She/her).
          
            Me dedico a ayudar a diseñadores, organizaciones y negocios a
            encontrar soluciones tecnológicas. Convierto la música dark wave en
            código. Conmigo puedes conseguir resultados eficientes y sostenibles
            a través de CMS, ecommerces y sistemas personalizados. Aparte de
            renovar y mantener módulos o vistas. Adoro escuchar música, mi gata,
            la ilustración y el diseño en muchas de sus vertientes. Estoy
            enfocada en el trabajo frontend y trabajar en proyectos grandes y
            enriquecedores de forma remota. Aquí en mi blog podrás encontrar
            parte de mis experiencias y aprendizajes.
          </p>
          <div className="about___RRSS">
            <a href="">Twitter</a>
            <a href="">Github</a>
            <a href="">LinkedIn</a>
            <a href="">Site</a>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/profile_images/1541820760192425986/viOj940y_400x400.jpg"
          alt="about picture"
        />
      </div>
    </div>
  );
};

export default About;
