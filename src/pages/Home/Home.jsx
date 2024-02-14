import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  const [data, setData] = useState()
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((data)=>setData(data))
    },[])


  return (
    <div>
        <h1 className='text-center mb-5'>Products</h1>
          <div className="container">
            <div className="row">
              {data && data.map((item, index) => (
                <div className="col-md-4" key={index}>
           <div className="card" style={{'width' : '18rem;'}}>
                    <img className="img card-img-top" src={item.image}/>
                    <div className="card-body">
                      <h5 className="card-title">{item.title.slice(0,15)}</h5>
                      <p className="card-text">{item.description.slice(0,30)}</p>
                      <Link to={`/product-detail/${item.id}`} className='btn btn-primary'>more</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        




    </div>
  )
}

export default Home