import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

type Props = {
  title: string,
  content: Array<any>,
  numbered: boolean,
};
const InfoList = ({title, content, numbered}): Object => {
  const ContentList = () => {
    content.map((c, i) => {
      return (
        <View style={styles.row}>
          {numbered && <Text>{i + 1}</Text>}
          {!numbered && <Text>•</Text>}
          <Text>c.ingredient</Text>
          <Text>c.amount {c.orAmount && `| ${c.orAmount}`}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.seperator} />

      <ContentList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
  },
  seperator: {
    height: 1,
    width: '90%',
    backgroundColor: 'grey',
  },
});

export default InfoList;
