import './App.css'
import { useEffect, useState } from 'react';
import { shuffleArr } from './utils';
import { Header } from './components/header'
import { CardShuffleContainer } from './components/CardShuffleContainer'

function App() {
  const [pokeSprites, setPokeSprites] = useState([])
  
  async function fetchPokemon() {
    const pokemons = [6, 25, 150, 133, 376, 258] //pokemon id
    
    const responses = await Promise.all(pokemons.map(async pokemon => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {mode: 'cors'})
      return response.json()
    }))

    return responses
  }
  const getPokeData = (pokeData) => {
    const spriteArr = []
    let n = 0
    while (pokeData.length > n) {
      spriteArr.push(pokeData[n].sprites.front_default)
      n += 1
      console.log(n)
    }
    return spriteArr
  }
  useEffect(() => {
    async function loadPokemon() {
      const pokeData = await fetchPokemon();
      console.log(pokeData)
      const spriteArr = getPokeData(pokeData)
      setPokeSprites(spriteArr)
    }
    fetchPokemon();
    loadPokemon();
  }, [])
  console.log(pokeSprites)

  return (
    <>
      <Header/>
      <CardShuffleContainer sprites={pokeSprites}/>   
    </>
  )
}

export default App
