import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const DrawerContainer = props => {
  return (
    <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
      <ScrollView>
        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 40, height: 40, marginLeft: 10, flex: 1}}
              source={
                props.user.photo
                  ? null
                  : require('../../../assets/icons/logo/icon.png')
              }
            />
            <Text style={{flex: 4, textAlign: 'center'}}>
              {props.user.userName}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            props.navigation.navigate('Profile');
          }}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DrawerContainer;
