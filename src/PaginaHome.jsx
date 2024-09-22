import React from 'react';
import "./PaginaHome.css";
import { useEffect } from 'react';
import gsap from 'gsap';
import { useState } from 'react';
import { useRef } from 'react';


const PaginaHome = () => {
    const images = [
        'src/img/1.png',
        'src/img/2.png',
        'src/img/3.png',
      ];
      
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const carousel = carouselRef.current;
      const slides = carousel.querySelectorAll('.slide');
  
      gsap.set(slides, { x: '100%' });
      gsap.set(slides[0], { x: '0%' });
  
      const slideWidth = slides[0].offsetWidth;
  
      const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        
        gsap.to(slides[currentIndex], { x: '-100%', duration: 1 });
        gsap.fromTo(slides[nextIndex], 
          { x: '100%' },
          { x: '0%', duration: 1 }
        );
  
        setCurrentIndex(nextIndex);
      };
  
      const interval = setInterval(nextSlide, 3000);
  
      return () => clearInterval(interval);
    }, [currentIndex, images]);

  return (
    <main>
        <div ref={carouselRef} className='carousel'>
            {images.map((image, index) => (
                <div key={index} className="slide" >
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </div>
    </main>

  )
}

export default PaginaHome