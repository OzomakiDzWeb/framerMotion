import { Link } from "react-router-dom"
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div>
      <motion.h2
      className="font-bold"
      initial={{y:'100vh',opacity:0}}
      animate={{y:0,opacity:1}}
       transition={{delay:0.3,duration:0.3,type:'spring',stiffness:500}}>
      
        Welcome to Pizza joint
      </motion.h2>
      <Link to='/base'>
        <motion.button  
         initial={{y:'100vh',opacity:0}}
         animate={{y:0,opacity:1}}
         transition={{duration:0.3,type:'spring',stiffness:500}}
         whileHover={{scale:1.1,
        textShadow:"0px 0px 8px rgb(255,255,255)",
        boxShadow:"0px 0px 8px rgb(255,255,255)",}}
         className="rounded-[50px] border py-1 border-zinc-50 px-5 mt-5hover:bg-slate-100 mt-5 hover:text-slate-950">
          Creat your pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home