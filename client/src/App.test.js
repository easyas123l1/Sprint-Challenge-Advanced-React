import React from 'react';
import App from './App';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';


it('renders without crashing', () => {
  render(<App />);
});

//first test
