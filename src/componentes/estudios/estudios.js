import React from 'react';
import './estudios.css'
import fotoestud from '../../img/estudios.png';
import fotohabi from '../../img/habilidades.png';

const Estudios = () => {
    return (
        <div>
            <section class="Estudios-realizados" id="estudios">
            <div class="contenedor">
                <h2 class="titulo">Estudios Realizados</h2>
                 <div class="estudio-cont">
                    <img src={fotoestud} alt="" class="imagen-about"></img>
                    <div class="estudio-ind">
                        <h3>Primaria</h3>
                        <p><span>*</span>Unidad Educativa Eugenio Espejo</p>
                        <p><span>*</span>Unidad Educativa Matamoros</p>
                        <p><span>*</span>Unidad Particular Pueblos Unidos</p>
                    </div>
                    <div class="estudio-ind">
                        <h3>Secundaria</h3>
                        <p><span>*</span>Unidad Particular San Francisco de Milagro</p>
                    </div>
                    <div class="estudio-ind">
                        <h3>Superior</h3>
                        <p><span>*</span>Licenciado en Comunicación Social</p>
                        <p><span>*</span>Estudiante Carrera de Software</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="Habilidades">
            <div class="contenedor">
                <div class="habilidades-cont">
                <img src={fotohabi} alt="" class="imagen-about"></img>
                <div class="texto-izquierda"> 
                    <h2 class="titulo">Habilidades Adquiridas</h2>   
                    <p>Conocimiento en Premier, Finalcut, Photoshop e Illustrador </p>
                    <p>Conocimiento en Pycharm</p>
                    <p>Instalador de cámaras de seguridad</p>
                    <p>Mantenimiento de PC y laptops</p>
                    <p>Mantenimiento de impresoras</p>
                    <p>Programador audiovisual</p>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
}
export default Estudios