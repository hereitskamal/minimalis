import React, { useState, useEffect } from 'react';
import './Carousel.css';
import img1 from '../Images/minimalfasion.png';
import img2 from '../Images/NewArrival.png';
import img3 from '../Images/summer.png';
import img4 from '../Images/Autumn.png';

const slides = [img1, img2, img3, img4];

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevImg) => (prevImg + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='cr-img'>
        <img src={slides[currentImg]} alt='' />
      </div>
    </div>
  );
};

export default Carousel;






