import {useState} from 'react'
import React from 'react'


export default function Counter (){
    const [count,setCount] = useState(0)
   const minusOne = ()=> {setCount(count-1)}
    const addOne = () => {setCount(count+1)}
    const reset = () => {setCount(0)}
    const Checkcount = () =>{
        if (count>0){
            return minusOne()
        }
        else{
            return reset()
        }
    }


    return (<counter>
    <h3>Count: {count}</h3>
    <button onClick={Checkcount}>-</button>
    <button onClick={reset}>Reset</button>
    <button onClick={addOne}>+</button>

    </counter>
    )
}