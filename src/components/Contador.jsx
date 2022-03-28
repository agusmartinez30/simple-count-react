import React from 'react'
import { useState } from 'react'

import './Contador.css'

const Contador = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
        console.log(count);
    }

    const handleReset = () => {
        setCount(0)
        console.log(count);
    }


  return (
    <div className='container-count'>
        <h2>{count}</h2>
        <div className='container-btn'>
          <button onClick={handleClick}><span>Aumentar</span></button>
          <button onClick={handleReset} ><span>Reset</span></button>
        </div>
          </div>
  )
}

export default Contador