import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/core';
import { updateFirst, updateSecond } from './textSlice';
import { AppDispatch } from '../../stores';
import { selectFirstText, selectSecondText } from './textSelectors';
import rem from '../../utils/style/rem';
import DynamicStoreWrap, {
  CallbackOnStore,
} from '../../utils/redux/DynamicStoreWrap';
import { reducerCombo2 } from '../../reducers/reducerCombo';

const strDivStyles = css`
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

const TextDiv: FC = () => {
  const [input1, changeInput1] = useState('');
  const [input2, changeInput2] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const text1 = useSelector(selectFirstText);
  const text2 = useSelector(selectSecondText);

  return (
    <div>
      <div css={strDivStyles}>
        <input
          type="text"
          onChange={(e) => {
            changeInput1(e.target.value);
          }}
          value={input1}
        />
        <button type="button" onClick={() => dispatch(updateFirst(input1))}>
          change first text
        </button>
        <p>{text1}</p>
      </div>
      <div css={strDivStyles}>
        <input
          type="text"
          onChange={(e) => {
            changeInput2(e.target.value);
          }}
          value={input2}
        />
        <button type="button" onClick={() => dispatch(updateSecond(input2))}>
          change second text
        </button>
        <p>{text2}</p>
      </div>
    </div>
  );
};

const callbackOnMount: CallbackOnStore = async (store) =>
  store.injectReducers(reducerCombo2);

const callbackOnUnmount: CallbackOnStore = async (store) =>
  store.removeReducers(['count']);

const TextDivWrap = () => (
  <DynamicStoreWrap
    callbackOnMount={callbackOnMount}
    callbackOnUnmount={callbackOnUnmount}
  >
    <TextDiv />
  </DynamicStoreWrap>
);

export default TextDivWrap;
