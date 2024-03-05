import './App.css';
import Menu from './components/Menu/Menu';
import Card from './components/Card/Card';
import React, { useState, useEffect } from 'react';

function App() {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        return response.json();
      })
      .then((data) => {
        const pokemonPromises = data.results.map(result =>
          fetch(result.url).then(response => response.json())
        );
        Promise.all(pokemonPromises)
          .then(pokemonDetails => {
            setPokemonData(pokemonDetails);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='menu'>
          <Menu></Menu>
        </div>
        <div className="Card">
          {pokemonData.map((pokemon, index) => (
            <Card
              key={index}
              title={pokemon.name}
              description={`Pokémon número ${index + 1} en el Pokédex nacional.`}
              imageUrl={pokemon.sprites.front_default}
            ></Card>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
