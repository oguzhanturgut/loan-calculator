import React from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import useFetch from '../api/useFetch';
import CarItem from '../components/CarItem';

const DealsScreen = ({route}) => {
  const {monthlyPayment} = route.params;

  const [searchResults, loading] = useFetch(monthlyPayment);

  return (
    <View style={styles.screen}>
      {loading ? (
        <ActivityIndicator size={'large'} color={'#0000ff'} />
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={item => item.stockReference}
          renderItem={({item}) => (
            <CarItem
              image={item.thumbnails[0]}
              title={item.title.name}
              cashPrice={item.salesInfo.pricing.cashPrice}
              monthlyPayment={item.salesInfo.pricing.monthlyPayment}
              deposit={item.salesInfo.pricing.deposit}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DealsScreen;
