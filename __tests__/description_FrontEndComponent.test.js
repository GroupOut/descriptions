// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import Description from '../client/components/description';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// console.log(Description);

configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Description />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('a basic shallow test', () => {
  it('should render App', () => {
    const wrapper = shallow(<Description />, { context: {}, disableLifecycleMethods: false })
    console.log(wrapper.debug())
  })

  it('should contain 1 form element', () => {
    const wrapper = shallow(<Description />)
    expect(wrapper.find('form').length).toBe(1)
  })
})