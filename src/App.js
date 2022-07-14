import './App.css';
import './style.css';
import { useEffect, useState } from 'react';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        return response.json();
      })
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div class='container'>
      {
        characters && characters.length >= 1 ? characters.map((character, index) => {
          return (
            <div key={character.name + '-' + index} class='card'>
              <div >
                <img class='image' src={character.image} alt={'Image of' + character.name}/>
              </div>
              <h2> {character.name} </h2>
              <p> {character.location.name} </p>
            </div>
          );
        }) : null
      }
    </div>
  );
}

export default App;
