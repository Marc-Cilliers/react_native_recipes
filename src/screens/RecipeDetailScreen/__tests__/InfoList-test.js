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
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
          'Item 5',
          'Item 6',
          'Item 7',
          'Item 8',
        ]}
        numbered={false}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
