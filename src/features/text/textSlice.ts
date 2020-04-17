import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

const textSlice = createSlice({
  name: 'text',
  initialState: {
    text1: '',
    text2: '',
  },
  reducers: {
    updateFirst: (state, action: PayloadAction<string>) => {
      state.text1 = action.payload;
    },
    updateSecond: (state, action: PayloadAction<string>) => {
      state.text2 = action.payload;
    },
  },
});

export default textSlice.reducer;

export type TextState = ReturnType<typeof textSlice['reducer']>;

export interface GlobalTextState {
  text: TextState;
}

export const { updateFirst, updateSecond } = textSlice.actions;
