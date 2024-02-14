import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'

function Product() {
  const [product, setProduct] = useState({})
const {id} = useParams()
  

console.log(id);
useEffect(()=>{
fetch(`https://fakestoreapi.com/products/${id}`)
.then((res)=>res.json())
.then((data)=> setProduct(data))
},[])
  return (

    <div className='product__info'>
      
      <img src={product.image} alt={product.title}/>
      <h1>{ product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default Product