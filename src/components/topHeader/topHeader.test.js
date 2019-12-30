import React from 'react';
import { shallow } from 'enzyme';
import TopHeader from './topHeader';

describe('<TopHeader />', () => {
  test('renders', () => {
    const wrapper = shallow(<TopHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
