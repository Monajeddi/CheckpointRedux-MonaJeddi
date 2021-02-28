import React , {useState} from 'react'
import { Form , Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Add_Todo } from '../../Redux/Actions';
import ad from '../../assets/ad.png';
import './AddToDo.css'



const AddToDo = () => {
    const [inputTitle, setInputTitle] = useState("")

    const dispatch = useDispatch()
    return (
        <div className="add">
            <Form.Control type="text" placeholder="Add a task"
            onChange={(e) => setInputTitle(e.target.value)}
            value={inputTitle}
            />
            {/* <Button variant="info" */}
            <img src={ad} alt="add" width="50px"
            onClick={() => 
                dispatch(Add_Todo({id: Math.random(),
                title: inputTitle ,
                isDone: false}))}
           />
            {/* Add</Button> */}
        </div>
    )
}

export default AddToDo
