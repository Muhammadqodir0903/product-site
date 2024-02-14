import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className='container'>

                <ul className='list'>
                    <li className="item bg-light">IMR</li>
                    <li className='item'>
                        <Link to='/'>Products</Link>
                    </li>
                    <li className='item'>
                        <Link to='/about'>About</Link>
                    </li>
                  <div className="search d-flex">
                  <input className='inp form-control' type="text" placeholder='Search🔎' />
                    <button className='btn btn-warning'>Ok</button>
                  </div>
                </ul>
               
            </div>
        </div>
    )
}

export default Header