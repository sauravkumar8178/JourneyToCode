import React, { useState } from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";

const myIteam = [
    {
        id: 1,
        title: 'Python',
    },
    {
        id: 2,
        title: 'JavaScript'
    },
    {
        id: 3,
        title: "C++"
    }
]

const App: React.FC = () =>{
    const [mount, setMount] = useState(true);
    return (
        <div>
            <Todo items={myIteam}/>
            <button onClick={(e) => setMount(!mount)}>Toggle</button>
            {mount ? <Counter />: ""}
        </div>
    )
}

export default App;