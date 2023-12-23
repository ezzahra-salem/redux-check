import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, donepage } from "./JS/Todo";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App({ e }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [task, settask] = useState({ name: "" });
  const dispatch = useDispatch();
  const liste = useSelector((store) => store.todo) || [];
  const [next, setnext] = useState(false);
  return (
    <div className="App">
      <h1>My to do liste</h1>
      <input
        type="text"
        placeholder="my task"
        onChange={(e) => settask({ ...task, name: e.target.value })}
      />
      <button onClick={() => dispatch(addtodo(task))}>Add</button>
      <div className="list">
      {liste.map((e) => (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <h1>My Task</h1>
            <Card.Title>{e.name}</Card.Title>
            <button className="btn-del" onClick={()=>dispatch(donepage(e.name))}>Delete</button>
          </Card.Body>
          <div>
          <Button className="btn-Done" variant="primary" onClick={handleShow}>
            Done Task
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
<Modal.Header closeButton>
              <Modal.Title>SUCCESS TASK</Modal.Title>
            </Modal.Header>
            <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            <Button className="btn-add" onClick={() => setnext(!next)}>ADD NEW TASK</Button>
            {next ? ( <div>
              <input type="text" placeholder="NEW TASK" onChange={(e) => settask({task, name: e.target.value })}/>
              <button onClick={() => dispatch(addtodo(task))}>add</button>
            </div>) :null}
            <Modal.Body>
              YOUR SUCCESS TASK
              <h1>{e.name}</h1>
            </Modal.Body>
          </Modal>
        </div>
      </Card>
    ))}
    </div>
  </div>
);
}

export default App;