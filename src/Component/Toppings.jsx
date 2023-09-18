import { Link } from "react-router-dom"


const Toppings = ({addToppings,pizza}) => {
    let toppings=['mushrooms','peppers','onions','olives','extra chees','tomates']

  return (
    <div>
      <h1>Step 2:choose Toppings</h1>
      <ul className="cursor-pointer list-disc ml-10">
        {toppings.map(toping=>{
          // eslint-disable-next-line react/prop-types
          let spanClass=pizza.toppings.includes(toping)?'ml-4':''
          return(
            <li key={toping} onClick={()=>addToppings(toping)}>
              <span className={spanClass}>{toping}</span>
            </li>
          )
        })}
      </ul>
      <Link to='/order'>
        
            <button className="rounded-lg border border-zinc-50 px-5 mt-5 hover:bg-slate-100 transition-all hover:text-slate-950">Order</button>
         
      </Link>
    </div>
  )
}

export default Toppings