import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TOP_50_COINS } from "../constants";

import ICoinState from "../interfaces/ICoinState";

export const fetchAPI = createAsyncThunk("coins/fetchAPI", async () => {
  const response = await fetch(TOP_50_COINS);
  const coins = await response.json();

  return coins;
});

export const reducers = {
  addCoinToRender(state: ICoinState, action: PayloadAction<string>) {
    const newState = {
      ...state,
      value: [...state.value, action.payload],
    };

    return newState;
  },
  setCoinsToRender(state: ICoinState, action: PayloadAction<string[]>) {
    const newState = {
      ...state,
      value: [...action.payload],
    };
    return newState;
  },
  removeCoinFromRender(state: ICoinState, action: PayloadAction<string>) {
    const newState = {
      ...state,
      value: state.value.filter((coinName) => coinName !== action.payload),
    };

    return newState;
  },
  updateRenderedCoin(
    state: ICoinState,
    action: PayloadAction<{ oldName: string; newName: string }>,
  ) {
    const index = state.value.indexOf(action.payload.oldName);
    const renderedCoinsCopy = [...state.value];

    if (index !== -1) {
      renderedCoinsCopy[index] = action.payload.newName;
    }

    const newState = {
      ...state,
      value: renderedCoinsCopy,
    };

    return newState;
  },
};
