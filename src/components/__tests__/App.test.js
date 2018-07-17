import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment box', () => {
<<<<<<< HEAD
  const component = shallow(<App />);
  expect(component.find(CommentBox).length).toEqual(1);
=======
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('Comment Box');

  ReactDOM.unmountComponentAtNode(div);
>>>>>>> 6093085debc83549a492f3ec38c0afb0a6ff8ded
});
