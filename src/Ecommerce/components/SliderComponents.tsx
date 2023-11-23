import "../styles/SliderComponent.css"
import { useLayoutEffect } from 'react';
import { useSliderC } from "../hooks/useSliderC";
import useProduct from "../hooks/useProduct";

interface Props{
  children: JSX.Element[],
  gap?:"5px"| "10px" | "15px" | "20px" | string,
  className?: string
}

export const SliderComponents = ({children,gap,className}:Props) => {

 const {takeWidth,handleNext,handlePrev,container,item} = useSliderC()


 useLayoutEffect(() => {
  takeWidth()
 },[item.current])

 

 const {products} = useProduct()

 window.addEventListener("resize", () => {
  takeWidth()
 })

  return (
    <div className={`sliderComponent ${className}`}>
      <h2 className="home_subtitle">sweaters</h2>
       <div className='btn-leftArrow btn-gray' onClick={handlePrev}>&#10092;</div>
       <div onClick={() => handleNext(products.slice(0,6))} className='btn-rightArrow btn-gray'>&#10093;</div>
        <div ref={container} className='sliderComponent_container'>
            {children.map(value => (
              <div key={value.key}  ref={item}>
              <div className="sliderComponent_item" style={{marginRight:`${gap}`}}>
              {value}
              </div>
              </div>
            ))} 
        </div>
        <p></p>
    </div>
  )
}
