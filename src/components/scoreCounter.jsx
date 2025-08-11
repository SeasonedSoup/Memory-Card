import { useState } from "react";

function ScoreCounter() {
    return (
        <div className="scoreSection">
            <p className="score">Score: </p>
            <p className="highScore">Highscore: </p>
        </div>
    )
}

export {ScoreCounter}