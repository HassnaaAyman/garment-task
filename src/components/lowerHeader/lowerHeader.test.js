import React from 'react';
import { shallow } from 'enzyme';
import LowerHeader from './lowerHeader';

describe('<LowerHeader />', () => {
  test('renders', () => {
    const wrapper = shallow(<LowerHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
