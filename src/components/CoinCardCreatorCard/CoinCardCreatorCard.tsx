import React from "react";
import { useAppDispatch } from "../../app/hooks";

import { addCoinToRender } from "../../app/coinSlice";

import CoinsList from "../CoinList/CoinList";

import styles from "./CoinCardCreatorCard.module.css";
import "../../index.css";

const CoinCardCreatorCard = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={`card ${styles.coinCardCreatorCard}`}>
      <div className={`${styles.face} ${styles.face1}`}>
        <p>Add more coins</p>
      </div>

      <div className={`${styles.face} ${styles.face2}`}>
        <h2>
          <span className={`${styles.plus} ${styles.plusHorizontalLine}`} />
          <span className={`${styles.plus} ${styles.plusVerticalLine}`} />
        </h2>
        <div className={styles.coinList}>
          <CoinsList
            listItemOnClick={(e) =>
              dispatch(addCoinToRender((e.target as HTMLElement).innerText))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CoinCardCreatorCard;
