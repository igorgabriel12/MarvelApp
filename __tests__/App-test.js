/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';
import HeroeDetails from '../src/screens/HeroeDetails';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('HeroeDetails snapshot', () => {
  const snap = renderer.create(<HeroeDetails />).toJSON();
  expect(snap).toMatchSnapshot();
});
