import React,{useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { Edit_Todo } from '../../Redux/Actions';
import { useDispatch } from 'react-redux';
import edit from '../../assets/edit.png';


const Edit = ({todo}) => {
const [show, setShow] = useState(false);
const [newTitle, setNewTitle] = useState("");

const dispatch = useDispatch();

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
        <div>
          <img src={edit} onClick={handleShow} alt="edit" width="50px"></img>
            {/* <Button variant="info" onClick={handleShow}>Edit</Button> */}
     <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Edit task</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form.Group >
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter the new Title" 
    onChange={(e) => setNewTitle(e.target.value)}
    value={newTitle}/>
  </Form.Group>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="primary"
    onClick = {() => 
    {
      dispatch(Edit_Todo(todo.id, newTitle))
      handleClose()
    }
      }>Save changes</Button>
  </Modal.Footer>
</Modal>
        </div>
    )
}

export default Edit
