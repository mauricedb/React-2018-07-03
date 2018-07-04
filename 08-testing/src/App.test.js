import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('renders without crashing', () => {
  const wrapper = shallow(<App />);

  const logo = wrapper.find('.App-logo');
  expect(logo.length).toBe(1);
});

it('takes a while', () => {
  return new Promise(resolve => {
    setTimeout(resolve, 200);
  });
});

// it('takes a while to fail', () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(reject, 2000);
//   });
// });
