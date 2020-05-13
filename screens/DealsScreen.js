import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import Colors from '../constants/Colors';

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
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    (async function() {
      try {
        const response = await fetch(
          `https://www.arnoldclark.com/used-cars/search.json?payment_type=monthly&min_price=${monthlyPayment}`,
        );
        const data = await response.json();
        setSearchResults(
          data.searchResults.filter(car => car.imageCount > 0).slice(0, 6),
        );
      } catch (e) {
        console.error(e);
      }
    })();
  }, [monthlyPayment]);
  return (
    <View style={styles.screen}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {flex: 1},
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
    backgroundColor: Colors.primary,
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
