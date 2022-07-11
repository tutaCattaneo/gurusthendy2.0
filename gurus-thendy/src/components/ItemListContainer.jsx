import React,{useState,useEffect}from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'


const ItemListContainer = ({greeting}) => {
  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }
    // More products...
  ]
   const [load,setLoad]=useState(true)


    useEffect(()=>{
      setTimeout(setLoad,2000,false);
      console.log("useEffect");
    },[]);



  return (
    <div>
      {greeting}
      <ItemCount 
      stock={5}
      initial={1}
      onAdd={(n)=>alert(`Agregados ${n} productos`)}/>
         {load ?(<h1>CARGANDO</h1>):(<ItemList items={products}/>)}
    </div>
  )
}

export default ItemListContainer