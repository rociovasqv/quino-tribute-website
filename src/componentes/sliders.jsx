import React from "react";
import '../estilos/sliders.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from "react-slideshow-image";

const Sliders = () => {
    // const images = [
    //     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    //     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    //     "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    // ];

    return (
        <Slide
  autoplay={false}
  onChange={function noRefCheck(){}}
  onStartChange={function noRefCheck(){}}
>
  <div className="each-slide-effect">
    <div
    style={{
        backgroundImage: 'url("https://cdn.goconqr.com/uploads/media/image/44091272/desktop_22e1444b-44c4-42a1-b098-c2f2b840d287.png")', WebkitBackgroundSize: 'cover', height:'500px', width:'100%',backgroundRepeat:'no-repeat', backgroundPosition:'center'
      }}>
      <span>
         Bienvenido al mundo de Mafalda
      </span>
    </div>
  </div>
  <div className="each-slide-effect">
    <div>
    <img className='mafaldaPersonajes'
                    src={require('../imagenes/mafalda-bg2.jpg')} alt='Mafalda-Personajes'/>
    </div>
  </div>
  <div className="each-slide-effect">
    <div>
    <img className='mafaldaPersonajes'
                    src={require('../imagenes/mafalda-personajes.png')} alt='Mafalda-Personajes'/>
    </div>
  </div>
</Slide>
    );
};

export default Sliders;


/* <Slide>
<div className="each-slide-effect">
    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
        <span>Slide 1</span>
    </div>
</div>
<div className="each-slide-effect">
    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
        <span>Slide 2</span>
    </div>
</div>
<div className="each-slide-effect">
    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
        <span>Slide 3</span>
    </div>
</div>
</Slide> */