import { StyleSheet, Platform, Dimensions } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const imageWidth = Dimensions.get('window').width * 0.4;
const imageFooter = Dimensions.get('window').width * 0.7;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    content: {
        flex: 1
    },
    form: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingHorizontal: 54
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
        color: colors.heading,
        width: 280,
        height:42,
        fontSize: 15,
        marginTop: 5,
        padding: 10,
        textAlign: 'left',
        borderRadius: 10,
        marginBottom: 5,
        borderWidth:1
    },
    footer: {
        marginTop: 60,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-around',

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
    viewCenter: {
        padding: 50
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    labelInput: {
        paddingLeft: 5,
        paddingTop: 5
    },
    viewImage: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    viewButton:{
        marginTop:12
    }
});
