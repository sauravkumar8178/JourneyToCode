import React, { useEffect, useState } from "react";
import axios from "axios";

interface TodoItem {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

const DataFetch: React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    // By using fetch function 
    /* useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTodos(data as TodoItem[]));
    }, []); */

    // By using axios
    useEffect(() => {
        axios
            .get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos')
            .then((response) => setTodos(response.data));
    }, []);

    return (
        <div>
            DataFetch
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default DataFetch;
