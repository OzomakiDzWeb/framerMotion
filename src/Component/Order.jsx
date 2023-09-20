import { useState } from "react"
import { AnimatePresence ,motion} from "framer-motion"


const Order = ({pizza}) => {
  const [show,setshow]=useState(true)
  setTimeout(()=>{
    setshow(false)
  },4000)
  return (
    <div>
      <AnimatePresence>
      {show && (<motion.h2 exit={{y:-1000}}>thank you four your order:</motion.h2>)}

      </AnimatePresence>
      <p>your order a {pizza.base} pizza withe:</p>
      {pizza.toppings.map(topping=><div key={topping}>{topping}</div>)}
    </div>
  )
}

export default Order