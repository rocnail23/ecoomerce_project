import { ImageCarrou as data } from "../../assets/data"
import  { useEffect, useRef, useState, } from 'react'
import { SliderImg } from './SliderImg';
import "../styles/Slider.css"


export const Slider = () => {

  const [changing, setChangin] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(false)
  const interval = useRef<NodeJS.Timeout>()
  const timeOut = useRef<NodeJS.Timeout>()
  
  useEffect(() => {
   
   clearInterval(interval.current) 
   clearTimeout(timeOut.current) 
   interval.current = setInterval(() => {
      setShowImage(false)
      const isLastSlide = currentIndex === data.length - 1;

     timeOut.current = setTimeout(() => {
        if (!isLastSlide) { 
          setCurrentIndex(curr => curr + 1);
       
        }else{
          setCurrentIndex(0)
          
        }
        
      },500)
      
    },5000)

    

   
  },[currentIndex])

  const changeShowImage = () => {
    setShowImage(true)
  }
  
  const scrollToImage = (direction:string) => {
    if(changing) return
    setChangin(true)
    setShowImage(false)
   setTimeout(() => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }else{
        setCurrentIndex(0)
      }
    }
    setChangin(false)
   },500)
   
  }

  

  const goToSlide = (slideIndex:number) => {
    setCurrentIndex(slideIndex);
  }
  
  return (
    <div className="main-container">
      <div className="slider-container">
        <div className='btn-leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='btn-rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className={`container-images ${showImage && "showImage"}`}>     
                 <SliderImg img={data[currentIndex]?.img} changeShowImage={changeShowImage}/>
        </div>
        <div className="dots-container">
          {
            data.map((_, idx) => (
              <div key={idx}
                className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(idx)}>
                &#9865;
              </div>))
          }
        </div>
      </div>
    </div >
  )
}