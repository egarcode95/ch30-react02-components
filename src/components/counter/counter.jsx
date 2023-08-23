import { useState } from "react"

const Counter = () => {

    console.log("Estoy dentro del componente counter")

   // let counterValue = 100;


   const [counterValue, setCounter]= useState(100);

    const handleIncrement = (event) =>{
        //console.log(event);
        console.log("Estoy en fnc Increment");
        setCounter(counterValue + 1)
        console.log("Contador "+ counterValue);
        
        
    }
    
    const handleDecrement = (e)=>{
        //console.log(e)
        console.log("Estoy en fnc Decrement");
        
        setCounter(counterValue - 1)
        console.log("Contador " + counterValue)
    }


    return (
        <>

            <p>Contador : {counterValue}</p>
            <button onClick={handleDecrement} >Decrementar</button>
            <button onClick={handleIncrement} >Incrementar</button>
            <button onClick={()=>setCounter(100)} >Reset</button>
        </>
    )
}

export default Counter