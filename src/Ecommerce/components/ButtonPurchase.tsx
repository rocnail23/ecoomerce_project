interface Props {
    width?: "20%"|"30%" | "40%" | "50%" | "60%" | "70%" | "80%"
}

export const ButtonPurchase = ({width}:Props) => {
  return (
    <button className="cart_button teko" style={{width: width}}>purcharse</button>
  )
}
