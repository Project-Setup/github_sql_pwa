import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/core';
import { incrementFirst, incrementSecond } from './countSlice';
import { AppDispatch } from '../../stores';
import { selectFirstCount, selectSecondCount } from './countSelectors';
import rem from '../../utils/style/rem';
import DynamicStoreWrap, {
  CallbackOnStore,
} from '../../utils/redux/DynamicStoreWrap';
import { reducerCombo1 } from '../../reducers/reducerCombo';

const numDivStyles = css`
  display: flex;
  align-items: center;
  margin: ${rem(5)};
  & > * {
    margin: 0 ${rem(5)};
  }
  & > input {
    max-width: ${rem(50)};
    width: 100%;
    height: ${rem(15)};
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
        <input
          type="number"
          onChange={(e) => {
            changeAdd1(parseInt(e.target.value, 10));
          }}
          value={add1}
        />
        <button type="button" onClick={() => dispatch(incrementFirst(add1))}>
          add first number
        </button>
        <p>{num1}</p>
      </div>
      <div css={numDivStyles}>
        <input
          type="number"
          onChange={(e) => {
            changeAdd2(parseInt(e.target.value, 10));
          }}
          value={add2}
        />
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
