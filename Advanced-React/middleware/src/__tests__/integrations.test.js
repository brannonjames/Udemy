import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
  });
});

afterEach(() => {
  moxios.uninstall();
});


//passing in done param turns it block async
it('can fetch a list of comments and display them', done => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find('.fetch-comments').simulate('click');


  moxios.wait(() => {
    try {
      wrapped.update();
      expect(wrapped.find('li').length).toEqual(2);
      done();
    } catch(err){
      done.fail(err)
    } finally {
      wrapped.unmount();
    }
  });
  
});