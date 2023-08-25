import React, { useEffect, useReducer } from 'react'
// import { Link, Outlet } from 'react-router-dom';
//import { AddtoCart } from './AddtoCart';
// import Cart from './Cart'

const intialValue= {
    positiveRespons:[],
    negativeRespons:[],
    isLoding:true,
  }

  const reducer=(state,action)=>{

    switch(action.type){
      case "positive":
      return {
        positiveRespons:action.payload
      }
      case "negative":
        return{negativeRespons:[]}
        default:
          return state
    }
  }

const AddtoCart = () => {
    console.log()

  const[states,dispatch]=useReducer(reducer,intialValue)

console.log(states.positiveRespons)


useEffect(() => {
fetch("https://fakestoreapi.com/products")
.then((response)=>response.json())
.then((response)=>{
try{
  dispatch({type:"positive",
  payload:response
})
}
catch{
  dispatch({type:"negative",
  payload:response
})
}
})

},[])
  return (
    <div className='outerDiv'>{
        states.positiveRespons.map((value)=>{
            return(
                <>
                <div className='collections'>
                <img src={value.image} alt="dress collection" width="150px" height="150px"></img>
                <h3>{value.title}</h3>
                <h2>{value.category}</h2>
                <p>{value.price}</p>
                <p className='rate'>{value.rating.rate}</p>
                <p>{value.description}</p>
                <button>Add to cart</button>
                </div>

                </>
            )
        })
        }</div>
  )
  
}

export default AddtoCart