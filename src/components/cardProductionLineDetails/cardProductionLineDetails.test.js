import React from 'react';
import { shallow } from 'enzyme';
import CardProductionLineDetails from './cardProductionLineDetails';

describe('<CardProductionLineDetails />', () => {
  test('renders', () => {
    const wrapper = shallow(<CardProductionLineDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
