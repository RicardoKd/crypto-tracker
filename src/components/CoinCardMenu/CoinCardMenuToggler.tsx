import React, { useState } from "react";

import CoinCardMenu from "./CoinCardMenu";

import ICoinCardMenuTogglerProps from '../../interfaces/propsInterfaces/ICoinCardMenuTogglerProps';

import styles from "./CoinCardMenu.module.css";

const CoinCardMenuToggler = ({ coinName, showCoinList, setShowCoinList }: ICoinCardMenuTogglerProps) => {
  const [showCoinCardMenu, setShowCoinCardMenu] = useState(false);

  return (
    <span
      className={styles.cardMenuTogglerBtn}
      onClick={() => setShowCoinCardMenu(!showCoinCardMenu)}
    >
      &#10247;
      <CoinCardMenu
        coinName={coinName}
        showCoinList={showCoinList}
        setShowCoinList={setShowCoinList}
        showSelf={showCoinCardMenu}
      />
    </span>
  );
};

export default CoinCardMenuToggler;
