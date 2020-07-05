import React from 'react'
import './CharacterGrid.css';

const CharactereGrid = ({items, isLoading}) => {

  return isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
    {items.map(item => (
      <h1 key={item.id}>{item.first_name} {item.last_name}</h1>
    ))}
  </section>)
}

export default CharactereGrid
