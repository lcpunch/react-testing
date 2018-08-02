import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});

it('has a text area and two buttons', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(2);
});

describe('the text area', () => {

  beforeEach(() => {
    component.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });

    component.update();
  });

  it('has a text area that users can type in', () => {

    expect(component.find('textarea').prop('value')).toEqual('new comment');
  });

  it('empties the text area when the input is submitted', () => {

    expect(component.find('textarea').prop('value')).toEqual('new comment');

    component.find('form').simulate('submit');
    component.update();

    expect(component.find('textarea').prop('value')).toEqual('');
  });
});
