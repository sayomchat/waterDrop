import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Header = ({title, navigation}) => {
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../../assets/icons/logo/icon.png')}
            style={{width: 40, height: 40, marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 3.5,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>Icon</Text>
      </View>
    </View>
  );
};

export default Header;
