import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Filter.css'

const Filter = ({setFilterStatus, filterStatus, setFiltredList}) => {

    const todoList = useSelector(state => state.todo)

    useEffect(() => {
        filterTask()
    });
    
    const filterTask = () =>{
        switch(filterStatus) {
            case 'allTasks' : setFiltredList(todoList);break;
            case 'DoneTasks' :setFiltredList(todoList.filter(task => task.isDone === true));break;
            case 'UnDoneTasks' :setFiltredList(todoList.filter(task => task.isDone === false));break;
            default: return todoList

        }
    }
    return (
        <div className="filter">
            <Button variant="light"
            onClick={() => setFilterStatus('allTasks')}
            >All Tasks</Button> 

            <Button variant="light"
            onClick={() => setFilterStatus('DoneTasks')}
            >Done Tasks</Button> 
            
            <Button variant="light"
            onClick={() => setFilterStatus('UnDoneTasks')}
            >  UnDone Tasks</Button> 
            
        </div>
    )
}

export default Filter
