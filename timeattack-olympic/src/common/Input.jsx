import React from 'react';

export const Input = ({
  children,
  type,
  value,
  onChange,
  min,
  max,
  placeholder,
}) => {
  return (
    <label>
      <p>{children}</p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </label>
  );
};
