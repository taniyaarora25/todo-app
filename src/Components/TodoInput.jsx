import { useState } from "react";

export default function TodoInput({ onAddTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (!task.trim()) return;
    onAddTodo(task);
    setTask("");
  };

  return (
    <div className="input-row">
      <input
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
}
