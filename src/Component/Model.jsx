import React from 'react'
import { AnimatePresence ,motion} from "framer-motion"
import { Link } from 'react-router-dom'
const backdrop={
     visible:{opacity:1},
     hidden:{opacity:0}
}
const model={
     hidden:{
          y:'-100vh',
          opacity:0
     },
     visible:{
          y:'0px',
          opacity:1,
          transition:{delay:0.5}
     }
}
const Model = ({show,setShow}) => {
  return (
     <AnimatePresence mode='sync' >
         {show && (
           <motion.div 
           variants={backdrop}
           initial='hidden'
           animate='visible'
           className='w-full h-full bg-[#000]/80 fixed top-0 left-0 z-10 flex justify-center items-star'>
               <motion.div
               variants={model}
               initial='hidden'
               animate='visible' 
               className='max-w-[400px] h-fit px-4 py-5 text-center bg-white rounded-lg shadow-lg text-black'>
                    <p>Want to make another pizza?</p>
                    <Link to='/'>
                        <button   className="rounded-lg border border-black px-5 mt-5 hover:bg-purple-500 transition-all hover:text-white">Star Again</button> 
                    </Link>
               </motion.div>
           </motion.div>
         )}

     </AnimatePresence>
  )
}

export default Model