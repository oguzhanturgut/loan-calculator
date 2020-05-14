import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import createPaymentSchedule from '../utils/createPaymentSchedule';
import Colors from '../constants/Colors';
import ScheduleRow from '../components/ScheduleRow';
import CustomButton from '../components/CustomButton';
import QuoteCell from '../components/QuoteCell';
import QuoteRow from '../components/QuoteRow';

const QuoteScreen = ({navigation, route}) => {
  const {vehiclePrice, deposit, deliveryDate, term} = route.params;
  const payment = createPaymentSchedule(
    parseInt(vehiclePrice),
    parseInt(deposit),
    deliveryDate,
    term,
  );

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <QuoteRow>
          <QuoteCell header={'Vehicle Price'} amount={payment.vehiclePrice} />
          <QuoteCell header={'Deposit'} amount={payment.deposit} />
        </QuoteRow>

        <QuoteRow>
          <QuoteCell
            header={'Total Amount Payable'}
            amount={payment.totalAmountPayable}
          />
          <QuoteCell
            header={'Monthly Payment'}
            amount={payment.monthlyPayment}
          />
        </QuoteRow>

        <QuoteRow>
          <QuoteCell
            header={'Arrangement Fee'}
            amount={payment.arrangementFee}
          />
          <QuoteCell header={'Completion Fee'} amount={payment.completionFee} />
        </QuoteRow>
      </View>

      <CustomButton
        buttonText={'See Deals'}
        onPress={() => {
          navigation.navigate('Deals', {
            monthlyPayment: payment.monthlyPayment,
          });
        }}
      />

      <FlatList
        style={styles.quoteList}
        data={payment.schedule}
        keyExtractor={item => item.dueDate}
        renderItem={({item}) => (
          <ScheduleRow dueDate={item.dueDate} amount={item.amount} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {flex: 1, width: '100%'},
  button: {
    width: '60%',
    backgroundColor: '#FD6592',
    borderRadius: 3,
    height: 40,
    marginHorizontal: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  quoteList: {flex: 1, width: '100%'},
});

export default QuoteScreen;
