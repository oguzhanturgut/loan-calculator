import React from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';

const QuoteScreen = ({navigation, route}) => (
  <View>
    <Text>{route.params.vehiclePrice}</Text>
    <Text>{route.params.deposit}</Text>
    <Text>{JSON.stringify(route.params.deliveryDate)}</Text>
    <Text>{route.params.term}</Text>
  </View>
);

export default QuoteScreen;
