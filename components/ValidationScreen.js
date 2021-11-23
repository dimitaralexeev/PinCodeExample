import React, { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import styles from "../styles/styles";
// import { pinCodeActions } from '../store/pinCode';
import { uiActions } from '../store/ui';
import KeyboardComponent from "./KeyboardComponent";

// Represents the main screen of the app with validation of the pin code.
const ValidationScreen = ({ navigation }) => {
    const getPinCode = useSelector(state => state.pinCode.pin);
    const enteredPin = useSelector(state => state.ui.enteredPin).join('');
    const [showElements, setShowElements] = useState(0);
    const [isCodeValide, setIsCodeValide] = useState(false);

    const dispatch = useDispatch();

    // const deletePinCodeHandler = () => {
    //     dispatch(pinCodeActions.setPinCode(''));
    //     dispatch(uiActions.setEnteredPinEmpty());
    // };

    const changePinCodeHandler = () => {
        dispatch(uiActions.setEnteredPinEmpty([]));
        navigation.navigate('ChangePin');
    };

    useEffect(() => {
        if (enteredPin === getPinCode) {
            setIsCodeValide(true);
            setShowElements(1);
        } else if (getPinCode.length === enteredPin.length && enteredPin !== getPinCode) {
            setIsCodeValide(false);
            setShowElements(2);
        } else {
            setShowElements(0);
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {showElements === 0 && <Text style={styles.textStyle}>Validate your pin code</Text>}
                {showElements !== 0 &&
                    <View>
                        {isCodeValide && <Text style={styles.textStyle}>Pin code is correct!</Text>}
                        {!isCodeValide && <Text style={styles.textStyle}>Pin code is not correct!</Text>}
                    </View>
                }
                <Text style={styles.textInputStyle}>{enteredPin}</Text>
            </View>
            {showElements === 1 &&
                <View style={styles.btnGroup}>
                    <Button
                        title="Change your pin code"
                        color="#138B3B"
                        onPress={changePinCodeHandler}
                    />
                    {/* <Button
                        title="Delete your pincode"
                        color="#D12323"
                        onPress={deletePinCodeHandler}
                    /> */}
                </View>
            }
            <View>
                <KeyboardComponent />
            </View>
        </View>
    );
};

export default ValidationScreen;