import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const {
    todos,
    editingId,
    editText,
    setEditText,
    addTodo,
    deleteTodo,
    startEdit,
    saveEdit,
    cancelEdit,
    toggleComplete,
  } = useTodos();

  return (
    <div className="todo-app">
      <TodoInput onAddTodo={addTodo} />
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
    </div>
  );
}

export default App;
