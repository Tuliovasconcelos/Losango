import { StyleSheet, Platform, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const imageWidth = Dimensions.get('window').width * 0.6;
const imageFooter = Dimensions.get('window').width * 0.7;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: getStatusBarHeight(),

    },
    content: {
        flex: 1,
    },
    form: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    header: {
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.text,
    },
    recuperarSenha: {
        fontSize: 12,
        lineHeight: 32,
        textAlign: 'right',
        marginBottom: 25,
        color: colors.purple,
        fontFamily: fonts.text,
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderWidth: 1,
        color: colors.heading,
        width: 310,
        fontSize: 15,
        marginTop: 5,
        padding: 10,
        textAlign: 'left',
        borderRadius: 10,
        marginBottom: 5
    },
    buttonText: {
        fontSize: 18,
        color: colors.white,
        fontFamily: fonts.text
    },
    image: {
        width: imageWidth,
        marginLeft: 28,
    },
    imageFooter: {
        width: imageFooter
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
});
