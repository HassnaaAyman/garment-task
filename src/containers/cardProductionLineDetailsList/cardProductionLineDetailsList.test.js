import React from 'react';
import { shallow } from 'enzyme';
import CardProductionLineDetailsList from './cardProductionLineDetailsList';

describe('<CardProductionLineDetailsList />', () => {
  test('renders', () => {
    const wrapper = shallow(<CardProductionLineDetailsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
