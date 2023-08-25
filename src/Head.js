import React from 'react'
import { Link, Outlet } from 'react-router-dom'
//import AddtoCart from './AddtoCart'
//import Signin  from './Signin'

const Head = () => {
  return (
    <div className='main_div'>
        <div className='title_div'>
            <h1>E-Commerce</h1>
        </div>
        <div className='search_div'>
            <input type="text" className='input_box'></input>
            <Link to="AddtoCart"> <button className='btn'>Search</button></Link>
            
        </div>
        <div className='sign_in'>
         <Link to="Signin">  <h3>Sign_in</h3></Link> 
         
        </div>
        <div className='cart'>
           <h3>Cart</h3>
        </div>
        <Outlet/>
    </div>
  )
}
export default Head