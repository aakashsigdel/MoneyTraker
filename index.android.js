'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';
import AddAccount from './components/AddAccount';
import ViewStats from './components/ViewStats';
import MainContainer from './components/MainContainer';

class MoneyTracker extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Header />
        <MainContainer />
      </View>
    )
  }
}

AppRegistry.registerComponent('MoneyTracker', () => MoneyTracker);
