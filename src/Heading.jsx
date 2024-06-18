import React from 'react'
import { createContext, useContext } from 'react'
import { RandomContext } from './pages/HomePage'

const Heading = () => {
  const heading = React.useContext(RandomContext);
  return <h1 className='mb-4 text-4xl font-sans font-extrabold text-red-600 text-center'>{heading}</h1>

}

export default Heading
