import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';

const ToDo = () => {
    const [item, setItem] = useState('');
    const [todo, setTodo] = useState([]);
    const [showalert, setShowAlert] = useState(false);
    const [showsuccess, setShowSuccess] = useState(false);
    const handleClose = () =>{
        setShowAlert(false);
        setShowSuccess(false);
    }
    const toDoList = () =>{
        if(item.trim() === ''){
            setShowAlert(true);
            return;
        }
        setTodo(todo.concat(item));
        if(item.trim() !== ''){
            setShowSuccess(true);
        }
        setItem('');
    }
    return(
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1 class="mb-3 mt-3 text-center">To-Do App</h1>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Please Enter To-Do item"
                            aria-label="To-Do item"
                            aria-describedby="basic-addon2"
                            value={item}
                            onChange={(e)=>setItem(e.target.value)}
                            />
                            <Button variant="primary" id="button-addon2" onClick={toDoList}>
                                Add To-Do item
                            </Button>
                        </InputGroup>
                        <div>
                            <ListGroup as="ol" numbered>
                                {todo?.map((item, index)=> <ListGroup.Item as="li">{item}</ListGroup.Item>)}
                            </ListGroup>
                        </div>

                        <Modal show={showalert} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Alert</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Please Enter To-Do Item!</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={showsuccess} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Success</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>added successful Item in To-Do List!</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ToDo;