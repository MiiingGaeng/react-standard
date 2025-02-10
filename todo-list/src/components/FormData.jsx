import React from 'react';
import { useState } from 'react';

const FormData = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTodo = formData.get('todo').trim();

    if (newTodo) {
      setTodos([...todos, newTodo]);
      e.target.reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" placeholder="Enter a task" />
        <button type="submit">ADD</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormData;
