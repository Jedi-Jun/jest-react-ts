import styled from 'styled-components';

interface ContainerProps {
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
}

const ButtonStyle = styled.button<ContainerProps>`
  background: ${(props) => props.backgroundColor || '#304ffe'};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  border: 0;
  &: hover {
    background: ${(props) => props.hoverColor || '#1e40ff'};
  }
  &: active {
    box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
const Label = styled.div`
  color: #ffffff;
  font-size: 16px;
`;

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}

export const Button = ({ onClick, label, backgroundColor, hoverColor }: Props) => {
  return (
    <ButtonStyle onClick={onClick} backgroundColor={backgroundColor} hoverColor={hoverColor}>
      <Label>{label}</Label>
    </ButtonStyle>
  );
};
