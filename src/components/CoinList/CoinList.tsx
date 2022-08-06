import React from "react";

import { useAppSelector } from "../../app/hooks";

import { selectAllCoins, selectRenderedCoins } from "../../app/coinSlice";

import ICoinsListProps from "../../interfaces/propsInterfaces/ICoinsListProps";

import styles from "./CoinList.module.css";

const CoinsList = ({ listItemOnClick }: ICoinsListProps) => {
  const coins = useAppSelector(selectAllCoins);
  const renderedCoins = useAppSelector(selectRenderedCoins);

  const notRenderedCoins = coins.filter(
    (coin) => !renderedCoins.includes(coin.name),
  );

  return (
    <ul className={styles.coinsList}>
      {notRenderedCoins.map((coin, index) => (
        <li className={styles.listItem} key={index}>
          <button
            className={`animated-text ${styles.listItemBtn}`}
            onClick={(e) => {
              listItemOnClick(e);
            }}
            type="button"
          >
            {coin.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CoinsList;
