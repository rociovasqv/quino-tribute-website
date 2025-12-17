import React from "react";
// import ReactDOM from "react";
import '../estilos/caja.css'

function Caja(){
    return(
    
    <div className='container'>
        <div className="mafaldaBox">
                <div className="mafaldaItem">
                    <img className='mafalda'
                    src={require('../imagenes/mafalda.jpg')} alt='Mafalda'/>
                    <h4 className='contenedorTitulo'>
                    ¡Hola! Bienvenidos al mundo de Mafalda
                    </h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum amet cumque delectus dolorum natus, reiciendis unde, doloremque, esse iste numquam voluptatem consectetur reprehenderit nostrum incidunt harum qui odio culpa?
                    </p>
                    <button className='botonMasInfo'>
                    Más info...
                    </button>
                </div>

                <div className="mafaldaItem">
                    <img className='susanita'
                    src={require('../imagenes/susanita.jpg')} alt='Susanita'/>
                    <h4 className='contenedorTitulo'>
                    ¡Hola! Soy Susanita
                    </h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum amet cumque delectus dolorum natus, reiciendis unde, doloremque, esse iste numquam voluptatem consectetur reprehenderit nostrum incidunt harum qui odio culpa?
                    </p>
                    <button className='botonMasInfo'>
                        Más info...
                    </button>
                </div>

                <div className="mafaldaItem">
                    <img className='felipe'
                    src={require('../imagenes/felipe.png')} alt='Felipe'/>
                    <h4 className='contenedorTitulo'>
                    ¡Hola! Soy Felipe
                    </h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum amet cumque delectus dolorum natus, reiciendis unde, doloremque, esse iste numquam voluptatem consectetur reprehenderit nostrum incidunt harum qui odio culpa?
                    </p>
                    <button className='botonMasInfo'>
                        Más info...
                    </button>
                </div>
            </div>  
        </div>
    )
}

export default Caja;



        // function footer(){
        //     <div className="footer">
        //     <div className="subFooter">

        //     </div>
        //     <div className="subFooter">

        //     </div>
        //     <div className="SubFooter">

        //     </div>
        // </div>
            