import React from 'react';
import { shallow } from 'enzyme';
import Layout from 'components/Layout';

describe('Layout component', (): void => {
  it('should match render content', () => {
    const someText = 'test-content';
    const wrapper = shallow(
      <Layout>
        <div className="testing">{someText}</div>
      </Layout>,
    );
    const element = wrapper.find('.testing');
    expect(element).toBeDefined();
    expect(element.text()).toEqual(someText);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Layout>123</Layout>);
    expect(wrapper).toMatchSnapshot();
  });
});
