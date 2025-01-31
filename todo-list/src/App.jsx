import React from 'react';
import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoTable } from './components/TodoTable';
import styled from 'styled-components';

const App = () => {
  //state + localStorage
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const [todos, setTodos] = useState(todoList);

  return (
    <Wrapper>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoTable todos={todos} setTodos={setTodos}></TodoTable>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffe796;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default App;
