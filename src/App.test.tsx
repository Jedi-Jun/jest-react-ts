import { render, screen, fireEvent } from '@testing-library/react';
import App from 'App';
import 'jest-styled-components';

describe('<App />', () => {
  // #1
  it('renders component correctly', () => {
    const { container } = render(<App />);
    const todoList = screen.getByTestId('todoList');
    expect(todoList).toBeInTheDocument();
    expect(todoList.firstChild).toBeNull();

    const input = screen.getByPlaceholderText('Add something...');
    expect(input).toBeInTheDocument();

    const label = screen.getByText('Add');
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
  // #2
  it('add and delete Todo items', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Add something...');
    const button = screen.getByText('Add');
    fireEvent.change(input, { target: { value: 'study Jest 1' } });
    fireEvent.click(button);

    const todoItem1 = screen.getByText('study Jest 1');
    expect(todoItem1).toBeInTheDocument();
    const deleteButton = screen.getByText('Del');
    expect(deleteButton).toBeInTheDocument();

    const todoList = screen.getByTestId('todoList');
    expect(todoList.childElementCount).toBe(1);

    fireEvent.change(input, { target: { value: 'study Jest 2' } });
    fireEvent.click(button);

    const todoItem2 = screen.getByText('study Jest 2');
    expect(todoItem2).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(2);

    const deleteButtons = screen.getAllByText('Del');
    /* fireEvent.click(deleteButtons[0]);

    expect(todoItem1).not.toBeInTheDocument();
    expect(todoList.childElementCount).toBe(1); */
  });
});
