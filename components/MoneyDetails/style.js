'use strict';

import { StyleSheet } from 'react-native';
import { VIEWPORT } from '../../utils';

let styles = {
  container: {
    paddingTop: 18,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 23,
    marginRight: 0.15 * VIEWPORT.width,
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
    flex: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 7,
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
  hrLine: {
    borderWidth: 0.2,
    backgroundColor: '#979797',
    borderColor: 'black',
    width: 0.8 * VIEWPORT.width,
    alignSelf: 'center',
    marginTop: 18,
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
