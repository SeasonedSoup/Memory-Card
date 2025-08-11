import pokeballImg from '../assets/pokeball.png';

import '../styles/styles.css'
function Header() {
    return (
        <div className="headerBg">
            <div className="textWrapper">
                <h1 className='gameTitle'>Poke-Memory Game  </h1>
                <p className='gameTip'>Memory Game! Get a point for every single unique pokemon card you have picked. Resets when choosing a duplicate.</p>
            </div>
            <img className='pokeball' src={pokeballImg} alt="Poke-Ball Logo" />
        </div>
    )
}

export {Header}