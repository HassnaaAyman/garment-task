import React from 'react';
import { shallow } from 'enzyme';
import SubDropDownMenuSelect from './subDropDownMenuSelect';

describe('<SubDropDownMenuSelect />', () => {
  test('renders', () => {
    const wrapper = shallow(<SubDropDownMenuSelect />);
    expect(wrapper).toMatchSnapshot();
  });
});
