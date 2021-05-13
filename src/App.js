import { useState } from 'react'
import './App.css'
import Card from './Card'
import pokemons from './data.json'

export default function App() {
  const [isDarmode, setIsDarkmode] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setIsDarkmode(!isDarmode)}>Toggle darkmode</button>
      {pokemons.map(pokemon => {
        const { name, images, types, id } = pokemon
        return (
          <Card
            key={id}
            id={id}
            isDarkmode={isDarmode}
            name={name}
            images={images}
            types={types}
          />
        )
      })}
    </div>
  )
}
