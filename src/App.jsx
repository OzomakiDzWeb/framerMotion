import { useState } from 'react'
import './App.css'
import { Route, Routes,useLocation } from 'react-router'
import Base from './Component/Base'
import Toppings from './Component/Toppings'
import Order from './Component/Order'
import Home from './Component/Home'
import Header from './Component/Header'
import { AnimatePresence } from 'framer-motion'
import Model from './Component/Model'

function App() {
  const [show,setShow]=useState(false)

   const [pizza,setPitzza]=useState({base:"",toppings:[]})
   const location=useLocation()
   const addBase=(base)=>{
    setPitzza({...pizza,base})
   }
   const addToppings=(toping)=>{
    let newToppings;
    if(!pizza.toppings.includes(toping)){
      newToppings=[...pizza.toppings,toping]
    }else{
      newToppings=pizza.toppings.filter(itm=>itm!==toping)
    }
    setPitzza({...pizza,toppings:newToppings})
   }
  return (
<div className='bg-purple-500 w-full p-5 divide-y-2 h-screen flex flex-col text-white'>

    <Header/>
    <Model show={show} setShow={setShow}/>
   <div className=' h-full flex items-center justify-center'>
     <AnimatePresence onExitComplete={()=>setShow(false)}>
      <Routes location={location} key={location.key}>
       <Route path='/' element={<Home/>}/>
       <Route path='/base' element={<Base addBase={addBase} pizza={pizza}/>} />
       <Route path='/topping' element={<Toppings addToppings={addToppings} pizza={pizza}/>} />
       <Route path='/order' element={<Order  pizza={pizza} setShow={setShow}/>} />
      </Routes>
     </AnimatePresence>
   </div>
   
</div>

  )
}

export default App
