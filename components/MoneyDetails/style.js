'use strict';

import { StyleSheet } from 'react-native';
import { VIEWPORT } from '../../utils';

let styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 23,
  },
  circleContainer: {
    flex: 1,
  },
  circle: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B95C9',
    borderRadius: 22,
  },
  details: {
    flex: 4,
    paddingRight: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  payContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleText: {
    color: 'white',
    fontSize: 17,
  },
  headerText: {
    fontSize: 17,
  },
  netValueText: {
    fontSize: 13,
  },
  payDetail: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  text: {
    fontFamily: 'AvenirNext-DemiBold',
    color: 'black',
  },
  textLight: {
    fontFamily: 'AvenirNext-Medium',
    color: 'black',
  },
};

export default styles = StyleSheet.create(styles);
