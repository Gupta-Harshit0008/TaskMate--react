import { useState, useEffect } from "react";

export const TaskInput = ({ onAddTask, taskToEdit }) => {
  const [inputValue, setInputValue] = useState("");

  // if taskToEdit changes, prefill the input
  useEffect(() => {
    if (taskToEdit) {
      setInputValue(taskToEdit);
    }
  }, [taskToEdit]);

  const addTask = (event) => {
    event.preventDefault();
    const task = inputValue.trim();
    if (task) {
      onAddTask(task);
      setInputValue(""); // clear after add
    }
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">
          {taskToEdit ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};
