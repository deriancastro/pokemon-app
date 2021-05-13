import React, { useState } from 'react'
import './Card.css'

export default function Card({ name, images, types, id, isDarkmode }) {
  const [isActive, setIsActive] = useState(false)
  const [showImg, setShowImg] = useState(false)

  return (
    <section className={isDarkmode ? 'Card Card--darkmode' : 'Card'}>
      <h2>
        {name} @{id}
      </h2>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Hide' : 'show'}
      </button>
      {isActive && (
        <>
          <ul>
            {types.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
          <button onClick={() => setShowImg(!showImg)}>
            {showImg ? 'Hide photos' : 'Show photos'}
          </button>
          <div>
            {showImg && (
              <>
                <img src={images.front} alt="" />
                <img src={images.back} alt="" />
              </>
            )}
          </div>
        </>
      )}
    </section>
  )
}
