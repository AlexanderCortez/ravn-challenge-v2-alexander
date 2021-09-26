import React from 'react';
import { shallow } from 'enzyme';
import Card from 'components/Card';
import { CardProps } from 'types/components';
import Icon from 'components/Icon';

const commonProps: CardProps = {
  heading: 'Some title',
  blurb: 'some description',
};

describe('Card component', (): void => {
  it('should render all elements', () => {
    const wrapper = shallow(
      <Card heading={commonProps.heading} blurb={commonProps.blurb} />,
    );
    expect(wrapper.find('h2').text()).toEqual(commonProps.heading);
    expect(wrapper.find('p').text()).toEqual(commonProps.blurb);
  });

  it('should render extra node when passed', () => {
    const wrapper = shallow(
      <Card {...commonProps} extra={<button type="button">action</button>} />,
    );
    expect(wrapper.exists('button')).toBeDefined();
    expect(wrapper.find('button').text()).toBe('action');
  });

  it('should match snapshot', () => {
    const wrapper = shallow(
      <Card
        {...commonProps}
        extra={<Icon name="ri-arrow-right-s-line" size={30} />}
      />,
    );
    expect(wrapper.exists('Icon')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
