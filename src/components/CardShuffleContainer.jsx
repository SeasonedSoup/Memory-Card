//Contains the logic for fetching an image poke api idk if dynamic yet or static 
function CardShuffleContainer({pokeData, handleChange}) {
    if (!pokeData.length) return <div>Loading...</div>;
   
    return (
        <div className="mainBody">
            <div className="cardContainer">
                <button className="card" onClick={() => handleChange(pokeData[0].name)}>
                    <img src={pokeData[0].sprite} alt={pokeData[0].name}/>
                    <p> {pokeData[0].name.charAt(0).toUpperCase() + pokeData[0].name.slice(1)}</p>
                </button>
                <button className="card" onClick={() => handleChange(pokeData[1].name)}>
                    <img src={pokeData[1].sprite} alt={pokeData[1].name}/>
                    <p> {pokeData[1].name.charAt(0).toUpperCase() + pokeData[1].name.slice(1)}</p>
                </button>
                <button className="card" onClick={() => handleChange(pokeData[2].name)}>
                    <img src={pokeData[2].sprite} alt={pokeData[2].name}/>
                    <p> {pokeData[2].name.charAt(0).toUpperCase() + pokeData[2].name.slice(1)}</p>
                </button>
                <button className="card" onClick={() => handleChange(pokeData[3].name)}>
                    <img src={pokeData[3].sprite} alt={pokeData[3].name}/>
                    <p> {pokeData[3].name.charAt(0).toUpperCase() + pokeData[3].name.slice(1)}</p>
                </button>
                <button className="card" onClick={() => handleChange(pokeData[4].name)}>
                    <img src={pokeData[4].sprite} alt={pokeData[4].name}/>
                    <p> {pokeData[4].name.charAt(0).toUpperCase() + pokeData[4].name.slice(1)}</p>
                </button>
                <button className="card">
                    <img src={pokeData[5].sprite} alt={pokeData[5].name}/>
                    <p> {pokeData[5].name.charAt(0).toUpperCase() + pokeData[5].name.slice(1)}</p>
                </button>
            </div>
        </div>
    )
}

export {CardShuffleContainer}