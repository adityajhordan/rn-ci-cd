/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {create} from 'react-test-renderer';

const tree = create(<App />);

it('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});
