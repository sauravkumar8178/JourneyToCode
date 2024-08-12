import React, {useState, useEffect} from "react";
import "./style.css";


const Counter: React.FC = () =>{
    const [counter, setCounter] = useState(0);

    useEffect(() =>{
        console.log('Counter Mount');

        // When the component is unmount, useEffect return the function.
        return function (){
            console.log('Unmount Counter');
        }
    }, []);

    // Empty Dep. Array means -> Whole Component
    // If dep has some value

    useEffect(() =>{
        console.log('User update count', counter);

        return () =>{
            console.log('Count UseEffect Return', counter)
        }
    }, [counter])
    
    const handleIncrement = () =>{
        setCounter( counter + 1);
    };
    
    const handleDecrement = () =>{
        if( counter === 0) return;
        setCounter(counter - 1);
    }
    
    return(
        <div className="counter-container">
            <h1>{counter}</h1>
            <button onClick={handleIncrement} style={{background: "lightgreen"}}>INC</button>
            <button onClick={handleDecrement} style={{background: "tomato"}}>DEC</button>
            
        </div>
    )
}

export default Counter;