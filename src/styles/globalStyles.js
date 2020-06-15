import {
    StyleSheet
} from 'react-native';
import colors from './colors'

const globalStyles = StyleSheet.create({
    globalContainer: {
        flex: 1,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.mainColor
    },
    hr: {
        width: "100%",
        height: 1.5,
        backgroundColor: '#EFEEF3',
        borderBottomWidth: 0.4, borderColor: '#c9c3c3'
    }



})



export default globalStyles