import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/CustomText';

import Consts from '../constants/Consts';
import Colors from '../constants/Colors';

const QuoteCell = props => (
  <View style={styles.cell}>
    <Text style={styles.cellHeader}>{props.header}</Text>
    <Text style={styles.cellText}>{Consts.currency + props.amount}</Text>
  </View>
);

const styles = StyleSheet.create({
  cell: {
    width: '45%',
    backgroundColor: Colors.primary,
    opacity: 0.7,
    elevation: 3,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  cellHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
    color: '#FFF',
  },
  cellText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FFF',
  },
});

export default QuoteCell;
