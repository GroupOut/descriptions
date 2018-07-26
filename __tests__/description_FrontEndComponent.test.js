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
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

// import jsdom from 'jsdom';
// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
// global.document = doc
// global.window = doc.defaultView

// console.log(Description);

configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Description />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('the Description Component', () => {
  it('should render Description', () => {
    const wrapper = shallow(<Description />, { context: {}, disableLifecycleMethods: false })
    console.log(wrapper.debug())
  })

  it('should contain 1 form element', () => {
    const wrapper = shallow(<Description />)
    expect(wrapper.find('form').length).toBe(1)
  })

  it('should contain 1 Description Wrapper', () => {
    const wrapper = shallow(<Description />)
    expect(wrapper.find('.descrip').exists()).toBe(true)
  })

  it('should contain 8 divs', () => {
    const wrapper = shallow(<Description />)
    expect(wrapper.find('div').length).toBe(8)
  })

  it('matches the snapshot', () => {
    const tree = shallow(<Description />)
    expect(toJson(tree)).toMatchSnapshot()
  })


  // describe('<Description /> mount rendering', () => {
  //   it('h4 contains correct text', () => {
  //     const wrapper = mount(<Description />, context: {}, attachTo: DOMElement)
  //     expect(wrapper.find('h4').text()).toBe('Inclusions')
  //     wrapper.unmount()
  //   })
  //   it('matches the snapshot', () => {
  //     const tree = mount(<Description />)
  //     expect(toJson(tree)).toMatchSnapshot()
  //     wrapper.unmount()
  //   })
  // })

  it('updates ExclusionsComponent with new State', () => {
    const wrapper = shallow(<Description />)
    expect(wrapper.find('.exclusions').exists()).toBe(false)
    wrapper.setState({ deal: { exclusions: 'Must be over 42 in. tall' } })
    expect(wrapper.find('.exclusions').exists()).toBe(true)
  })

})