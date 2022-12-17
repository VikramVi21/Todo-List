import "./components.css";

const TodosTable = (props) => {
  const { todoList } = props;
  console.log(todoList);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Finish Time</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todoObj) => {
          const { id, name, description, completed, finishAt } = todoObj;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{description}</td>
              <td>{(new Date(finishAt)).toDateString()}</td>
              <td>{completed ? "Yes" : "No"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TodosTable;

const myFn = (n1, n2) => {
  console.log(n1, n2);
};

myFn(10, 20);
