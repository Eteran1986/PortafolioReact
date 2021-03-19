import React from 'react';
import './cursos.css'
import fotocert from '../../img/entrega-certificado.png';

const Cursos = () => {
    return (
        <section className="cursos">
        <div className="contenedor">
            <div className="cursos-cont">
            <img src={fotocert} alt="" className="imagen-about" />
            <div className="texto-izquierda"> 
                <h2 className="titulo">Cursos Realizados</h2>   
                <p>CUPRE 2013 </p>
                <p>CUPRE 2014</p>
                <p>ARCSA 2018</p>
                <p>DESIGN THINKING 2020</p>
                <p>SCRUM MASTER 2020</p>
                <p>KANBAN ESSENTIALS 2020</p>
                <p>VIDEO MARKETING 2020</p>
                <p>BIG DATA 2020</p>
            </div>
            </div>
        </div>
        </section>
    )
}
export default Cursos