/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoanScreen from './screens/LoanScreen';
import QuoteScreen from './screens/QuoteScreen';
import Colors from './constants/Colors';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
            elevation: 3,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'roboto-regular',
          },
        }}>
        <Stack.Screen
          name={'Loan'}
          component={LoanScreen}
          options={{title: 'Loan Calculator'}}
        />
        <Stack.Screen
          name={'Quote'}
          component={QuoteScreen}
          options={{title: 'Special Quote'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
