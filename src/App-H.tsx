import React from 'react';
import { createGlobalStyle }from 'styled-components';
import Todo from 'components-H/Todo';


const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  // box-sizing: content-box;
}

body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
 
body {
  width: 100vw;
  height: 100vh;
  background: silver;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Todo />
    </>
  );
}

export default App;
