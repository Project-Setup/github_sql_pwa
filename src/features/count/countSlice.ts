import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

const countSlice = createSlice({
  name: 'count',
  initialState: [0, 0],
  reducers: {
    incrementFirst: (state, action: PayloadAction<number>) => {
      state[0] += action.payload;
    },
    incrementSecond: (state, action: PayloadAction<number>) => {
      state[1] += action.payload;
    },
  },
});

export default countSlice.reducer;

export type CountState = ReturnType<typeof countSlice['reducer']>;

export interface GlobalCountState {
  count: CountState;
}

export const { incrementFirst, incrementSecond } = countSlice.actions;
