import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Base from './Component/Base'
import Toppings from './Component/Toppings'
import Order from './Component/Order'
import Home from './Component/Home'
import Header from './Component/Header'

function App() {
  const [count, setCount] = useState(0)
   const [pizza,setPitzza]=useState({base:"",toppings:[]})
   
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
   <div className=' h-full flex items-center justify-center'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/base' element={<Base addBase={addBase} pizza={pizza}/>} />
      <Route path='/topping' element={<Toppings addToppings={addToppings} pizza={pizza}/>} />
      <Route path='/order' element={<Order  pizza={pizza}/>} />
   </Routes>
   </div>
   
</div>

  )
}

export default App
