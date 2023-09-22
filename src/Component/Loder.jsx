import React from 'react'
import {motion} from 'framer-motion'
const LoderVarint={
     animatOne:{
          x:[-20,20],
          y:[0,-30],
          transition:{
               x:{
                    repeatType: 'mirror',
                    repeat:Infinity,
                    duration:0.5
               },
               y:{
                    repeatType: 'mirror',
                    repeat:Infinity,
                    duration:0.25,
                    ease:'easeOut'
               }
          }
     }
}
const Loder = () => {
  return (
    <motion.div

    variants={LoderVarint}
    animate='animatOne'

    className='bg-white rounded-full w-4 h-4 mt-10'>

    </motion.div>
  )
}

export default Loder