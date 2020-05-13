import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  TouchableNativeFeedback,
} from 'react-native';

import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from 'moment';

const LoanScreen = props => {
  const [deliveryDate, setDeliveryDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  const [vehiclePrice, setVehiclePrice] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [term, setTerm] = useState(1);

  return (
    <View style={styles.container}>
      {/*<Text style={styles.screenTitle}>Loan Calculator</Text>*/}
      <View style={styles.elementsContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Vehicle Price</Text>
          <TextInput
            style={styles.textInput}
            value={vehiclePrice}
            onChangeText={price => setVehiclePrice(price)}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Deposit Amount</Text>
          <TextInput
            style={styles.textInput}
            value={deposit}
            onChangeText={deposit => setDeposit(deposit)}
            keyboardType="number-pad"
          />
        </View>
      </View>
      <View style={styles.elementsContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Delivery Date</Text>
          <TouchableNativeFeedback
            onPress={() => {
              Keyboard.dismiss();
              setShow(true);
            }}>
            <Text style={{...styles.textInput, textAlignVertical: 'center'}}>
              {moment(deliveryDate).format('DD/MM/yyyy')}
            </Text>
          </TouchableNativeFeedback>
          {show && (
            <DateTimePicker
              value={new Date(Date.now())}
              minimumDate={new Date(Date.now())}
              onChange={(e, selectedDate) => {
                const currentDate = selectedDate || deliveryDate;
                setShow(Platform.OS === 'ios');
                setDeliveryDate(currentDate);
              }}
            />
          )}
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Term (years)</Text>
          <Picker
            selectedValue={term}
            style={styles.picker}
            onValueChange={value => {
              setTerm(value);
            }}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, /*disabled  && */ styles.buttonDisabled]}
        onPress={() => {
          props.navigation.navigate('Quote', {
            vehiclePrice,
            deposit,
            deliveryDate,
            term,
          });
        }}
        disabled={false}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
};

// TODO add validation to the form

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#3F4EA5',
  },
  // screenTitle: {
  //   fontSize: 35,
  //   textAlign: 'center',
  //   margin: 10,
  //   color: '#FFF',
  //   fontFamily: 'roboto-regular',
  // },
  inputWrapper: {
    marginBottom: 40,
    paddingHorizontal: 10,
    width: '45%',
  },
  elementsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    // width: '100%',
  },
  textInput: {
    height: 40,
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#3F4EA5',
  },
  label: {
    fontFamily: 'roboto-regular',
    fontSize: 16,
    marginBottom: 5,
    color: '#FFF',
  },
  picker: {
    height: 50,
    width: 100,
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
  buttonDisabled: {
    opacity: 0.5,
  },
});

export default LoanScreen;
