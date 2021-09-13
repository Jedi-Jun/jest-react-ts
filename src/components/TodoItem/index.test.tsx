import { render, screen, fireEvent } from '@testing-library/react';
import { ToDoItem } from 'components';
import 'jest-styled-components';

describe('<ToDoItem />', () => {
  // #1
  it('renders works correctly', () => {
    const { container } = render(<ToDoItem label="default value" />);
    const todoItem = screen.getByText('default value');
    expect(todoItem).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  // #2
  it('clicks the delete button', () => {
    const handleClick = jest.fn();
    render(<ToDoItem label="default value" onDelete={handleClick} />);
    const deleteButton = screen.getByText('Del');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
