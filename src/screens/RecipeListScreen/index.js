// @flow

import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import api from '../../services/api';
import RecipeList from './RecipeList';

type Props = {};
const RecipeListScreen = ({}: Props): Object => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.getAllRecipes().then((allRecipes) => setRecipes(allRecipes));
  });

  const recipeTapHandler = () => {};

  return <RecipeList recipes={recipes} onRecipeTap={recipeTapHandler} />;
};

const styles = StyleSheet.create({});

export default RecipeListScreen;
