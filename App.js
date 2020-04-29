import 'react-native-gesture-handler';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import PrimaryNavigation from './Navigator/Navigator';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <PrimaryNavigation />;
  }
}
