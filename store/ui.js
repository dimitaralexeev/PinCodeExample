import { createSlice } from '@reduxjs/toolkit';

// Pincode reducer for ui manipulations
const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        enteredPin: [],
    },
    reducers: {
        setEnteredPin(state, action) {
            if (state.enteredPin.length < 10)
                state.enteredPin.push(action.payload)
        },
        setEnteredPinEmpty(state) {
            state.enteredPin.length = 0;
        },
        removeLastElement(state) {
            state.enteredPin.pop();
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;