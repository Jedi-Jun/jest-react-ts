import React, { useState } from 'react';
import styled from 'styled-components';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';

const Container = styled.div`
  border: 2px solid whitesmoke;
  border-radius: 7px;
  position: relative;
  background: white;
  width: 430px;
  height: 660px;
  // left: 0;
  // right: 0;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Section = styled.div`
border: 1px solid gray;
  width: 100%;
  height: 92%;
`;

const Footer = styled.div`
border: 1px solid orange;
// border: 1px solid whitesmoke;
  width: 100%;
  height: 8%;
`;

function Todo () {
  const [todoList, setTodoList] = useState<string[]>([]);
  
  return (
    <>
      <Container>
        <Section>
          {todoList.map((todo) => {
            return <TodoList todo={ todo } />
          })}
        </Section>
        <Footer>
          <AddTodo handlerAdd={{ todoList, setTodoList }} />
        </Footer>
      </Container>
    </>
  )
}

export default Todo;