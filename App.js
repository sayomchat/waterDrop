import 'react-native-gesture-handler';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './Navigator/StackNavigator';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <StackNavigation />;
  }
}
