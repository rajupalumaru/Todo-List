import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);


  const chnageHandler = (e) => {
    setTask(e.target.value);
  }

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(task)
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");

  }
  const DeleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);

  }

  return (
    <center>
      <div className='card'>
        <div className='card-body'>
          <h5 className='Card-title'>Todo Mamagement Application</h5>
          <form onSubmit={SubmitHandler}>
            <input type='text' name='task' value={task} onChange={chnageHandler} /> &nbsp;&nbsp;
            <input type='submit' value='Add' name='Add' />
          </form>
          <TodoList todoList={todos} DeleteHandler={DeleteHandler} />
        </div>
      </div>
    </center>
  );
}

export default App;
