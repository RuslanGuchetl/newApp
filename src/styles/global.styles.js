import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  mb5perc: {
    marginBottom: hp('5%')
  },
  mr10perc: {
    marginRight: wp('10%')
  }
});
