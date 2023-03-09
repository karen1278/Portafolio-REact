import React, { useState } from 'react';

function Data() {
const [photo, setPhoto] = useState("../img/photo.png");

const handleMouseOver = () => {
setPhoto("../img/calcifer.png");
};

const handleMouseLeave = () => {
setPhoto("../img/photo.png");
};

const handleContact = () => {
window.location.href = 'https://www.linkedin.com/in/karen-cisneros-800143191/';
};

return (
<header className='d-flex justify-content-evenly'>
<div>
<h1>Hola, soy Karen</h1>
<h4>Desarrolladora web frontend</h4>
<button className='boton' onClick={handleContact}>Contactar</button>
</div>
<img
     className='photo'
     src={photo}
     alt="carita"
     onMouseOver={handleMouseOver}
     onMouseLeave={handleMouseLeave}
   />
</header>
);
}
  
export default Data;