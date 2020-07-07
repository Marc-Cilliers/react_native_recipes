import React, {useState} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import InfoBadge from './InfoBadge';

type Props = {
  navigation: any,
  route: any,
};

const RecipeDetailScreen = ({navigation, route}: Props): Object => {
  const {recipe}: {recipe: Recipe} = route.params;
  const [loading, setLoading] = useState(true);

  return (
    <ScrollView>
      <View style={styles.jumbotron}>
        <Image
          style={styles.image}
          source={{uri: recipe.imageUrl}}
          onLoadEnd={() => setLoading(false)}
        />
        <ActivityIndicator style={styles.spinner} animating={loading} />
      </View>

      <View style={styles.badges}>
        <InfoBadge icon={'\uf823'} text={`${recipe.servings} servings`} />
        <InfoBadge icon={'\uf251'} text={`${recipe.cookingTime} min`} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  jumbotron: {
    height: 300,
    width: '100%',
  },
  badges: {
    flexDirection: 'row',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  spinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RecipeDetailScreen;
