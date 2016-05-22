import { StyleSheet } from 'react-native';
import { VIEWPORT } from '../../utils';

let styles = {
  container: {
    flex: 1,
    paddingTop: 33,
  },
  itemContainer: {
    paddingLeft: 30,
    paddingBottom: 43,
  },
  text: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 17,
  },
  textLight: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 17,
  },
  textInput: {
    width: 240,
    height: 40,
    backgroundColor: '#84DCC6',
    color: 'white',
    paddingLeft: 15,
    paddingRight: 10,
    marginLeft: 48,
    marginTop: 15,
  },
  buttonContainer: {
    width: VIEWPORT.width,
    alignItems: 'flex-end',
    paddingRight: 30,
    marginTop: 25,
  },
  button: {
    width: 145,
    height: 35,
    backgroundColor: '#ACD7EC',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
};

export default styles = StyleSheet.create(styles);

