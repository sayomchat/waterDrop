import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen} from '../Screens/LoginScreen/LoginScreen';
import {SignupScreen} from '../Screens/SignupScreen/SignupScreen';
import PrimaryNavigation from './Navigator';
import {screenOptions} from '../constants/screenOptions';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin" screenOptions={screenOptions}>
        <Stack.Screen name="Signin" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={PrimaryNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
