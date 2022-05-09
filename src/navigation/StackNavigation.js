import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Startscreen from '../screens/StartScreen/Startscreen';
import Onboard from '../screens/OnboardScreen/Onboard';
import LoginScreen from '../screens/LoginScreen/Login';
import RegisterScreen from '../screens/RegisterScreen/RegisterSreen';
import MainTabs from './MainTabs';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StartScreen"
          component={Startscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
