import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";

import CardContainer from "./components/CardContainer/CardContainer";

import { fetchAPI } from "./reducers/coinReducer";
import { selectStatus } from "./app/coinSlice";

import { STATE_STATUS } from "./constants";

import "./App.css";

const App = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  useEffect(() => {
    // TODO: load data from local storage
  }, [status]);

  return (
    <div className="App">
      <div className="background" />
      {status === STATE_STATUS.SUCCESS ? <CardContainer /> : null}
    </div>
  );
};

export default App;
