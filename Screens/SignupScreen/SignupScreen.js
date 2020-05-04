import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from '../../components/core/Header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
});

export const SignupScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Sign Up" navigation={navigation} />
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <Button
          title="Sign in"
          onPress={() => {
            navigation.navigate('Signin');
          }}
        />
      </View>
    </SafeAreaView>
  );
};
