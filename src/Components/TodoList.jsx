import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  editingId,
  editText,
  setEditText,
  onStartEdit,
  onSaveEdit,
  onDelete,
  onCancelEdit,
  onToggleComplete,
}) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          onStartEdit={onStartEdit}
          onSaveEdit={onSaveEdit}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onCancelEdit={onCancelEdit}
          className="todo-item"
        />
      ))}
    </ul>
  );
}
