import React from "react";

function TodoItem({ todo, onEdit, onDelete }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      <div>
        <button class="button-btn" onClick={onEdit}>
          Sửa
        </button>
        <button class="button-btn" onClick={onDelete}>Xóa</button>
      </div>
    </div>
  );
}

export default TodoItem;
