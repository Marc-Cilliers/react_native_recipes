//@flow

import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import type {Recipe} from '../../models/recipe';
import {ListItem} from 'react-native-elements';

type Props = {
  recipes: Array<Recipe>,
  onRecipeTap: Object,
};

const RecipeList = ({recipes, onRecipeTap}: Props): Object => {
  const _keyExtractor = (item, index) => index.toString();
  return (
    <FlatList
      data={recipes}
      keyExtractor={_keyExtractor}
      renderItem={({item, index}) => (
        <ListItem
          onPress={() => onRecipeTap(item)}
          leftAvatar={{source: {uri: item.imageUrl}}}
          title={item.title}
          bottomDivider
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default RecipeList;
