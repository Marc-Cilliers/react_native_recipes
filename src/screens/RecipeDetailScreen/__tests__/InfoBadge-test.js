import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import InfoBadge from '../InfoBadge';

it('renders correctly', () => {
  const tree = renderer
    .create(<InfoBadge icon={'\uf823'} text={`4 servings`} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
