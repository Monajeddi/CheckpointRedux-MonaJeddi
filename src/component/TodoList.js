import React from 'react' 
import TodoItem from './TodoItem'

import { useSelector } from 'react-redux';

const TodoList = ({ filtredList, filterStatus}) => {

    const todoList = useSelector(state => state.todo)

    return (
        <div>
          <h4>To do List</h4>
           {filterStatus === "DoneTasks" || filterStatus === "UnDoneTasks" ?
           
           filtredList.map(todo=> 
             <TodoItem key={todo.id} todo={todo} />
           ) :
           todoList.map(todo=> 
            <TodoItem key={todo.id} todo={todo} />
          )
          }
        </div>
    )
}

export default TodoList
