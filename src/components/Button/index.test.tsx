import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from 'components';
import 'jest-styled-components'; // toHaveStyleRule

describe('<Button />', () => {
  // #1
  it('renders component correctly', () => {
    const { container } = render(<Button label="Button Test" />);
    const label = screen.getByText('Button Test');
    expect(label).toBeInTheDocument();
    const parent = label.parentElement;
    expect(parent).toHaveStyleRule('background', '#304ffe');
    expect(parent).toHaveStyleRule('background', '#1e40ff', {
      modifier: ':hover',
    });
    expect(container).toMatchSnapshot();
  });
  // #2
  it('changes backgroundColor and hoverColor Props', () => {
    const backgroundColor = '#ff1744';
    const hoverColor = '#f01440';
    render(
      <Button label="Button Test" backgroundColor={backgroundColor} hoverColor={hoverColor} />,
    );
    const label = screen.getByText('Button Test');
    const parent = label.parentElement;
    expect(parent).toHaveStyleRule('background', backgroundColor);
    expect(parent).toHaveStyleRule('background', hoverColor, {
      modifier: ':hover',
    });
  });
  // #3
  it('clicks the button', () => {
    const handleClick = jest.fn();
    render(<Button label="Button Test" onClick={handleClick} />);
    const label = screen.getByText('Button Test');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(label);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
