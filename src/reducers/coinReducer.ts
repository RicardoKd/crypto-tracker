import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { TOP_50_COINS, LOCAL_STORAGE_RENDERED_CARDS_KEY } from "../constants";
import ICoin from "../interfaces/ICoin";
import ICoinAPI from "../interfaces/ICoinAPI";
import ICoinState from "../interfaces/ICoinState";

const updateRenderedCoinsInLocalStorage = (stateValue: string[]) => {
  localStorage.setItem(LOCAL_STORAGE_RENDERED_CARDS_KEY, stateValue.join(","));
};

export const fetchAPI = createAsyncThunk(
  "coins/fetchAPI",
  async (): Promise<ICoin[]> => {
    const response = await fetch(TOP_50_COINS, { mode: "cors" });

    const coins: ICoinAPI[] = await response.json();

    return coins.map((coin) => ({
      name: coin.name,
      image: coin.image,
      symbol: coin.symbol,
      priceInUSD: coin.current_price,
    }));
  }
);

export const reducers = {
  addCoinToRender(state: ICoinState, action: PayloadAction<string>) {
    const newState = {
      ...state,
      value: [...state.value, action.payload],
    };

    updateRenderedCoinsInLocalStorage(newState.value);

    return newState;
  },
  setCoinsToRender(state: ICoinState, action: PayloadAction<string[]>) {
    const newState = {
      ...state,
      value: [...action.payload],
    };

    updateRenderedCoinsInLocalStorage(newState.value);

    return newState;
  },
  removeCoinFromRender(state: ICoinState, action: PayloadAction<string>) {
    const newState = {
      ...state,
      value: state.value.filter((coinName) => coinName !== action.payload),
    };

    updateRenderedCoinsInLocalStorage(newState.value);

    return newState;
  },
  updateRenderedCoin(
    state: ICoinState,
    action: PayloadAction<{ oldName: string; newName: string }>
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

    updateRenderedCoinsInLocalStorage(newState.value);

    return newState;
  },
};
