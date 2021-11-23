import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NoPinScreen from './components/NoPinScreen';
import ValidationScreen from './components/ValidationScreen';
import ChangePinScreen from './components/ChangePinScreen';

const Stack = createNativeStackNavigator();

// Using react navigation to switch between screens. Home screen has two states: 
// When pin code is not available and when it is available
const App = () => {
  const getPinCode = useSelector(state => state.pinCode.pin);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'rgb(240, 240, 240)'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          // component={NoPinScreen}
          component={getPinCode === '' ? NoPinScreen : ValidationScreen}
          options={{
            title: "Welcome to this pin code example!",
          }}
        />
        <Stack.Screen
          name="ChangePin"
          component={ChangePinScreen}
          options={{
            title: "Change your pin code",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
