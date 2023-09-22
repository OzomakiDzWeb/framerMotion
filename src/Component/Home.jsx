import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import Loder from "./Loder"

const buttonAnimat={
 hover:{
    scale:1.1,
    textShadow:"0px 0px 8px rgb(255,255,255)",
    boxShadow:"0px 0px 8px rgb(255,255,255)",
    transition:{ type: 'spring', velocity: 2 }
    },
}
const containerVariant={
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{delay:0.5,duration:0.5}
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
}
const Home = () => {
  return (
    <motion.div className="font-bold flex flex-col justify-center items-center"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
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
      <Loder/>
     </motion.div>
  )
}

export default Home