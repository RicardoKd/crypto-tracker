import React from "react";
import { useAppSelector } from "../../app/hooks";

import { selectRenderedCoins } from "../../app/coinSlice";

import styles from "./CardContainer.module.css";

const CardContainer = () => {
  const renderedCoins = useAppSelector(selectRenderedCoins);

  

  return (
<div className={styles.cardContainer}>
      {renderedCoins.map((coinName, index) => (
        <p key={index}>{coinName}</p>
      ))}
</div>
  );
};

export default CardContainer;
