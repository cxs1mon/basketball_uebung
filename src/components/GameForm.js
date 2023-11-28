import React, { useState } from 'react';
import './gameform.css'

export default function GameForm() {


    const [points, setPoints] = useState(0);

    function onClick() {
    setPoints(points + 1)
}

    return(
        <>
            <form>
                <label>Player: </label>
                <input type="text"/>
                <label>Points</label>
                <input readOnly={true} type="text" value={points}/>
                <button onClick={onClick}>Werfen</button>
            </form>
        </>
    )
}