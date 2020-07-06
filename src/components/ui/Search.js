import React, {useStates}  from 'react'
import '../../styles/search.css'

const Search = () => {
  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Procure'
        ></input>
      </form>
    </section>
  )
}

export default Search
