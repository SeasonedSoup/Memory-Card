import './App.css'
import { useState, useEffect } from 'react';

import { Header } from './components/header'
import { ScoreCounter } from './components/scoreCounter'
import { CardShuffleContainer } from './components/CardShuffleContainer'

function App() {
  const [score, setScore] = useState(0)
  const [dittoSprite, setDittoSprite] = useState("");
  //fetchpokemon

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {mode: 'cors'})
      const pokemonData = await response.json();

      const sprite = pokemonData.sprites.front_default
      console.log(sprite)
      setDittoSprite(sprite);
    }
    fetchPokemon();
  }, [])

  function increaseScore() {
    
  }


  return (
    <>
      <Header/>
      <ScoreCounter score={score}/>  
      <CardShuffleContainer sprites={dittoSprite}/>
    </>
  )
}

export default App
