import React from 'react';
import { useState } from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import styled from 'styled-components';

export const TodoForm = ({ todos, setTodos }) => {
  //state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //할일 추가 로직
  const addTodo = (title, content) => {
    const newTodo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };

    //예외 처리 : 빈칸시 return
    if (!title.trim() && !content.trim()) {
      alert('빈칸을 채워주세요!');
      return;
    }

    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));

    alert('추가 되었습니다!');
  };

  return (
    <StyleHeader>
      <StyleForm onSubmit={() => addTodo(title, content)}>
        <FormTitle>TODO LIST</FormTitle>
        <Input
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          TITLE
        </Input>
        <Input
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        >
          CONTENT
        </Input>
        <Button type="submit" width={'330px'}>
          ADD
        </Button>
      </StyleForm>
    </StyleHeader>
  );
};

//style
const StyleHeader = styled.header`
  width: 500px;
  height: 250px;
  background: #fff;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyleForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const FormTitle = styled.h1`
  font-size: 20px;
`;
