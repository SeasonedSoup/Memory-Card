import { useState } from "react";

function ScoreCounter() {
    const [score, setScore] = useState(10)
    const [highScore, setHighScore] = useState(score)
    function increaseScore() {
        const newScore = score + 1
        setScore(newScore)
        setHighScore(newScore)
        console.log(score)
    }
    return (
        <div className="scoreSection">
            <p className="score">Score: {score} </p>
            <p className="highScore">Highscore: {highScore}  </p>
            <button onClick={increaseScore}>Increase Score Test by 1</button>
        </div>
    )
}

export {ScoreCounter}