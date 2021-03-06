import React from 'react';
import {View, StyleSheet} from 'react-native';

const QuoteRow = props => <View style={styles.row}>{props.children}</View>;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default QuoteRow;
