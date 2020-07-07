// @flow

import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import api from '../../services/api';
import RecipeList from './RecipeList';

type Props = {
  navigation: any,
};
const RecipeListScreen = ({navigation}: Props): Object => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.getAllRecipes().then((allRecipes) => setRecipes(allRecipes));
  }, []);

  const recipeTapHandler = (recipe) => {
    navigation.navigate('RecipeDetail', {
      recipe,
    });
  };

  return <RecipeList recipes={recipes} onRecipeTap={recipeTapHandler} />;
};

const styles = StyleSheet.create({});

export default RecipeListScreen;
