import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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

export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Home" navigation={navigation} />
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};
