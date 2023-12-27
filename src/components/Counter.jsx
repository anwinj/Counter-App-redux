import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/countSlice'

function Counter() {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.countReducer.count)
  const [amount,setAmount] = useState("")
  const handleIncrement =()=>{
    if(amount===""){
      alert("Please Enter amount!!!!")
    }
    else{
      dispatch(incrementByAmount(Number(amount)))
    }
  }

  return (
    <div style={{width:'500px'}} className='border rounded-5 p-5 text-center'>
        <h1 style={{fontSize:'100px'}}>{count}</h1>
        <div className='d-flex justify-content-evenly align-items-center mt-5'>
            <button onClick={()=>dispatch(decrement())} className='btn btn-outline-warning'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-outline-success'>Increment</button>
        </div>

        <div className='d-flex justify-content-evenly align-items-center mt-5'>
          <input type="text" className='form-control' placeholder='Increment Amount' onChange={e=>setAmount(e.target.value)} value={amount}/>
          <button className='btn btn-primary ms-3 w-100' onClick={handleIncrement}>Incement By Amount</button>
        </div>
    </div>
  )
}

export default Counter