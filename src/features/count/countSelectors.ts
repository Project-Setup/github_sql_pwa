import { RootState } from '../../stores';

export const selectFirstCount = (state: RootState) => state.count[0];

export const selectSecondCount = (state: RootState) => state.count[1];
