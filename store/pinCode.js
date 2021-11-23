import { createSlice } from '@reduxjs/toolkit';

const pinCodeSLice = createSlice({
  name: 'pinCode',
  initialState: {
    pin: '',
  },
  reducers: {
    setPinCode(state, action) {
      state.pin = action.payload;
    },
  },
});

export const pinCodeActions = pinCodeSLice.actions;

export default pinCodeSLice.reducer;
