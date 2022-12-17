import "./App.css";
import AddTodoForm from "./components/addTodoForm";
import TodosTable from "./components/todoTable";
import todos from "./todos";
import { useState } from 'react';

function App() {

  const [myTodos, setMyTodos] = useState(todos);
  const [showForm, setShowForm] = useState(false);

  const handleTodoListUpdate = (todoObj) => {
    const myTodosCopy = [...myTodos, todoObj];
    setMyTodos(myTodosCopy);
  }

  const handleShowForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      <div className="heading">Todo-List</div>
      <button onClick={handleShowForm}>{showForm ? "Hide Form" : `Add Todo`}</button>
      {showForm && <AddTodoForm handleTodoListUpdate={handleTodoListUpdate}/>}
      <TodosTable todoList={myTodos} />
    </div>
  );
}

export default App;
