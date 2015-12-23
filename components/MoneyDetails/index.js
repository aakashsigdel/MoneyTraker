'use strict';

import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpactiy,
  View,
} from 'react-native';

import styles from './style';

export default class MoneyDetails extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          <Text style={[styles.text, styles.circleText]}>P</Text>
        </View>
        <View style={styles.header}>
          <Text style={[styles.text, styles.headerText]}>
            Pravin Bashyal
          </Text>
          <Text style={[styles.text, styles.netValueText]}>
            - Rs  100
          </Text>
        </View>
      </View>
    );
  }
}
