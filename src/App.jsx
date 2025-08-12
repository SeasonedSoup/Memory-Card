import './App.css'
import { Header } from './components/header'
import { ScoreCounter } from './components/scoreCounter'
import { CardShuffleContainer } from './components/CardShuffleContainer'
function App() {
  return (
    <>
      <Header/>
      <ScoreCounter/>  
      <CardShuffleContainer/>
    </>
  )
}

export default App
