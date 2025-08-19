//Contains the logic for fetching an image poke api idk if dynamic yet or static 
function CardShuffleContainer({pokeData, /* unused handleChange*/}) {
    if (!pokeData.length) return <div>Loading...</div>;

    return (
        <div className="mainBody">
            <div className="cardContainer">
                <div className="card">
                    <img src={pokeData[0].sprite} alt={pokeData[0].name}/>
                    <p> {pokeData[0].name.charAt(0).toUpperCase() + pokeData[0].name.slice(1)}</p>
                </div>
                <div className="card">
                    <img src={pokeData[1].sprite} alt={pokeData[1].name}/>
                </div>
                <div className="card">
                    <img src={pokeData[2].sprite} alt={pokeData[2].name}/>
                </div>
                <div className="card">
                    <img src={pokeData[3].sprite} alt={pokeData[3].name}/>
                </div>
                <div className="card">
                    <img src={pokeData[4].sprite} alt={pokeData[4].name}/>
                </div>
                <div className="card">
                    <img src={pokeData[5].sprite} alt={pokeData[5].name}/>
                </div>
            </div>
        </div>
    )
}

export {CardShuffleContainer}