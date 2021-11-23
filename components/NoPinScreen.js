import React from "react";
import { View, Button, Keyboard, Text } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import { pinCodeActions } from '../store/pinCode';
import { uiActions } from '../store/ui';
import styles from '../styles/styles';
import KeyboardComponent from "./KeyboardComponent";

// Screen shows when the pin code is not added. 
const NoPinScreen = () => {
    const enteredPin = useSelector(state => state.ui.enteredPin).join('');

    const dispatch = useDispatch();

    const addNewPinCodeHandler = () => {
        dispatch(pinCodeActions.setPinCode(enteredPin));
        dispatch(uiActions.setEnteredPinEmpty());
        Keyboard.dismiss();
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textStyle}>No pin code available</Text>
                <Text style={styles.textInputStyle}>{enteredPin}</Text>
                <Text>min. length 4 digits</Text>
            </View >
            <View style={styles.btnGroup}>
                {enteredPin.length >= 4 &&
                    <Button
                        title="Add a new pin code"
                        color="#138B3B"
                        onPress={addNewPinCodeHandler}
                    />}
            </View>
            <View>
                <KeyboardComponent />
            </View>
        </View>
    );
};

export default NoPinScreen;