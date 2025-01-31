import React from 'react';
import styled from 'styled-components';
import { Button } from '../common/Button';

export const TodoList = ({
  title,
  content,
  id,
  key,
  isDone,
  removeTodo,
  toggleDoneTodo,
}) => {
  return (
    <>
      <StyleLi key={key}>
        <TextWrapper>
          <h4>{title}</h4>
          <p>{content}</p>
        </TextWrapper>
        <ButtonWrapper>
          <Button
            type="button"
            onClick={() => toggleDoneTodo(id, isDone)}
            width={'70px'}
          >
            {!isDone ? 'DONE' : 'NOT YET'}
          </Button>
          <Button type="button" onClick={() => removeTodo(id)} width={'70px'}>
            DELETE
          </Button>
        </ButtonWrapper>
      </StyleLi>
    </>
  );
};

//style
const StyleLi = styled.li`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const TextWrapper = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
`;
