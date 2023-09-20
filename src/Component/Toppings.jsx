import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
  const buttonAnimat={
    hidden:{
     x:'-100vw',opacity:0
    },
    visible:{
      x:0,opacity:1,
       transition:
       {type:'spring',stiffness:300,duration:0.5} 
    },
 hover:{
    scale:1.1,
    textShadow:"0px 0px 8px rgb(255,255,255)",
    boxShadow:"0px 0px 8px rgb(255,255,255)",
    transition:{ type: 'spring', velocity: 2 }
    },
}

const Toppings = ({addToppings,pizza}) => {
    let toppings=['mushrooms','peppers','onions','olives','extra chees','tomates']

  return (
    <div>
      <h1>Step 2:choose Toppings</h1>
      <ul className="cursor-pointer list-disc ml-10 ">
        {toppings.map(toping=>{
          // eslint-disable-next-line react/prop-types
          let spanClass=pizza.toppings.includes(toping)?'text-black':''
          return(
            <li key={toping} onClick={()=>addToppings(toping)}>
              <span className={spanClass}>{toping}</span>
            </li>
          )
        })}
      </ul>
      <Link to='/order'>
        
            <motion.button
            variants={buttonAnimat}
            initial='hidden'
            animate='visible'
            whileHover='hover'
             className="rounded-lg border border-zinc-50 px-5 mt-5 hover:bg-slate-100 transition-all hover:text-slate-950">Order</motion.button>
         
      </Link>
    </div>
  )
}

export default Toppings