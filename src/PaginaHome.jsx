import React from 'react';
import "./PaginaHome.css";
import { useEffect } from 'react';
import gsap from 'gsap';
import { useState } from 'react';
import { useRef } from 'react';


const PaginaHome = () => {
    const images = ['src/img/1.png','src/img/2.png','src/img/3.png'];
    
    const [currentIndex,cambioPosition] =useState(0);

    const nextImage = () => {
      cambioPosition((index) => (index + 1) % images.length);
    };
    const prevImage = () => {
      cambioPosition((index) => (index - 1 + images.length) % images.length);
    };

  return (
    <main>
        <div className='carousel'>
            {images.map((image, index) => (
                <img key={index} src={image} alt={index}
                style={{
                  transform: `translateX(${index+2>currentIndex ? (index - currentIndex) * 100 : (currentIndex-index)*100}%)`,
                  zIndex: index>currentIndex ? -2: index<currentIndex? -3:-1,
                }}/>
            ))}
        </div>
        <h1>{currentIndex}</h1>
        <button onClick={nextImage}>next</button>
        <button onClick={prevImage}>preve</button>
    </main>

  )
}

export default PaginaHome