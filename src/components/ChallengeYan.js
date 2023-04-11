import React, { useState } from 'react';
const ChallengeYan = () => {
    let [numero, setNumero] = useState(0);
    let mais = () => {}
    let menos = () => {}
    let reset = () => {}

    return (
        <div>
            <h1>{numero}</h1><br/>
            <button onClick = {() => mais(setNumero(numero+1))}>+</button>
            <button onClick = {() => menos(setNumero(numero-1))}>-</button>
            <button onClick = {() => reset(setNumero(0))}>reset</button>

        </div>
    );

};

export default ChallengeYan;
