import React from 'react'

const Button = ({number}) => {
  return (
    <button className='p-4 bg-blue-200 rounded hover:bg-red-200'>{number}</button>
  )
}

export default Button
