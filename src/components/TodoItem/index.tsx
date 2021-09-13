import styled from 'styled-components';
import { Button } from 'components';

const Container = styled.div`
  display: flex;
  border: 1px solid blue;
  align-items: center;
  justify-contents: center;
  // align-items: bottom;
  // padding: 10px;
`;

const Label = styled.label`
  flex: 1;
  font-size: 1.3rem;
  margin-right: 10px;
  border-top: 1px solid blue;
`;

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}

export const ToDoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button label="Del" backgroundColor="#ff1744" hoverColor="#d01440" onClick={onDelete} />
    </Container>
  );
};
