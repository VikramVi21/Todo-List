import { useState } from "react";

const AddTodoForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [finishDate, setFinishDate] = useState('');
const [completed, setCompleted] = useState(false);

  const { handleTodoListUpdate } = props;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFinishDate = (e) => {
    console.log(e);
    setFinishDate(e.target.value);
  };

  const handleCompletedChange= (e) => {
    setCompleted(e.target.checked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
        name,
        description,
        finishAt: finishDate,
        completed
    }
    handleTodoListUpdate(obj);
    setName("");
    setDescription("");
    setFinishDate("");
    setCompleted(false);

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-with-label">
        <label for="name">Name</label>
        <input id="name" value={name} onChange={handleNameChange}/>
      </div>
      <div className="input-with-label">
        <label for="description">Description</label>
        <input id="description" value={description} onChange={handleDescriptionChange}/>
      </div>
      <div className="input-with-label">
        <label for="finishDate">Finish Date</label>
        <input id="finishDate" type="date" value={finishDate} onChange={handleFinishDate}/>
      </div>
      <div >
        <label for="completed">Completed</label>
        <input id="completed" type="checkbox" value={completed} onChange={handleCompletedChange}/>
      </div>
      <input type="submit" />
    </form>
  );
};

export default AddTodoForm;
