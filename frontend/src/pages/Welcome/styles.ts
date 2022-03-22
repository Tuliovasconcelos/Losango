import { StyleSheet, Platform, Dimensions } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const statusBarHeight = Platform.OS === 'android' ? 12 : 0;
const imageWidth = Dimensions.get('window').width * 0.6;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: statusBarHeight,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 120,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  image: {
    width: imageWidth
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
    marginBottom: 80,
  },
  button: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 50,
    width: 200,
    height: 56,
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white
  },
  labelButton: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.white
  }
});