'use strict';

import React, {
  Component,
  Text,
  View,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import AddAccount from '../AddAccount';
import ViewStats from '../ViewStats';
import styles from './style';

export default class MainContainer extends Component {
  render () {
    return (
      <ScrollableTabView
        tabBarUnderlineColor="white"
        tabBarBackgroundColor="#478978"
        tabBarActiveTextColor="white"
        tabBarInactiveTextColor="rgba(255, 255, 255, 0.6)"
        >
        <AddAccount tabLabel="Add Accounts" />
        <ViewStats tabLabel="View Stats" />
      </ScrollableTabView>
    );
  }
}
