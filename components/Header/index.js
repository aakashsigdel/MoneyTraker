'use strict';

import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './style';

export default class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Money Tracker
        </Text>
      </View>
    );
  }
}
