import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import EditTodoForm from "./components/EditTodoForm";
import ConfirmDelete from "./components/ConfirmDelete";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [deletingTodo, setDeletingTodo] = useState(null);

  const addTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: Date.now() }]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    setEditingTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setDeletingTodo(null);
  };

  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodo?.id === todo.id ? (
              <EditTodoForm
                todo={editingTodo}
                onSave={updateTodo}
                onCancel={() => setEditingTodo(null)}
              />
            ) : (
              <TodoItem
                todo={todo}
                onEdit={() => setEditingTodo(todo)}
                onDelete={() => setDeletingTodo(todo)}
              />
            )}
          </li>
        ))}
      </ul>

      {deletingTodo && (
        <ConfirmDelete
          todo={deletingTodo}
          onConfirm={() => deleteTodo(deletingTodo.id)}
          onCancel={() => setDeletingTodo(null)}
        />
      )}
    </div>
  );
}

export default App;
