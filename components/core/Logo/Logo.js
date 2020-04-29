import React from 'react';
import {Image} from 'react-native';

const source = {uri: 'https://reactnative.dev/img/tiny_logo.png'};

export const Logo = () => {
  return <Image style={{width: 50, height: 50}} source={source} />;
};
