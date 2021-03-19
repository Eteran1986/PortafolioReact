import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div class="enlaces" id="enlaces">
                    <a href="#contacto"class="contacto">Contacto</a>
                    <a href="#grupo"class="contacto">Acerca de</a>
                    <a href="#estudios" class="contacto">Estudios Realizados</a>
                    <a href="#servicios" class="contacto">Servicios</a>
                    <a href="#portafolio" class="contacto">Portafolio</a>
                    <a href="#testimonio" class="contacto">Testimonios</a>
                    </div>
                </nav>

            <section class="texto-header">
            <h1>Hola Soy Eduardo Terán. Estudiante y Programador</h1>
            <h2>Para ser un experto en creación WEB</h2>
            <div>
                <a href="#contacto" class="contacto1">Contacto</a>    
            </div>
            
        </section>
        <section>
        <div className="ocean">
            <div className="wave" />
            <div className="wave" />
        </div>


        </section>
        
    </header>
        </div>
    )
}
export default Header