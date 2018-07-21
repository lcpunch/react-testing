import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let component;

beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  component.unmount();
});

it('has a text area and a button', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  component.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });

  component.update();

  expect(component.find('textarea').prop('value')).toEqual('new comment');
});

it('empties the text area when the input is submitted', () => {

  component.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });

  component.update();
  component.find('form').simulate('submit');
  component.update();

  expect(component.find('textarea').prop('value')).toEqual('');
});
