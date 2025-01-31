import React from 'react';
import styled from 'styled-components';

export const Input = ({ children, placeholder, value, onChange }) => {
  return (
    <StyledLabel>
      <TitleLabel>{children}</TitleLabel>
      <StyledInput
        type="text"
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledLabel>
  );
};

//style
const StyledInput = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #ffe796;
  font-size: 12px;
  padding: 0 7px;
`;

const TitleLabel = styled.p`
  font-weight: bold;
`;

const StyledLabel = styled.label`
  width: 330px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
`;
