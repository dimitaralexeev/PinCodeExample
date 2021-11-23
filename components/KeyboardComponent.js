import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui";

import styles from "../styles/styles";

// Custom keyboard for entering only digits.
const KeyboardComponent = () => {
    const dispatch = useDispatch();

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const numberHandler = (val) => {
        dispatch(uiActions.setEnteredPin(val))
    };

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.numbersContainer}>
                {
                    array.map(val => {
                        return (
                            <TouchableOpacity style={styles.number} key={val} onPress={() => numberHandler(val)}>
                                <Text style={styles.numberText}>{val}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                <TouchableOpacity style={styles.number}>
                    <Text style={styles.numberText}></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.number} onPress={() => numberHandler(0)}>
                    <Text style={styles.numberText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.number} onPress={() => dispatch(uiActions.removeLastElement())}>
                    <Text style={styles.numberText}>{'<'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default KeyboardComponent;