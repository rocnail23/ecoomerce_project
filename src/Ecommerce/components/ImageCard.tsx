import "../styles/ImageCard.css"
import { useState, useEffect } from 'react';

interface Props{
    images?: string[]
}

export const ImageCard = ({images}: Props) => {

  const [image ,setImage] = useState(images?.[0])
  const changeImage = (img:string) => {
      setImage(img)
  }

  useEffect(() => {
    setImage(images?.[0])
  },[images])

  return (
   <>
   <div className="imageCard_listImage animate__animated animate__fadeIn">
    {images?.map(image => (
        <div onClick={() => changeImage(image)} key={image}>
        <img  src={image} alt="" />
        </div>
    ))}
   </div>
   <div className="imageCard_image animate__animated animate__fadeIn">
        <img src={image} alt="" />
   </div>
   </>
  )
}
