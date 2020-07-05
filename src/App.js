import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characterGrid/CharactereGrid';

import './App.css';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( async ()=> {
    const fetchItems = async () => {
      const result = await axios(`https://www.balldontlie.io/api/v1/players`);


      setItems(result.data.data)
      setIsLoading(false)
    }

    fetchItems()
  }, []);

  return (
    <div className="container">
      <Header/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
