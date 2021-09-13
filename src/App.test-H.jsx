// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// #1
/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

// #2
/* describe('<App />', () => {
  it('renders component correctly', () => {
    render(<App />);
    const linkElement = screen.getByText(/korea/gim);
    expect(linkElement).toBeInTheDocument();
  });
}); */

// #3 getElementsBy(Class/Tag)Name
/* describe('<App />', () => {
  it('renders component correctly', () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName('App-logo')).toHaveLength(1);
    expect(container.getElementsByClassName('App-logo')[0]).toHaveAttribute(
      'src',
      'logo.svg'
    );
    expect(container.getElementsByTagName('p')).toHaveLength(1);
    expect(container.getElementsByTagName('p')[0]).toHaveTextContent(
      'Edit src/App.js and save to reload.'
    );
  });
}); */

// #4 Snapshot
/* describe('<App />', () => {
  it('renders component correctly', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
}); */
