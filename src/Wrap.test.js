import React from 'react';
import ReactDOM from 'react-dom';
import {Wrap} from './Wrap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wrap />, div);
  ReactDOM.unmountComponentAtNode(div);
});
