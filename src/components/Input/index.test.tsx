import { render, screen, fireEvent } from '@testing-library/react';
// render, screen, fireEvent
import { Input } from 'components';
import 'jest-styled-components';

describe('<Input />', () => {
  // #1
  it('renders component correctly', () => {
    const { container } = render(<Input value="default value" />);
    const input = screen.getByDisplayValue('default value');
    expect(input).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  // #2
  it('renders placeholder correctly', () => {
    render(<Input placeholder="default placeholder" />);
    const input = screen.getByPlaceholderText('default placeholder');
    expect(input).toBeInTheDocument();
  });
  // #3
  it('changes the data', () => {
    render(<Input placeholder="default placeholder" />);
    const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Hello Jest' } });
    expect(input.value).toBe('Hello Jest');
  });
});
