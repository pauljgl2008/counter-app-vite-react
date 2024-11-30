import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {
    console.log("render");
    const [counter, setCounter] = useState(value);
    const handleAdd = () => {
        setCounter(counter + 1);
        //setCounter((c)=> c + 1);
    }
    const handleSubtract = () => {
        setCounter(counter - 1);
        //setCounter((c)=> c + 1);
    }
    const handleReset = () => {
        setCounter(value);
        //setCounter((c)=> c + 1);
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}