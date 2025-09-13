import { useState } from "react";
import "./App.css";
import { HEADERNAV } from "./components/header-nav";
import { TaskInput } from "./components/task-input";
import { Taskview } from "./components/task-view";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null); // store object { text, index }

  // Add or Update task
  const addTask = (newTask) => {
    if (taskToEdit !== null) {
      // update existing task
      const updatedTasks = tasks.map((t, i) =>
        i === taskToEdit.index ? newTask : t
      );
      setTasks(updatedTasks);
      setTaskToEdit(null); // reset after editing
    } else {
      // add new task
      setTasks([...tasks, newTask]);
    }
  };

  // Clear all tasks
  const onClearAll = () => {
    setTasks([]);
  };

  // Delete one task
  const singleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Prepare edit
  const onEdit = (task, index) => {
    setTaskToEdit({ text: task, index }); // store both task and index
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <HEADERNAV />
        </div>

        <div className="addTask">
          <TaskInput onAddTask={addTask} taskToEdit={taskToEdit?.text || ""} />
        </div>

        <div className="showTask">
          <Taskview
            tasks={tasks}
            onClearAll={onClearAll}
            singleDelete={singleDelete}
            onEdit={onEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

