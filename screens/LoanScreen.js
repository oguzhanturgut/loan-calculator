import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  Alert,
  TouchableNativeFeedback,
} from 'react-native';

import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from 'moment';
import CustomButtom from '../components/CustomButtom';

const LoanScreen = props => {
  const [deliveryDate, setDeliveryDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  const [vehiclePrice, setVehiclePrice] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [term, setTerm] = useState(1);

  const hasValidFormData = () => {
    return [vehiclePrice, deposit].every(item => item > 0);
  };

  const resetInputHandler = () => {
    setDeposit(0);
  };

  const onSubmitHandler = () => {
    const depositAmount = parseInt(deposit);
    const vehiclePriceAmount = parseInt(vehiclePrice);
    if (
      isNaN(depositAmount) ||
      depositAmount <= 0 ||
      depositAmount > vehiclePriceAmount ||
      depositAmount < (vehiclePriceAmount * 15) / 100
    ) {
      Alert.alert(
        'Invalid deposit amount',
        'Deposit should at least 15% of vehicle price.',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: resetInputHandler,
          },
        ],
      );
      return;
    }
    props.navigation.navigate('Quote', {
      vehiclePrice,
      deposit,
      deliveryDate,
      term,
    });
  };
  return (
    <View style={styles.container}>
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
              setShow(true);
            }}>
            <Text style={{...styles.textInput, textAlignVertical: 'center'}}>
              {moment(deliveryDate).format('DD/MM/YYYY')}
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
            mode={'dropdown'}
            onValueChange={value => {
              setTerm(value);
            }}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>
        </View>
      </View>
      <CustomButtom
        style={!hasValidFormData() && styles.buttonDisabled}
        buttonText={'Calculate'}
        disabled={!hasValidFormData()}
        onPress={onSubmitHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#3F4EA5',
  },
  inputWrapper: {
    marginBottom: 40,
    paddingHorizontal: 10,
    width: '45%',
  },
  elementsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    height: 40,
    width: 100,
    color: '#FFF',
    fontSize: 30,
  },
});

export default LoanScreen;
