import React from "react";
import { useAppSelector } from "../../../app/hooks";

import { selectAllCoins } from "../../../app/coinSlice";

// import CoinCardMenuToggler from "../../CoinCardMenu/CoinCardMenuToggler";

import ICoin from "../../../interfaces/ICoin";
import ICoinCardFrontFaceProps from "../../../interfaces/propsInterfaces/ICoinCardFrontFaceProps";

import styles from "./CoinCardFrontFace.module.css";
import "../../../index.css";

const CoinCardFrontFace = ({
  coinName,
  showCoinList,
  setShowCoinList,
}: ICoinCardFrontFaceProps) => {
  const coins = useAppSelector(selectAllCoins);

  const coin = coins.find((coinEl: ICoin) => coinEl.name === coinName);

  if (!coin) {
    return null;
  }

  const { name, symbol, image, priceInUSD } = coin;

  return (
    <div>
      <img
        className={styles.cardImg}
        src={image}
        width="100%"
        alt={`${name} logo`}
      />
      <p className={`animated-text ${styles.coinCardName}`}>{name}</p>
      <p className={`animated-text ${styles.coinCardExchangeRate}`}>
        1 {symbol} = {priceInUSD} usd
      </p>
    </div>
  );
};

export default CoinCardFrontFace;
