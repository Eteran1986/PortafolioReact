import React from 'react';
import './servicios.css'
import fotomant from '../../img/Mantenimiento.png';
import Tarjeta from'./tarjetas'
import {db} from '../../firebase'
function Servicio(){
    /*const [servicios, setServicios] = useState([])
    useEffect(() => {
        db.collection('servicios').onSnapshot(datos =>{
            const servis=[]
            datos.forEach(registro =>{
                console.log(registro.id,registro.data());
                servis.push({...registro.data(),id:registro.id})
                
            });
            console.log(servis)
            setServicios(servis)
        },[setServicios])*/
        

    return (
        <div>
  <section className="trabajo" id="servicios">
    <div className="contenedor">
      <div className="trabajo-cont">
        <img src={fotomant} alt="" className="imagen-about-derecha" />
        <div className="texto-izquierda"> 
          <h2 className="titulo">Servicios</h2>   
          <p>Ediciones de video para spots Publicitarios </p>
          <p>Productor General de Noticias</p>
          <p>Reparaciones y mantenimientos de cámaras de seguridad</p>
        </div>
      </div>
    </div>
  </section>
</div>
   
    )
    }
export default Servicio