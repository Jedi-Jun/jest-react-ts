import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input.attrs({
  type: 'text',
})`
  padding: 0 10px;
  width: 400px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  line-height: 2rem;
  // outline: 0;  // disable highlight when focus activated
  border: 1px solid gray;
  margin: 0 10px;
`;
const Button = styled.button`
  border-radius: 5px;
  width: 4em;
  height: 2.7em;
  // outline: 0;
  border: 1px solid gray;
  cursor: pointer;
`;

export function AddTodo({ handlerAdd }: any) {
  const { todoList, setTodoList } = handlerAdd;
  const [todo, setTodo] = useState('');

  const handleAddBtn = () => {
    setTodoList(todoList.concat(todo));
    setTodo('');  
  };

  return (
    <Container>
      <Input
        value={todo}  
        onChange={e => setTodo(e.target.value)}
        onKeyPress={e => {
          if (e.code === 'Enter') handleAddBtn();
        }}
      />
      <Button onClick={handleAddBtn}>Add</Button>
    </Container>
  );
}
