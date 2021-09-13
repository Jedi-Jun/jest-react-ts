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
  it('clicks add button', () => {
    const { container } = render(<App />);
    const label = screen.getByText('Add');
    expect(container).toHaveBeenCalledTimes(0);
    fireEvent.click(label);
    expect(container).toHaveBeenCalledTimes(1);
  });
  // #3
  it('clicks delete button', () => {});
});
