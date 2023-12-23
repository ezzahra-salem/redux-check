import { useState } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { addtask, donepage } from "./JS/Todo";

function App({ e }) {
  const dispatch = useDispatch();
  const task = useSelector((store) => store.todo);
  const [done, settask] = useState({ name: "" });

  return (
    <div className="App-header">
      <h1>welcom to my todo list</h1>
      <div className="card">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <div className="text">
              <input
                type="searsh"
                placeholder="YOUR TASK"
                onChange={(e) => settask({ done, name: e.target.value })}
              />
              <button onClick={() => dispatch(addtask(done))}>ADD</button>
            </div>
            <Card.Text>
              <ul className="todo-list">
                {task.map((e) => (
                  <li className="todo-item" key={e.name}>
                    <label>{e.name}</label>
                    <button onClick={() => dispatch(donepage(e.name))}>
                      DELETE
                    </button>
                  </li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
