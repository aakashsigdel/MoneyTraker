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
        <View style={styles.innerContainer}>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={[styles.text, styles.circleText]}>
                P  
              </Text>
            </View>
          </View>
          <View style={styles.details}>

            <View style={styles.header}>
              <Text style={[styles.textLight, styles.headerText]}>
                Pravin Bashyal
              </Text>
              <Text style={[styles.text, styles.netValueText, {color: '#E73C17'}]}>
                - Rs  100
              </Text>
            </View>

            <View style={styles.payContainer}>
              <Text style={[styles.textLight, styles.payDetail]}>
                Pay: Rs 250
              </Text>
              <Text style={[styles.textLight, styles.payDetail]}>
                Take: Rs 150
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.hrLine} />
      </View>
    );
  }
}
