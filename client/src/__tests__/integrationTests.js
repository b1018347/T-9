import Display from "components/Display";
import Phone from "containers/Phone";
import { mount } from "enzyme";
import React from "react";

let wrapper;
beforeEach(() => {
  wrapper = mount(<Phone/>);
});

afterEach(() => {
  wrapper.unmount();
});


it('displays words', () => {
  wrapper.setState({
    display: ["hello", "is", "it", "me"]
  });
  wrapper.update();
  expect(wrapper.find(Display).prop('value')).toEqual('hello is it me ');
});


it('displays word suggestions', () => {
  wrapper.setState({
    suggestions: ['one', 'two', 'three']
  });
  wrapper.update();
  expect(wrapper.find('.suggestion').length).toEqual(3);
});

it('can update the display by clicking a word suggestion', () => {
  wrapper.setState({
    suggestions: ['one', 'two', 'three']
  });
  wrapper.update();
  wrapper.find('.suggestion').at(1).simulate('click');
  wrapper.update();
  expect(wrapper.find('.suggestion').length).toEqual(0);
  expect(wrapper.find(Display).prop('value')).toEqual('two ');
});

