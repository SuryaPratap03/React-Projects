import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../../context/context'

const Components1 = () => {
    const counter = useContext(counterContext)
  return (
    <div>
        {counter.count}
    </div>
  )
}

export default Components1