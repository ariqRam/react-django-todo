import { useState } from "react";
import mockupDb from '../static/mockupDb.json';
import Axios from 'axios';
import { useEffect } from "react";

const TodoInput = (props) => {
    const [newTodo, setNewTodo] = useState({});

    const handleChange = (event) => {
        const lastTodo = mockupDb[mockupDb.length - 1];
        setNewTodo({ id: mockupDb ? lastTodo.id + 1 : 1, title: event.target.value, description: 'Please do it', completed: false });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMockupDb = [...mockupDb, newTodo];
        console.log('submit!!');
        Axios.post('http://localhost:8000/mockup/', newMockupDb)
            .then(res => {
                console.log(res);
            });
        setNewTodo({});
        // console.log(newTodo);
        props.initializeTodos();
    }

    useEffect(() => {

    }, [newTodo]);

    return (
        <>
            <form>
                <input type="text" placeholder="Enter a new todo list . . ." onChange={handleChange} value={newTodo['title']} />
                <input type="submit" onClick={handleSubmit} />
            </form>
        </>
    );
}

export default TodoInput;