import React from 'react';
import './testimonio.css'
import fotoAna from '../../img/anabel vargas.jpg';
import fotofer from '../../img/fernanda teran.jpg';
import fotomer from '../../img/mercedes menendez.jpg';
import fotosas from '../../img/saskia san martin.jpg';
const Testimonio = () => {
    return (
        <div>
            <section class="Que dicen de mi" id="testimonio">
            <div class="contenedor">
            <h2 class="titulo">Que dicen de mi...</h2>
            <div class="cards">
                <div class="card">
                    <img src={fotoAna} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4><b>Anabel Vargas</b></h4>
                        <h6><i>Estudiante</i></h6>
                        <p><i>Es una persona muy entregada y responsable al momento de realizar un trabajo grupal.</i></p>
                    </div>
                </div>
                <div class="card">
                    <img src={fotofer} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4><b>Fernanda Terán</b></h4>
                        <h6><i>Hermana</i></h6>
                        <p><i>Tiene un carácter enérgico y es directo para emitir algún comentario.</i></p>
                    </div>
                </div>
               <div class="card">
                    <img src={fotomer} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4><b>Ramona Menéndez</b></h4>
                        <h6><i>Estudiante</i></h6>
                        <p><i>Es una persona muy sociable al momento de ayudar a los demás, siempre y cuando no destruyan su confianza.</i></p>
                    </div>
                </div>
                <div class="card">
                    <img src={fotosas} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4><b>Saskia San Martín</b></h4>
                        <h6><i>Profesional</i></h6>
                        <p><i>Es una persona muy complicada, siempre en la primera impresión es muy cerio y poco amigable hasta que lo conoces.</i></p>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </div>
    )
}
export default Testimonio