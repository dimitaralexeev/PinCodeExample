import React, { useState } from "react";
import { Alert, Button, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/styles";
import { pinCodeActions } from "../store/pinCode";
import { uiActions } from "../store/ui";
import KeyboardComponent from "./KeyboardComponent";

// Second screen of the app for changing the pin code
const ChangePinScreen = ({ navigation }) => {
    const [isNextBtnPressed, setIsNextBtnPressed] = useState(false);

    const getPinCode = useSelector(state => state.pinCode.pin);
    const enteredPin = useSelector(state => state.ui.enteredPin).join('');

    const dispatch = useDispatch();

    const changePinCodeHandler = () => {
        createAlertMsg();
        dispatch(pinCodeActions.setPinCode(enteredPin));
    };

    const okHandler = () => {
        dispatch(uiActions.setEnteredPinEmpty());
        setIsNextBtnPressed(false);
        navigation.navigate('Home');
    }

    const nextHandler = () => {
        dispatch(uiActions.setEnteredPinEmpty());
        setIsNextBtnPressed(true);
    };

    function createAlertMsg() {
        Alert.alert(
            "Great!",
            "You've changed your pin code!",
            [
                { text: "OK", onPress: okHandler }
            ]
        );
    };

    return (
        <View style={styles.container}>
            {!isNextBtnPressed &&
                <View style={styles.header}>
                    <Text style={styles.textStyle}>Add old pin code</Text>
                    <Text style={styles.textInputStyle}>{enteredPin}</Text>
                </View>
            }
            {getPinCode === enteredPin && !isNextBtnPressed &&
                <View style={styles.btnGroup}>
                    < Button
                        title="Next"
                        color="#138B3B"
                        onPress={nextHandler}
                    />
                </View>
            }
            {isNextBtnPressed &&
                <View style={styles.header}>
                    <Text style={styles.textStyle}>Add new pin code</Text>
                    <Text style={styles.textInputStyle}>{enteredPin}</Text>
                </View>
            }
            {isNextBtnPressed && enteredPin.length >= 4 &&
                <View style={styles.btnGroup}>
                    < Button
                        title="Change your pin code"
                        color="#138B3B"
                        onPress={changePinCodeHandler}
                    />
                </View>
            }
            <View>
                <KeyboardComponent />
            </View>
        </View >
    );
};

export default ChangePinScreen;