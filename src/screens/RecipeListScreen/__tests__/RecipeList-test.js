import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../RecipeList';

it('renders correctly', () => {
  renderer.create(<RecipeList />);
});
