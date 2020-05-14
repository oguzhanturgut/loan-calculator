import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import Consts from '../constants/Consts';
import Text from '../components/CustomText';

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
        <Text style={styles.detailText}>
          Cash Price: {Consts.currency + props.cashPrice}
        </Text>
        <Text style={styles.detailText}>
          Monthly Payment: {Consts.currency + props.monthlyPayment}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  detailText: {
    color: '#FFF',
  },
});

export default CarItem;
