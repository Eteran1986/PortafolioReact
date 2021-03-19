import React from 'react';
import './contacto.css'
import fototenor from '../../img/tenor.gif';


const Contacto = () => {
    return (
        <div>
            <section class="Contactame" id="contacto">
            <h2 class="titulo">Contacteme</h2>
            
                <div class="contact_form">
                            <p>
                                
                            <label for="nombre" class="colocar" >Nombre 
                                <input type="text" name="Aquí su nombre" class="ingreso"></input>
                            </label>
                            </p>
                            <p>
                            <label for="email" class="colocar">Email        
                                <input type="text" name="Aquí su nombre" class="ingreso"></input>
                            </label>
                            </p>
                            <p>
                            <label for="mensaje" class="colocar mensaje">Mensaje
                                <input type="text" name="Aquí su nombre" class="ingreso"></input>
                            </label>                     
                            </p>
                            <a href="#" class="contactar_fin" ><p>Contactar</p></a>     
                     </div>
                     <p class="texto-campeon">Tri-CAMPEON del Ecuador</p>
                    <img src={fototenor} alt=""class="imagen-emelec"></img>
                      
        </section>
        </div>
    )
}
export default Contacto