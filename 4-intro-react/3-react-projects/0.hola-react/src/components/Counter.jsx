import React from 'react'
import { useState } from 'react'

function Counter() {

    /* const state = useState(0)
    const numberCount = state[0]
    const setNumberCount = state[1] */

    const [numberCount, setNumberCount] = useState(0)

    /* let number = 0

    function sumar (){
        console.log(number)
        number = number + 1
    } */

    function sumar() {
        setNumberCount(numberCount + 1)
    }
    function restar() {
        setNumberCount(numberCount - 1)
    }

    return (
        <>
            <button onClick={restar}>Decrementar</button>
            <h1>{numberCount}</h1>
            <button onClick={sumar}>Incrementar</button>
        </>
    )
}

export default Counter