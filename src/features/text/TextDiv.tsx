import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/core';
import { AppDispatch } from 'stores';
import rem from 'utils/style/rem';
import DynamicStoreWrap, {
  CallbackOnStore,
} from 'utils/redux/DynamicStoreWrap';
import { reducerCombo2 } from 'reducers/reducerCombo';
import { selectFirstText, selectSecondText } from './textSelectors';
import { updateFirst, updateSecond } from './textSlice';

const strDivStyles = css`
  display: flex;
  align-items: center;
  margin: ${rem(5)};
  & > * {
    margin: 0 ${rem(5)};
  }
  & label input {
    margin-left: ${rem(5 * 2)};
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
        <label htmlFor="input1">
          text1:
          <input
            type="text"
            id="input1"
            onChange={(e) => {
              changeInput1(e.target.value);
            }}
            value={input1}
          />
        </label>

        <button type="button" onClick={() => dispatch(updateFirst(input1))}>
          change first text
        </button>
        <p>{text1}</p>
      </div>
      <div css={strDivStyles}>
        <label htmlFor="input2">
          text2:
          <input
            type="text"
            id="input2"
            onChange={(e) => {
              changeInput2(e.target.value);
            }}
            value={input2}
          />
        </label>
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
  store.removeReducers(['text']);

const TextDivWrap = () => (
  <DynamicStoreWrap
    callbackOnMount={callbackOnMount}
    callbackOnUnmount={callbackOnUnmount}
  >
    <TextDiv />
  </DynamicStoreWrap>
);

export default TextDivWrap;
