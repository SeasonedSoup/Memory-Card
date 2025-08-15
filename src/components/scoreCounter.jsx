function ScoreCounter({score}) {
    return (
        <div className="scoreSection">
            <p className="score">Score: {score} </p>
            <p className="highScore">Highscore: {score}  </p>
        </div>
    )
}

export {ScoreCounter}