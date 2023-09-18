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
      x:0
    }
  }
  return (
    <motion.div
        variants={containerVarient}
        initial='hidden'
         animate='visible'
         transition={{delay:0.3,duration:0.3,type:'spring',stiffness:500}} 
         className="">
      <h3 className="text-[30px]">Step 1:Choose your bases</h3>
      <ul className="cursor-pointer list-disc ml-10">
        {bases.map(base=>{
          let spannClass=pizza.base===base?'text-black':''
          return (
            <li key={base} onClick={()=>addBase(base)}>
              <span className={spannClass}>{base}</span>
            </li>
          )
        })}
      </ul>
      {pizza.base &&(
        <div className="next">
          <Link to='/topping'>
            <motion.button
             initial={{x:'-100vw',opacity:0}}
             animate={{x:0,opacity:1}}
             transition={{type:'spring',stiffness:120}} 
             className="rounded-lg border border-zinc-50 px-5 mt-5 hover:bg-slate-100 transition-all hover:text-slate-950">Next</motion.button>
          </Link>
        </div>
      )}
    </motion.div>
  )
}

export default Base