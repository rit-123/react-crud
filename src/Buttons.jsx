import React from 'react'
import Button from './Button.jsx'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "X", 0, "Y"]
const Buttons = () => {
  return (
    <div className='flex justify-center'>
        <div className='calculator-grid'>
        {numbers.map( function (number) {
            return (number != "X" && number != "Y")? <Button key={number} number={number} /> : <Button key={number}/>
        })}
        </div>
    </div>
  )
}

export default Buttons
