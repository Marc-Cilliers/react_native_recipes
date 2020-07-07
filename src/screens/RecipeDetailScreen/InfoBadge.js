import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

type Props = {
  icon: string,
  text: string,
};

const InfoBadge = ({icon, text}: Props): Object => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  icon: {
    fontFamily: 'FontAwesome5Pro-Light',
    fontSize: 25,
    marginRight: 25,
  },
  text: {
    fontWeight: 700,
  },
});
