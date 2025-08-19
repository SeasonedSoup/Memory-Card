import './App.css'
import { useEffect, useState } from 'react';
import { shuffleArr } from './utils';
import { Header } from './components/header'
import { CardShuffleContainer } from './components/CardShuffleContainer'

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [chosen, setChosen] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);


  function handleChange(name) {
    if (chosen.includes(name)) {
      alert('Repeated Pokemon D: Restarting Score!')
      setHighScore(Math.max(highScore, score))
      setScore(0)
      setChosen([])

      setPokeData(prev => shuffleArr(prev))
    } else {
      setChosen(prevChosen => {
        const newChosen = [...prevChosen, name]
        if(newChosen.length === pokeData.length) {
          alert("Congrats! You have remembered all the pokemon.")
        } 
        
        return newChosen
      });
      setScore(prevScore => {
        const newScore = prevScore + 1
        setHighScore(prevHighScore => Math.max(prevHighScore, newScore))
        return newScore
      })
      setPokeData(prev => shuffleArr(prev))
    }
  }


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
      spriteArr.push({sprite: pokeData[n].sprites.front_default, name: pokeData[n].name})
      n++;
    }
    console.log("spriteArr:", spriteArr[0].name)
    console.log("Sprite data", spriteArr[0].sprite)
    return spriteArr
  }

  useEffect(() => {
    
    async function loadPokemon() {
      const pokeData = await fetchPokemon();
    
      const pokeDataArr = getPokeData(pokeData)
      console.log(pokeDataArr)
      setPokeData(pokeDataArr)
    }
    loadPokemon();
  }, [])

  return (
    <>
      <Header score={score} highScore={highScore}/>
      <CardShuffleContainer pokeData={pokeData} handleChange={handleChange}/>   
    </>
  )
}

export default App
