//Contains the logic for fetching an image poke api idk if dynamic yet or static 
function CardShuffleContainer({sprites}) {
    return (
        <div className="mainBody">
            <div className="cardContainer">
                <div className="card"><img src={sprites[0]} alt="pokemon" /></div>
                <div className="card"><img src={sprites[1]} alt="pokemon"/></div>
                <div className="card"><img src={sprites[2]} alt="pokemon"/></div>
                <div className="card"><img src={sprites[3]} alt="pokemon"/></div>
                <div className="card"><img src={sprites[4]} alt="pokemon"/></div>
                <div className="card"><img src={sprites[5]} alt="pokemon"/></div>
            </div>
        </div>
    )
}

export {CardShuffleContainer}

//6 containers?