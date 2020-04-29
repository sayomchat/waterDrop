import React from 'react';
import {useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../Screens/HomeScreen/HomeScreen';
import {ProfileScreen} from '../Screens/ProfileScreen/ProfileScreen';
import {LoginScreen} from '../Screens/LoginScreen/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
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
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => DrawerContainer({...props, user})}
        drawerType={isLargeScreen ? 'slide' : 'front'}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default PrimaryNavigation;
