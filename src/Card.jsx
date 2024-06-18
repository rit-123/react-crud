import React from 'react'
import { useState } from 'react'


const Card = ({heading, description, imgSRC}) => {

    const [showFullDescription, setShowFullDescription] = useState(false); // false here is the default value

    if (!showFullDescription) {
        description = description.substring(0, 100) + '...';
    }

    return (
    <div className='card'>
        <img alt=''className= 'card-image' src={imgSRC} ></img>
        <h1>{heading}</h1>
        <p>{description}</p>
        <button className='text-indigo-500' onClick={() => setShowFullDescription(!showFullDescription) }> {showFullDescription ? 'show less' : 'show more'}</button>
    </div>
    )
}

export default Card
