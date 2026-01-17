export default function TodoItem({
  todo,
  editingId,
  editText,
  setEditText,
  onStartEdit,
  onSaveEdit,
  onDelete,
  onToggleComplete,
  onCancelEdit,
  className,
}) {
  return (
    <li className={className}>
      {editingId === todo.id ? (
        <div className="todo-left">
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button onClick={onSaveEdit} className="save-btn">
            Save
          </button>
          <button onClick={onCancelEdit} className="cancel-btn">
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div className="todo-left">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleComplete(todo.id)}
            />
            <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
              {todo.task}
            </span>
          </div>
          <div className="todo-actions">
            <button onClick={() => onStartEdit(todo)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => onDelete(todo.id)} className="delete-btn">
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}
