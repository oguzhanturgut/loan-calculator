import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import createPaymentSchedule from '../utils/createPaymentSchedule';
import Colors from '../constants/Colors';
// TODO render payment schedule

const ScheduleRow = ({dueDate, amount}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
      }}>
      <Text style={styles.cellHeader}>{dueDate}</Text>
      <Text style={styles.cellHeader}>{amount}</Text>
    </View>
  );
};

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
      <View style={{flex: 1}}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellHeader}>Vehicle Price</Text>
            <Text style={styles.cellText}>{payment.vehiclePrice}</Text>
          </View>

          <View style={styles.cell}>
            <Text style={styles.cellHeader}>Deposit</Text>
            <Text style={styles.cellText}>{payment.deposit}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellHeader}>Total Amount Payable</Text>
            <Text style={styles.cellText}>{payment.totalAmountPayable}</Text>
          </View>

          <View style={styles.cell}>
            <Text style={styles.cellHeader}>Monthly Payment</Text>
            <Text style={styles.cellText}>{payment.monthlyPayment}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellHeader}>Arrangement Fee</Text>
            <Text style={styles.cellText}>{payment.arrangementFee}</Text>
          </View>

          <View style={styles.cell}>
            <Text style={styles.cellHeader}>Completion Fee</Text>
            <Text style={styles.cellText}>{payment.completionFee}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
        disabled={false}>
        <Text style={styles.buttonText}>See Deals</Text>
      </TouchableOpacity>

      <FlatList
        style={{flex: 1, width: '100%'}}
        data={payment.schedule}
        keyExtractor={item => item.dueDate}
        renderItem={({item}) => (
          // <Text>{item.dueDate}</Text>
          <ScheduleRow dueDate={item.dueDate} amount={item.amount} />
        )}
      />
    </View>
  );
};

// TODO make button component

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  cell: {
    width: '40%',
    backgroundColor: Colors.primary,
    opacity: 0.7,
    elevation: 3,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
  },
  cellHeader: {
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#FFF',
  },
  cellText: {
    textAlign: 'center',
    fontFamily: 'roboto-regular',
    fontSize: 16,
    color: '#FFF',
  },
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
});

export default QuoteScreen;
