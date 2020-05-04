import React from 'react';
import {useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../Screens/HomeScreen/HomeScreen';
import {ProfileScreen} from '../Screens/ProfileScreen/ProfileScreen';
import DrawerContainer from '../components/core/Drawer/Drawer';

const Drawer = createDrawerNavigator();

const PrimaryNavigation = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  const user = {
    userName: 'userName',
    photo: null,
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => DrawerContainer({...props, user})}
      drawerType={isLargeScreen ? 'slide' : 'front'}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default PrimaryNavigation;
