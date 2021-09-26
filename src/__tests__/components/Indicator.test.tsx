import React from 'react';
import Indicator from 'components/Indicator';
import { shallow } from 'enzyme';

describe('Indicator component', (): void => {
  it('should render an error', () => {
    const wrapper = shallow(<Indicator error="Failed to load" />);
    expect(wrapper.find('h2').text()).toBe('Failed to load');
  });
  it('should render a spinner', () => {
    const wrapper = shallow(<Indicator loading tip="loading" />);
    expect(wrapper.find('h2').text()).toBe('loading');
    expect(wrapper.exists('img')).toBeTruthy();
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Indicator loading tip="loading" />);
    expect(wrapper).toMatchSnapshot();
  });
});
