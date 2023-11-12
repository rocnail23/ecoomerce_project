interface  Props {
    img:string,
    changeShowImage: () => void
}

export const SliderImg = ({img,changeShowImage}:Props) => {

    
  
        
  

    

  return (
    <img src={img} style={{height:"100%"}}  onLoad={() => changeShowImage()}/>
  )
}
