'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';

export default class AddAccount extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={[styles.text, styles.label]}>
            Add Entity
          </Text>
          <TextInput
            placeholder="Select or Create New"
            placeholderTextColor="white"
            style={styles.textInput}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.text, styles.label]}>
            Add Amount
          </Text>
          <TextInput
            placeholder="0.0"
            keyboardType="numeric"
            placeholderTextColor="white"
            style={styles.textInput}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.text, styles.label]}>
            Add Type
          </Text>
          <TextInput
            placeholder="Give"
            placeholderTextColor="white"
            style={styles.textInput}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
          >
            <View style={styles.button}>
              <Text style={styles.text}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
