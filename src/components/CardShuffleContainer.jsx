//Contains the logic for fetching an image poke api idk if dynamic yet or static 
function CardShuffleContainer({sprites}) {
    return (
        <div className="mainBody">
            <div className="cardContainer">
                <div className="card">1 <img src={sprites} alt="ditto" /></div>
                <div className="card">2</div>
                <div className="card">3</div>
                <div className="card">4</div>
                <div className="card">5</div>
                <div className="card">6</div>
            </div>
        </div>
    )
}

export {CardShuffleContainer}

//6 containers?