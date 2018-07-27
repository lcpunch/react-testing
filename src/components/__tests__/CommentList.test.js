import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {
  
  expect(component.find('li').length).toEqual(1);
});


afterEach(() => {
  component.unmount();
});
