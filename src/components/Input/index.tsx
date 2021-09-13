import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input.attrs({
  type: 'text',
})`
  display: flex;
  font-size: 16px;
  padding: 8px 10px;
  border-radius: 8px;
  border: 3px solid #bdbdbd;
  outline: none;
`;

interface Props {
  readonly value?: string;
  readonly onChange?: (text: string) => void;
  readonly placeholder?: string;
  readonly onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange, placeholder, onKeyPress }: Props) => {
  const handlerChange = (event) => {
    if (typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };
  return (
    <InputStyle
      value={value}
      placeholder={placeholder}
      onChange={handlerChange}
      onKeyPress={onKeyPress}
    />
  );
};
