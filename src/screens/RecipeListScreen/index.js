// @flow

import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import api from '../../services/api';

type Props = {};
const RecipeListScreen = ({}: Props): Object => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.getAllRecipes().then((allRecipes) => setRecipes(allRecipes));
  });
};

const styles = StyleSheet.create({});

export default RecipeListScreen;
