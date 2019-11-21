import React from 'react';
import ReactDOM from 'react-dom';
import Weatherform from './Weatherform';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weatherform />, div);
  ReactDOM.unmountComponentAtNode(div);
});
