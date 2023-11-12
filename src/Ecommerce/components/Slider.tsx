import { ImageCarrou as data } from "../data";
import { useEffect, useRef, useState } from 'react';
import { SliderImg } from './SliderImg';
import "../styles/Slider.css";

export const Slider = () => {
  const [changing, setChanging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeout = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    clearInterval(interval.current!);
    clearTimeout(timeout.current!);

    interval.current = setInterval(() => {
      setShowImage(false);
      const isLastSlide = currentIndex === data.length - 1;

      timeout.current = setTimeout(() => {
        setCurrentIndex(curr => (isLastSlide ? 0 : curr + 1));
      }, 500);
    }, 5000);

    return () => {
      clearInterval(interval.current!);
      clearTimeout(timeout.current!);
    };
  }, [currentIndex]);

  const changeShowImage = () => {
    setShowImage(true);
  };

  const scrollToImage = (direction: 'prev' | 'next') => {
    if (changing) return;

    setChanging(true);
    setShowImage(false);

    setTimeout(() => {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return direction === 'prev' ? (isFirstSlide ? data.length - 1 : curr - 1) : (curr + 1) % data.length;
      });

      setChanging(false);
    }, 500);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="main-container">
      <div className="slider-container">
        <div className='btn-leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='btn-rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className={`container-images ${showImage && "showImage"}`}>
          <SliderImg img={data[currentIndex]?.img} changeShowImage={changeShowImage} />
        </div>
        <div className="dots-container">
          {data.map((_, idx) => (
            <div
              key={idx}
              className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            >
              &#9865;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};