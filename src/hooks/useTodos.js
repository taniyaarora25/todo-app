import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "todo_app_todos";

const getInitialTodos = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};
export function useTodos() {
  const [todos, setTodos] = useState(getInitialTodos);
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState(
  () => localStorage.getItem("todo_filter") || "all"
);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
  localStorage.setItem("todo_filter", filter);
}, [filter]);
  const addTodo = (task) => {
    if (!task.trim()) return;
    setTodos([...todos, { id: uuidv4(), task, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEdit = (todo) => {
    setEditText(todo.task);
    setEditingId(todo.id);
  };

  const saveEdit = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editingId ? { ...todo, task: editText } : todo
      )
    );
    setEditingId(null);
    setEditText("");
  };
  
  const changeFilter = (value) => {
  setFilter(value);
};

  const filteredTodos = todos.filter((todo) =>{
    if(filter == "active") return !todo.completed;
    if(filter == "completed") return todo.completed;
    return true;
  })

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };
  const clearCompleted = () => {
  setTodos(todos.filter(todo => !todo.completed));
};
const activeCount = todos.filter(todo => !todo.completed).length;

  return {
    todos: filteredTodos,
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
    activeCount
  };
}
