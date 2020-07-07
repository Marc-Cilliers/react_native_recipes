//@flow

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';

const Stack = createStackNavigator();

const RootStack = (): Object => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Recipes">
        <Stack.Screen name="Recipes" component={RecipeListScreen} />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={({route}) => ({
            title: route.params.recipe.title,
            headerBackTitle: 'Back',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
