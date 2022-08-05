import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";

import CardContainer from "./components/CardContainer/CardContainer";

import ICoin from './interfaces/ICoin';

import { fetchAPI } from "./reducers/coinReducer";
import { selectStatus, selectAllCoins, addCoinToRender } from "./app/coinSlice";

import { STATE_STATUS, LOCAL_STORAGE_RENDERED_CARDS_KEY } from "./constants";

import "./App.css";

const App = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const coins: ICoin[] = useAppSelector(selectAllCoins);

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  useEffect(() => {
    if (status === STATE_STATUS.SUCCESS) {
      const coinsFromPreviousSession = localStorage.getItem(
        LOCAL_STORAGE_RENDERED_CARDS_KEY,
      );

      if (coinsFromPreviousSession) {
        const coinsInLocalStorage = coinsFromPreviousSession.split(",");

        coinsInLocalStorage.forEach((coin) => dispatch(addCoinToRender(coin)));
      } else {
        // if the app is visited fo the first time
        for (let i = 0; i < 3; i += 1) {
          dispatch(addCoinToRender(coins[i].name));
        }
      }
    }
  }, [status]);

  return (
    <div className="App">
      <div className="background" />
      {status === STATE_STATUS.SUCCESS ? <CardContainer /> : null}
    </div>
  );
};

export default App;
