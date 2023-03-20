import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAMES } from "../constants";
import ICoinState from "../interfaces/ICoinState";
import { reducers, fetchAPI } from "../reducers/coinReducer";

const initialState: ICoinState = {
  value: [],
  status: "idle",
  allCoins: [],
};

export const coinSlice = createSlice({
  name: SLICE_NAMES.COIN_SLICE,
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allCoins = action.payload;
      });
  },
});

export const {
  addCoinToRender,
  setCoinsToRender,
  removeCoinFromRender,
  updateRenderedCoin,
} = coinSlice.actions;

export const selectCoinState = (state: RootState) => state.coin;
export const selectStatus = (state: RootState) => state.coin.status;
export const selectAllCoins = (state: RootState) => state.coin.allCoins;
export const selectRenderedCoins = (state: RootState) => state.coin.value;

export default coinSlice.reducer;
