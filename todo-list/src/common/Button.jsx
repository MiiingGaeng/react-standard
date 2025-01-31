import React from 'react';
import styled from 'styled-components';

export const Button = ({ children, type, onClick, width }) => {
  return (
    <StyledButton type={type} onClick={onClick} width={width}>
      {children}
    </StyledButton>
  );
};

//style
const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: 30px;
  border-radius: 10px;
  border: none;
  background: #ffe796;
  transition: all 0.3s;

  &:hover {
    background: #ffd037;
  }
`;
