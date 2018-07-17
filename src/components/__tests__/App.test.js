import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('shows a comment box', () => {
  const component = shallow(<App />);
  expect(component.find(CommentBox).length).toEqual(1);
});

it('show a comment list', () => {
  const component = shallow(<App />);
  expect(component.find(CommentList).length).toEqual(1);
});
