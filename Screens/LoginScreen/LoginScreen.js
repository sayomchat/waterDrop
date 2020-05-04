import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import GSigninButton from './../../components/library/GoogleSigninButton/GoogleSigninButton';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
});

export const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <GSigninButton navigation={navigation} />
      <Button
        title="Sign up"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
    </View>
  );
};
