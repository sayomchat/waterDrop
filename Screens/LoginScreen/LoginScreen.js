import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GSigninButton from './../../components/library/GoogleSigninButton/GoogleSigninButton';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
});

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <GSigninButton />
    </View>
  );
};
