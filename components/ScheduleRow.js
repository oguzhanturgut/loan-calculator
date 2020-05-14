import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/CustomText';

const ScheduleRow = ({dueDate, amount}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{dueDate}</Text>
      <Text style={styles.text}>{amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#FFF',
  },
});

export default ScheduleRow;
