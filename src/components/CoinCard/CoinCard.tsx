import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";

import CoinCardFrontFace from "./FrontFace/CoinCardFrontFace";
import CoinsList from "../CoinList/CoinList";

import { updateRenderedCoin } from "../../app/coinSlice";

import ICoinCardProps from "../../interfaces/propsInterfaces/ICoinCardProps";

import styles from "./CoinCard.module.css";
import "../../index.css";

const CoinCard = ({ coinName }: ICoinCardProps) => {
  const [showCoinList, setShowCoinList] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <div className={`card ${styles.coinCard}`}>
      <CoinCardFrontFace
        coinName={coinName}
        showCoinList={showCoinList}
        setShowCoinList={setShowCoinList}
      />

      <div
        className={
          showCoinList
            ? `${styles.coinCardface2} ${styles.coinCardface2Active}`
            : `${styles.coinCardface2}`
        }
      >
        <button
          onClick={() => setShowCoinList(false)}
          className={styles.goBackBtn}
          type="button"
        >
          &#60;
        </button>
        <CoinsList
          listItemOnClick={(e) => {
            dispatch(
              updateRenderedCoin({
                oldName: coinName,
                newName: (e.target as HTMLElement).innerText,
              }),
            );
            setShowCoinList(false);
          }}
        />
      </div>
    </div>
  );
};

export default CoinCard;
