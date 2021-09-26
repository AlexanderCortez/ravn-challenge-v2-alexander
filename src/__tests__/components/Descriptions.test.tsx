import React from 'react';
import { shallow } from 'enzyme';
import Descriptions from 'components/Descriptions';

describe('Descriptions component', (): void => {
  it('should render 2 rows', () => {
    const wrapper = shallow(
      <Descriptions title="some title">
        <Descriptions.Item label="label 1">value 1</Descriptions.Item>
        <Descriptions.Item label="label 2">value 2</Descriptions.Item>
      </Descriptions>,
    );
    const items = wrapper.find('Item');
    expect(wrapper.find('h2').at(0).text()).toBe('some title');
    expect(items).toHaveLength(2);
    expect(items.at(0).contains('value 1')).toBeTruthy();
    expect(items.at(1).contains('value 2')).toBeTruthy();
  });
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Descriptions title="some title">
        <Descriptions.Item label="label 1">value 1</Descriptions.Item>
        <Descriptions.Item label="label 2">value 2</Descriptions.Item>
      </Descriptions>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
