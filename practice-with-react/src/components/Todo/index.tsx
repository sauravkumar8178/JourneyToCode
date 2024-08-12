import React from "react";
import TodoIteam from "./TodoIteam";
import './style.css';

interface TodoIteams {
    id: number;
    title: string;
}

interface TodoProps{
    items: TodoIteams[];
}
    
const Todo: React.FC<TodoProps> = (props) =>{
    return(
        <div className="todo-container">
            <ol>
                {
                    props.items.map(item => <TodoIteam key={item.id} title={item.title}/>)
                }
            </ol>
        </div>
    )
}

export default Todo;