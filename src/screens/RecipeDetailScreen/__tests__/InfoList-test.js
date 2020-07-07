import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import InfoList from '../InfoList';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <InfoList
        title={'Ingredients'}
        content={[
          {ingredient: 'peaches', amount: '4'},
          {ingredient: 'butter', amount: '2 tbsp'},
          {ingredient: 'cinnamon', amount: '1 tsp'},
          {ingredient: 'pecans', amount: '120g'},
          {ingredient: 'rolled oats', amount: '30g'},
          {ingredient: 'plain Greek yoghurt', amount: '4 tbsp'},
        ]}
        numbered={false}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
