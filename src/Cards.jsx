import React, { useState } from 'react'
import Card from './Card.jsx'
import profilepic from './assets/turtles.jpeg'
import camelpic from './assets/camel.jpeg'

const Cards = () => {
    const [toShow, setToShow] = useState(1);

  return (
    <div className="card-container">
      { toShow ? <Card imgSRC= {profilepic} heading='Turtle' description='Turtles are reptiles that belong to the order of “Testudines” vertebrates and are spread across the aquatic bodies of every continent except Antarctica. They are the most common species found in the ocean after fish. There are more than 300 species of turtles including groups of tortoises and terrapins varying in size, shape and colour1. Turtles are known for moving very slowly and are generally opportunistic omnivores25. They have survived and thrived for many millions of years, colonising every continent except Antarctica, and inhabiting every ocean but the Arctic and Antarctica.' /> : <Card imgSRC={camelpic} heading='Camel' description='A camel is a large, hump-backed mammal known for its ability to go for long periods without drinking12345. There are two types of camels: Dromedary camels, which have one hump. Bactrian camels, which have two humps3'></Card> }
        <button onClick={() => setToShow(!toShow)}>click me</button>
    </div>
  )
}

export default Cards
