import img from "../assets/mujer1.webp"
import img2 from "../assets/mujer2.webp"
import img3 from "../assets/mujer3.webp"
import img4 from "../assets/mujer4.webp"
import img5 from "../assets/mujer5.webp"

import dress from "../assets/cardigan.webp"
import dress1 from "../assets/cardigan1.webp"
import dress3 from "../assets/sweter.webp"

import arabasse from "../assets/anrabasse.jpg"
import arabasse2 from "../assets/anrabasse2.jpg"
import arabasse3 from "../assets/anrabasse4.jpg"

import raya from "../assets/raya1.jpg"
import raya2 from "../assets/raya2.jpg"
import raya3 from "../assets/raya3.jpg"

import lilu from "../assets/lilu.jpg"
import lilu2 from "../assets/lilu2.jpg"
import lulu3 from "../assets/lilu3.jpg"

export const ImageCarrou = [
    
   {
    id: 1,
    img
   },
   {
    id: 2,
    img: img2
   },
   {
    id: 3,
    img: img3
   },
   {
    id: 4,
    img: img4
   },
   {
    id: 5,
    img: img5
   }

]


export const sweeters: Product[] = [

   {  
      id: 1,
      title: "Cardigan",
      price: 59.66,
      description: "Caracilia Women's Oversized Knitted Cardigan Open Front Long Sleeve Lapel Casual Coat Fall 2023 Elegant Coat",
      img: [dress,arabasse,arabasse2,arabasse3]
   }, 
   {
      id: 2,
      title: "ANRABESS",
      description: "ANRABESS Women's Oversized Turtleneck Sweater Long Batwing Sleeve Asymmetrical Hem Knitted Tunic Pullover Casual Buttonless Sweater",
      price: 60.22,
      img: [dress1,raya,raya2,raya3]
   },
   {
      id:3,
      title: "Sweater",
      description: "2023 Women's Long Sleeve Striped Button Down Sweater Open Coat with Pockets",
      price: 20.00,
      img: [dress3,lilu,lilu2,lulu3]
   },
   {  
      id: 4,
      title: "Cardigan",
      price: 59.66,
      description: "Caracilia Women's Oversized Knitted Cardigan Open Front Long Sleeve Lapel Casual Coat Fall 2023 Elegant Coat",
      img: [dress]
   },
   {
      id: 5,
      title: "ANRABESS",
      description: "ANRABESS Women's Oversized Turtleneck Sweater Long Batwing Sleeve Asymmetrical Hem Knitted Tunic Pullover Casual Buttonless Sweater",
      price: 60.22,
      img: [dress1]
   },
   {
      id:6,
      title: "Sweater",
      description: "2023 Women's Long Sleeve Striped Button Down Sweater Open Coat with Pockets",
      price: 20.00,
      img: [dress3]
   },
   {  
      id: 7,
      title: "Cardigan",
      price: 59.66,
      description: "Caracilia Women's Oversized Knitted Cardigan Open Front Long Sleeve Lapel Casual Coat Fall 2023 Elegant Coat",
      img: [dress]
   }, 
   {
      id: 8,
      title: "ANRABESS",
      description: "ANRABESS Women's Oversized Turtleneck Sweater Long Batwing Sleeve Asymmetrical Hem Knitted Tunic Pullover Casual Buttonless Sweater",
      price: 60.22,
      img: [dress1]
   },
   {
      id:9,
      title: "Sweater",
      description: "2023 Women's Long Sleeve Striped Button Down Sweater Open Coat with Pockets",
      price: 20.00,
      img: [dress3]
   },
   {  
      id: 10,
      title: "Cardigan",
      price: 59.66,
      description: "Caracilia Women's Oversized Knitted Cardigan Open Front Long Sleeve Lapel Casual Coat Fall 2023 Elegant Coat",
      img: [dress]
   },
   {
      id: 11,
      title: "ANRABESS",
      description: "ANRABESS Women's Oversized Turtleneck Sweater Long Batwing Sleeve Asymmetrical Hem Knitted Tunic Pullover Casual Buttonless Sweater",
      price: 60.22,
      img: [dress1]
   },
   {
      id:12,
      title: "Sweater",
      description: "2023 Women's Long Sleeve Striped Button Down Sweater Open Coat with Pockets",
      price: 20.00,
      img: [dress3]
   }


]

export const sideOptions = [

   {
      id:1,
      icon: "bx bx-user-circle",
      text: "user",
      path: "/user/info"
   },
   {
      id:2,
      icon: "bx bxs-heart-circle",
      text: "wishes",
      path: "/user/wishes"
   },
   {
      id:3,
      icon: "bx bxs-cart",
      text: "cart",
      path: "/user/cart"
   },
   {
      id:4,
      icon: "bx bxs-shopping-bag",
      text:"purcharses",
      path: "/user/purchases"
   },
   {
     id:5,
     icon:  "bx bxs-moon",
     text: "darkMode"
   }


]