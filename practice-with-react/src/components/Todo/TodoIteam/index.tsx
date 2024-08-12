import React from "react";
import './style.css';

interface TodoIteamProps {
    title: string;
}

const TodoIteam: React.FC<TodoIteamProps> = (props) =>{
    return (
        <li>{props.title}</li>
    )
}

export default TodoIteam;