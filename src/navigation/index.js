//@flow

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import RecipeListScreen from '../screens/RecipeListScreen';

const Stack = createStackNavigator();

const RootStack = (): Object => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Recipes">
        <Stack.Screen name="Recipes" component={RecipeListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
