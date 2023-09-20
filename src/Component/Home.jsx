import { Link } from "react-router-dom"
import {motion} from 'framer-motion'

const buttonAnimat={
 hover:{
    scale:1.1,
    textShadow:"0px 0px 8px rgb(255,255,255)",
    boxShadow:"0px 0px 8px rgb(255,255,255)",
    transition:{ type: 'spring', velocity: 2 }
    },
}
const Home = () => {
  return (
    <motion.div className="font-bold"
      initial={{opacity:0}}
      animate={{opacity:1}}
       transition={{delay:0.5,duration:1.5}}>
      <h2 className="font-bold">
        Welcome to Pizza joint
      </h2>
      <Link to='/base'>
        <motion.button 
        variants={buttonAnimat} 
        whileHover="hover"
        className="rounded-[50px] border py-1 border-zinc-50 px-5  hover:bg-slate-100 mt-5 hover:text-slate-950">
          Creat your pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home