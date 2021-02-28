import React from 'react' 
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Delete_Todo, Complete_Todo } from '../Redux/Actions';
import Edit from './Edit/Edit';
import del from '../assets/ del.png';
import '../App.css';

const TodoItem = ({todo}) => {
const dispatch = useDispatch();
    return (
        <div className="list">
            
            
                
                <span className={todo.isDone ? "title" : null}  >{todo.title}</span>
                <div className="items">

                <Edit todo={todo}/>
                
                <img src={del} alt="delete" width="50px" className="items"
                onClick={() => dispatch(Delete_Todo(todo.id))}/>
                
                <Button variant="info" className="items"
                onClick={() =>dispatch(Complete_Todo(todo.id))}>
                    {todo.isDone? "UnDone" : "Done"}
                </Button>
            </div>
        </div>
    )
}

export default TodoItem
