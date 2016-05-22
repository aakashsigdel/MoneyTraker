'use strict';

import React, {
  Component,
  ListView,
  View,
} from 'react-native';
import MoneyDetails from '../MoneyDetails';
import styles from './style';

export default class ViewStats extends Component {
  constructor () {
    super();
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.dataSource = this.ds.cloneWithRows(this.list);
  }

  _renderMoneyDetails () {
    return (
      <View style={styles.rowContainer}>
        <MoneyDetails />
      </View>
    );
  }

  render () {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this._renderMoneyDetails.bind(this)}
      />
    );
  }
}
