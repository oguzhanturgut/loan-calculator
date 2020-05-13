import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import useFetch from '../api/useFetch';

const CarItem = props => {
  return (
    <View style={styles.carItem}>
      <View style={{...styles.carRow, ...styles.carHeader}}>
        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{...styles.carRow, ...styles.carDetail}}>
        <Text style={styles.detailText}>{props.cashPrice}</Text>
        <Text style={styles.detailText}>{props.monthlyPayment}</Text>
        <Text style={styles.detailText}>{props.deposit}</Text>
      </View>
    </View>
  );
};

const DealsScreen = ({navigate, route}) => {
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
  carItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  carRow: {
    flexDirection: 'row',
  },
  carHeader: {
    height: '85%',
  },
  carDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'roboto-regular',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  detailText: {
    color: '#FFF',
    fontFamily: 'roboto-regular',
  },
});

export default DealsScreen;
