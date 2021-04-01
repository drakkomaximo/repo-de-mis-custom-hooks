import { useState } from "react"


export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState)

    const incrementCounter = ( factor = 1 ) =>{
        setCounter(counter + factor)
    }

    const decrementCounter = ( factor = 1 ) =>{
        setCounter(counter - factor)
    }

    const resetCounter = () =>{
        setCounter(initialState)
    }

    return {
        counter,
        incrementCounter,
        decrementCounter,
        resetCounter
    }
}
