import React from 'react';
import { TodoList } from './TodoList';
import styled from 'styled-components';

export const TodoTable = ({ todos, setTodos }) => {
  //제거 로직
  const removeTodo = (id) => {
    const newTodoList = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));

    alert('삭제 되었습니다!');
  };

  //완료 로직
  const toggleDoneTodo = (id, isDone) => {
    const newTodoList = [...todos].map((todo) => {
      return todo.id === id ? { ...todo, isDone: !isDone } : todo;
    });

    setTodos(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));

    !isDone ? alert('수고하셨습니다!') : alert('다시 화이팅!');
  };

  return (
    <>
      <TableWrapper>
        <TableTitle>WORKING🔥</TableTitle>
        {[...todos].map(({ title, content, id, isDone }) => {
          if (!isDone) {
            return (
              <TodoList
                title={title}
                content={content}
                key={id}
                id={id}
                isDone={isDone}
                removeTodo={removeTodo}
                toggleDoneTodo={toggleDoneTodo}
              />
            );
          }
        })}
      </TableWrapper>

      <TableWrapper>
        <TableTitle>DONE✔️</TableTitle>
        {[...todos].map(({ title, content, id, isDone }) => {
          if (isDone) {
            return (
              <TodoList
                title={title}
                content={content}
                key={id}
                id={id}
                isDone={isDone}
                removeTodo={removeTodo}
                toggleDoneTodo={toggleDoneTodo}
              />
            );
          }
        })}
      </TableWrapper>
    </>
  );
};

//style
const TableWrapper = styled.div`
  width: 500px;
  background: #fff;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

const TableTitle = styled.h1`
  display: inline-block;
  width: 80%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #ffd037;
  font-size: 20px;
`;
