import count from 'features/count/countSlice';
import text from 'features/text/textSlice';

export const commonReducer = {};

export const reducerCombo1 = {
  count,
};

export const reducerCombo2 = {
  text,
};
