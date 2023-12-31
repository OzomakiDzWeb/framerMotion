import { Link } from "react-router-dom"
import {motion} from "framer-motion"

const Base = ({addBase,pizza}) => {
  const bases=['Classic','Thin & Crispy','Thick Crust']
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
  const buttonAnimat={
    hidden:{
     x:'-100vw',opacity:0
    },
    visible:{
      x:0,opacity:1,
       transition:
       {duration:0.5} 
    },
 hover:{
    scale:1.1,
    textShadow:"0px 0px 8px rgb(255,255,255)",
    boxShadow:"0px 0px 8px rgb(255,255,255)",
    transition:{ type: 'spring', velocity: 2 }
    },
}
  return (
    <motion.div
        variants={containerVarient}
        initial='hidden'
         animate='visible'
        exit='exit'
         className="">
      <h3 className="text-[30px]">Step 1:Choose your bases</h3>
      <ul className="cursor-pointer list-disc ml-10">
        {bases.map(base=>{
          let spannClass=pizza.base===base?'text-black':''
          return (
            <motion.li
             whileHover={{scale:1.1}}
             key={base} onClick={()=>addBase(base)}>
              <span className={spannClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>
      {pizza.base &&(
        <div className="next">
          <Link to='/topping'>
            <motion.button
            variants={buttonAnimat}
            initial='hidden'
            whileHover="hover"
             animate='visible'
            className="rounded-lg border border-zinc-50 px-5 mt-5 hover:bg-slate-100 transition-all hover:text-slate-950">Next</motion.button>
          </Link>
        </div>
      )}
    </motion.div>
  )
}

export default Base