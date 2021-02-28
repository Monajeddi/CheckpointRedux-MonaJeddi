import './App.css';
import React, {useState} from 'react';

import TodoList from './component/TodoList';
import AddToDo from './component/AddToDo/AddToDo';
import Filter from './component/Filter/Filter';


function App() {

  

   
   const [filtredList, setFiltredList] = useState([])
   const [filterStatus, setFilterStatus] = useState("")
  
  return (
    <div className="App">
      <AddToDo/>
      
      <Filter setFiltredList={setFiltredList} filterStatus={filterStatus} setFilterStatus={setFilterStatus} />

      <TodoList filtredList={filtredList} filterStatus={filterStatus}/>
    </div>
  );
}

export default App;
