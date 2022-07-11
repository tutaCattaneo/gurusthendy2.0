import React from 'react'
import {useState} from 'react'

const ItemCount = ({stock,initial,onAdd,}) => {
    const [disable,setDisable]=useState(false)
    const [count, setCount] = useState(initial);

    const handleClick = () => {
        setCount(count + 1);
    }
    const decrementar = () => {
        setCount((valAnt) =>(valAnt >0 ? count - 1 : count));
    }
   

  return (
    <div className='flex justify-center'>
       <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{count}</h2>
    <div className="card-actions justify-end">
      <button onClick={handleClick} className="btn bg-white text-black">+</button>
      <button onClick={decrementar}className="btn btn-ghost bg-white text-black">-</button>
      <button onClick={()=>{
       if(stock<count){
        alert("pasaste la cuenta")
        setDisable(true)
       }else{
        onAdd(count);
        console.log(count)
       }

      }} className="btn bg-white text-black">Agregar al carrito</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ItemCount