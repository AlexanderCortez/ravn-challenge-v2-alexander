import React from 'react';
import App from 'App';
import { shallow } from 'enzyme';

describe('App component', (): void => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
