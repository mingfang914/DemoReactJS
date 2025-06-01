import React, { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ text, completed });
    setText("");
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên công việc"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Hoàn thành
      </label>
      <button type="submit">Thêm</button>
    </form>
  );
}

export default TodoForm;
