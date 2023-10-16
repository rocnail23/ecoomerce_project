import { sweeters } from '../../assets/data';
import "../styles/SliderComponent.css"
import { useLayoutEffect } from 'react';
import { useSliderC } from "../hooks/useSliderC";

interface Props{
  children: JSX.Element[],
  gap?:"5px"| "10px" | "15px" | "20px" | string 
}

export const SliderComponents = ({children,gap}:Props) => {

 const {takeWidth,handleNext,handlePrev,container,item} = useSliderC()
 useLayoutEffect(() => {
  takeWidth()
 },[])

 window.addEventListener("resize", () => {
  takeWidth()
 })

  return (
    <div className='sliderComponent'>
      <h2 className="sub_title">sweaters</h2>
       <div className='btn-leftArrow btn-gray' onClick={handlePrev}>&#10092;</div>
      <div onClick={() => handleNext(sweeters)} className='btn-rightArrow btn-gray'>&#10093;</div>
        <div ref={container} className='sliderComponent_container'>
            {children.map(value => (
              <div  ref={item}>
              <div className="sliderComponent_item" style={{marginRight:`${gap}`}}>
              {value}
              </div>
              </div>
            ))} 
        </div>
    </div>
  )
}
