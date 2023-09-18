import {motion} from 'framer-motion'
import {GiFullPizza} from 'react-icons/gi'
const Header = () => {
  return (
   <motion.header
     initial={{y:-80,opacity:0}}
     animate={{y:0,opacity:1}} 
     transition={{delay:0.3,duration:0.3,type:'spring',stiffness:500}}
     className='flex items-center gap-4 text-white text-lg pb-4'>
     <div>
        <GiFullPizza size={50}/>
    </div>
     <div className=''>
          <h1>Pizza joint</h1>
     </div>
   </motion.header>
  )
}

export default Header