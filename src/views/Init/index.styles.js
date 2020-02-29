import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {StyleSheet} from "react-native";
import {styles as globalStyles} from '../../styles/global.styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    minWidth: wp(80),
    textAlign: 'center',
    color: '#333333',
    marginBottom: hp('0.5%'),
  },
  ...globalStyles
});
