import React, { useContext } from 'react'
import Components1 from './Components1'
import { counterContext } from '../../context/context'

const Button = () => {
    const counter = useContext(counterContext)
  return (
    <div>
        <button onClick={()=>counter.setCount(counter.count+1)}><span><Components1 /></span>I am a button</button>
    </div>
  )
}

export default Button