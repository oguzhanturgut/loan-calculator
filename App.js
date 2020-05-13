/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-community/picker';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Loan Calculator</Text>
      <View style={styles.elementsContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Vehicle Price</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Deposit Amount</Text>
          <TextInput style={styles.textInput} />
        </View>
      </View>
      <View>
        {/*<DateTimePicker*/}
        {/*  value={new Date(Date.now())}*/}
        {/*  minimumDate={new Date(Date.now())}*/}
        {/*/>*/}
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Term (years)</Text>
        <Picker
          selectedValue={1}
          style={styles.picker}
          onValueChange={() => {}}>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
        </Picker>
      </View>
      <TouchableOpacity
        style={[styles.button, /*disabled  && */ styles.buttonDisabled]}
        onPress={() => {}}
        disabled={false}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
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
  screenTitle: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    color: '#FFF',
    fontFamily: 'roboto-regular',
  },
  inputWrapper: {
    marginBottom: 15,
    paddingHorizontal: 10,
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

export default App;
