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
          {numbered && <Text style={styles.number}>{i + 1}.)</Text>}
          <Text style={styles.content}>
            {!numbered && '•'} {c}
          </Text>
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
  point: {
    textAlignVertical: 'bottom',
    fontSize: 5,
    marginRight: 10,
  },
  number: {
    fontSize: 15,
    marginRight: 20,
    width: 20,
    // width: 30,
  },
  row: {
    flexShrink: 1,
    marginLeft: 5,
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  content: {
    flexShrink: 1,
    fontSize: 16,
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
