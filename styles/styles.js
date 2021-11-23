import { StyleSheet } from "react-native";

// This file contains styles for the different screens and components
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 10,
        backgroundColor: 'rgb(240, 240, 240)',
    },
    header: {
        paddingVertical: 10,
        alignItems: 'center',
    },
    btnGroup: {
        padding: 20,
        flex: 0.6,
        justifyContent: 'space-between',
    },
    textInputStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        borderColor: 'black',
        color: 'black',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        textAlign: 'center',
        width: '90%',
        marginVertical: 10
    },
    textStyle: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
    numbersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 282,
        height: 348,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        width: 75,
        height: 75,
        borderRadius: 75,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    numberText: {
        fontSize: 36,
        color: 'black',
        letterSpacing: 0,
        textAlign: 'center'
    }
});
