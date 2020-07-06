import React from 'react'
import CharectereItems from './CharectereItems';
import './CharacterGrid.css';
const CharactereGrid = ({items, isLoading}) => {

  return isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
    {items.map(item => (
      <CharectereItems key={item.id} item= {item}></CharectereItems>
    ))}
  </section>)
}

export default CharactereGrid
