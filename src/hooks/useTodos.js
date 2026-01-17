import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  const addTodo = (task) => {
    if (!task.trim()) return;
    setTodos([...todos, { id: uuidv4(), task, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEdit = (todo) => {
    setEditText(todo.task);
    setEditingId(todo.id);
  };

  const saveEdit = () => {
    setTodos(todos.map(todo => 
      todo.id === editingId ? { ...todo, task: editText } : todo
    ));
    setEditingId("");
    setEditText("");
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));

    
  };
  const cancelEdit = () => {
        setEditingId(null);   
        setEditText("");
    }

  return {
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
  };
}