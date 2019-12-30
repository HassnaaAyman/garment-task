import React from 'react';
import { shallow } from 'enzyme';
import SuprvisorPage from './suprvisorPage';

describe('<SuprvisorPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<SuprvisorPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
