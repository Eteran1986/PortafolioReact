import React from 'react';
import './acerca.css'
import fotoIcon from '../../img/Icono.jpg';

const Acerca = () => {
    return (
        <div>
            <section class="contenedor sobre-nosotros" id="grupo">
             <h2 class="titulo">Acerca</h2> 
            <div class="contenedor-sobre-nosotros">
                <img src={fotoIcon} alt="" class="logo-imagen"></img>
                <div class="contenido-textos">
                    <h3>Mi nombre es Eduardo Terán</h3>
                    <h5>Soy estudiante de la carrera de Ingenieria de Software de quinto semestre</h5>
                    <a href="#contacto" class="contacto1">Contacto</a> 
                </div>
        </div>
        </section>
        </div>
    )
}
export default Acerca