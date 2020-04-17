import { GlobalTextState } from './textSlice';

export const selectFirstText = (state: GlobalTextState) => state.text.text1;

export const selectSecondText = (state: GlobalTextState) => state.text.text2;
