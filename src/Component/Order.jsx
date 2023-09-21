import { useEffect, useState } from "react"
import { AnimatePresence ,motion} from "framer-motion"

const containerVarient={
    hidden:{
      opacity:0,
      x:'100vw'
    },
       visible:{
    opacity:1,
    x:'0',
    transition:{delay:0.5,duration:0.5}
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
  }
const Order = ({pizza,setShow}) => {
  const [show,setshow]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setShow(true)
    },5000)
  },[setShow])
  return (
    <motion.div
    variants={containerVarient}
    initial='hidden'
    animate='visible'
    exit='exit'>
     <h2 >thank you four your order:</h2>
      <p>your order a {pizza.base} pizza withe:</p>
      {pizza.toppings.map(topping=><div key={topping}>{topping}</div>)}
    </motion.div>
  )
}

export default Order