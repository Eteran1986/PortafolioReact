import React from "react";
import './App.css';
import Header from './componentes/header/Header';
import Acerca from './componentes/acerca/acerca';
import Servicios from './componentes/servicios/servicios';
import Portafolio from './componentes/portafolio/portafolio';
import Testimonio from './componentes/testimonio/testimonio';
import Contacto from './componentes/contacto/contacto';
import Portada from './componentes/portada/portada';
import Estudios from './componentes/estudios/estudios.js';
import Cursos from './componentes/cursos/cursos'

function App() {
  return (
    <div className="App">
      
     <Header />
     <Acerca />
     <Portafolio />
     <Estudios />
     <Servicios />
     <Cursos/>
     <Testimonio />
     <Contacto />
     <Portada />
    
    </div>
  );
}

export default App;
