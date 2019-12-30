import React from 'react';
import { shallow } from 'enzyme';
import MainDropDownSelect from './mainDropDownSelect';

describe('<MainDropDownSelect />', () => {
  test('renders', () => {
    const wrapper = shallow(<MainDropDownSelect />);
    expect(wrapper).toMatchSnapshot();
  });
});
