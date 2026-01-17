import "./App.css";
import { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { useTodos } from "./hooks/useTodos";
import Filter from "./Components/Filter";

function App() {
  const {
    todos,
    filter,
    changeFilter,
    editingId,
    editText,
    setEditText,
    addTodo,
    deleteTodo,
    startEdit,
    saveEdit,
    cancelEdit,
    toggleComplete,
    clearCompleted,
    activeCount,
  } = useTodos();

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`todo-app ${darkMode ? "dark" : ""}`}>
      <h2>Todo App</h2>
      <label className="dark-toggle" aria-label="Toggle dark mode">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider" />
      </label>

      <TodoInput onAddTodo={addTodo} />
      <Filter filter={filter} setFilter={changeFilter} />
      <TodoList
        todos={todos}
        editingId={editingId}
        editText={editText}
        setEditText={setEditText}
        onStartEdit={startEdit}
        onSaveEdit={saveEdit}
        onDelete={deleteTodo}
        onToggleComplete={toggleComplete}
        onCancelEdit={cancelEdit}
        className="todo-list"
      />
      <div className="footer">
        <span className="active-count">{activeCount} items left</span>
        <button className="clear-btn" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default App;
