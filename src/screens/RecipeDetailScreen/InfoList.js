import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

type Props = {
  title: string,
  content: Array<string>,
  numbered: boolean,
};

const InfoList = ({title, content, numbered}: Props): Object => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.seperator} />

      {content.map((c, i) => (
        <View key={i} style={styles.row}>
          {numbered && <Text>{i + 1}.)</Text>}
          {!numbered && <Text>•</Text>}
          <Text>{c}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
  },
  seperator: {
    height: 1,
    marginBottom: 20,
    width: '90%',
    backgroundColor: 'grey',
  },
});

export default InfoList;
