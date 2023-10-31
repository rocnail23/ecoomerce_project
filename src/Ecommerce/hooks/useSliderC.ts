import {useRef,useState} from 'react';
import { Product } from '../../interfaces/InterfacesForm';


export const useSliderC = () => {

    const item = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null)
    const width = useRef<number>() 
    const [currentIndex,setCurrentIndex] = useState(0)

    const handlePrev = () => {

        if(currentIndex == 0 ) return
        const translate = (currentIndex - 1) * width.current! 
        container.current!.style.transform = `translateX(-${translate}px)`
        setCurrentIndex(value => value - 1)
       }
         
 const takeWidth = () => {
    if(!item.current) return
    width.current = item.current!.offsetWidth 
    console.log("resize")
 }

 const handleNext = (array:Product[]) => {
     const itemsInWindow =  Math.floor(window.innerWidth / width.current!)
     console.log(itemsInWindow)  
     const items = array.length -  itemsInWindow
     const maxValue = items * width.current! 
     const translate = (currentIndex + 1) * width.current! 
    if(maxValue < translate) return
     setCurrentIndex(value => value + 1)
     container.current!.style.transform = `translateX(-${translate}px)`
 }

 return {
    handleNext,
    handlePrev,
    takeWidth,
    item,
    container
 }

}