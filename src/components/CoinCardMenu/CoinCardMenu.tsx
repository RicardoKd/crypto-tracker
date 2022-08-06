import React from "react";
import { useAppDispatch } from "../../app/hooks";

import { removeCoinFromRender } from "../../app/coinSlice";

import ICoinCardMenu from "../../interfaces/propsInterfaces/ICoinCardMenu";

import styles from "./CoinCardMenu.module.css";

const CoinCardMenu = ({
  coinName,
  showCoinList,
  setShowCoinList,
  showSelf,
}: ICoinCardMenu) => {
  const dispatch = useAppDispatch();

  return (
    <ul
      className={
        showSelf
          ? `${styles.coinCardMenu} ${styles.coinCardMenuActive}`
          : styles.coinCardMenu
      }
    >
      <li>
        <button
          className={`animated-text ${styles.listItemBtn}`}
          onClick={() => setShowCoinList(!showCoinList)}
          type="button"
        >
          Change coin
        </button>
      </li>
      <li>
        <button
          className={`animated-text ${styles.listItemBtn}`}
          onClick={() => dispatch(removeCoinFromRender(coinName))}
          type="button"
        >
          Delete coin
        </button>
      </li>
    </ul>
  );
};

export default CoinCardMenu;
