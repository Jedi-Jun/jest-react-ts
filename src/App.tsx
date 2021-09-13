import styled from 'styled-components';
import { Button, Input, ToDoItem } from 'components';
import { useState } from 'react';

const Container = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Contents = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
`;
const InputContainer = styled.div`
  display: flex;
`;
const Hr = styled.hr`
  border: none;
  width: 98%;
  height: 2px;
  background: #dbdbdb;
`;
const TodoListContainer = styled.div`
  // ...
`;

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleAddTodo = (): void => {
    if (todo) {
      setTodoList([...todoList, todo]);
      setTodo('');
    }
  };
  const handleDeleteTodo = (index: number): void => {
    const list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  };

  return (
    <Container>
      <Contents data-testid="foo">
        <TodoListContainer data-testid="todoList">
          {todoList.map((todo, index) => (
            <ToDoItem key={index} label={todo} onDelete={() => handleDeleteTodo(index)} />
          ))}
        </TodoListContainer>
        <Hr />
        <InputContainer>
          <Input
            value={todo}
            onChange={(text) => setTodo(text)}
            onKeyPress={(e) => (e.key === 'Enter' ? handleAddTodo() : null)}
            placeholder="Add something..."
          />
          <Button
            onClick={handleAddTodo}
            label="Add"
            backgroundColor="#3a86ff"
            hoverColor="#2877ff"
          />
        </InputContainer>
        <Button label="Del" backgroundColor="#ff1744" hoverColor="#d01440" />
      </Contents>
    </Container>
  );
}

export default App;
