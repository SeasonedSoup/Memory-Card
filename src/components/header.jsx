import pokeballImg from '../assets/pokeball.png';

import '../styles/styles.css'
function Header() {
    return (
        <div className="headerBg">
            <h1 className='gameTitle'>Poke-Memory Game  </h1>
            <img className='pokeball' src={pokeballImg} alt="Poke-Ball Logo" />
        </div>
    )
}

export {Header}