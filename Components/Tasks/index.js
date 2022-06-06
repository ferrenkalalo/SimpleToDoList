import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Tasks = props => {
  return (
    <View style={styles.items}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />

        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle} />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  items: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemText: {
    maxWidth: '80%',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#B9D4F1',
    borderRadius: 5,
    marginRight: 15,
  },
  circle: {
    width: 15,
    height: 15,
    borderColor: '#6A759B',
    borderWidth: 3,
    borderRadius: 10,
  },
});
