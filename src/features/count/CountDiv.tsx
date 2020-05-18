import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/core';
import { AppDispatch } from 'stores';
import rem from 'utils/style/rem';
import DynamicStoreWrap, {
  CallbackOnStore,
} from 'utils/redux/DynamicStoreWrap';
import { reducerCombo1 } from 'reducers/reducerCombo';
import { selectFirstCount, selectSecondCount } from './countSelectors';
import { incrementFirst, incrementSecond } from './countSlice';

const numDivStyles = css`
  display: flex;
  align-items: center;
  margin: ${rem(10)};
  & > * {
    margin: 0 ${rem(10)};
    font-size: ${rem(20)};
  }
  & > button {
    padding: ${rem(12)} ${rem(16)};
  }
  & label input {
    margin-left: ${rem(10 * 2)};
    max-width: ${rem(80)};
    width: 100%;
    height: 100%;
    font-size: ${rem(20)};
    padding: ${rem(6)} ${rem(8)};
  }
`;

const CountDiv: FC = () => {
  const [add1, changeAdd1] = useState(0);
  const [add2, changeAdd2] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const num1 = useSelector(selectFirstCount);
  const num2 = useSelector(selectSecondCount);

  return (
    <div>
      <div css={numDivStyles}>
        <label htmlFor="add1">
          number1:
          <input
            type="number"
            id="add1"
            onChange={(e) => {
              changeAdd1(parseInt(e.target.value, 10));
            }}
            value={add1}
          />
        </label>
        <button type="button" onClick={() => dispatch(incrementFirst(add1))}>
          add first number
        </button>
        <p>{num1}</p>
      </div>
      <div css={numDivStyles}>
        <label htmlFor="add2">
          number2:
          <input
            type="number"
            id="add2"
            onChange={(e) => {
              changeAdd2(parseInt(e.target.value, 10));
            }}
            value={add2}
          />
        </label>
        <button type="button" onClick={() => dispatch(incrementSecond(add2))}>
          add second number
        </button>
        <p>{num2}</p>
      </div>
    </div>
  );
};

const callbackOnMount: CallbackOnStore = async (store) =>
  store.injectReducers(reducerCombo1);

const callbackOnUnmount: CallbackOnStore = async (store) =>
  store.removeReducers(['count']);

const CountDivWrap = () => (
  <DynamicStoreWrap
    callbackOnMount={callbackOnMount}
    callbackOnUnmount={callbackOnUnmount}
  >
    <CountDiv />
  </DynamicStoreWrap>
);

export default CountDivWrap;
