import { GlobalCountState } from './countSlice';

export const selectFirstCount = (state: GlobalCountState) => state.count[0];

export const selectSecondCount = (state: GlobalCountState) => state.count[1];
