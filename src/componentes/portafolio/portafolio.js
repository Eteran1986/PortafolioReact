import React from 'react';
import './portafolio.css';
import foto1 from '../../img/Emelec.jpg';
import foto2 from '../../img/2img.jpg';
import foto3 from '../../img/3img.jpg';
import foto4 from '../../img/4img.jpg';
import foto5 from '../../img/5img.jpg';
import foto6 from '../../img/6img.jpg';
import foto7 from '../../img/7img.jpg';
import foto8 from '../../img/8img.jpg';
import click from '../../img/click.png';


const Portafolio = () => {
    return (
        <div>
            
            <section class="Proyecto" id="portafolio">
            <div class="contenedor">
                <h2 class="titulo">Portafolio</h2>
                <div class="galeria-pro">
                    <div class="imagen-pro">
                        <img src={foto1} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>Emelec 2013-2014-2015</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto2} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>capacitación ARCSA</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto3} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>concurso</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto4} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>medio de comunicación</p>
                            <p>NACIONAL</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto5} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>capacitación INTEL</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto6} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>Cobertura plantón</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto7} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>SCRUM</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto8} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>Entrevistas</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
            
        </div>
    )
}
export default Portafolio