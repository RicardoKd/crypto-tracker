import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import { ReactSortable, ItemInterface } from "react-sortablejs";
import TiltCoinCard from "../CoinCard/TiltCoinCard";
import TiltCoinCardCreatorCard from "../CoinCardCreatorCard/TiltCoinCardCreatorCard";

import { selectRenderedCoins, setCoinsToRender } from "../../app/coinSlice";

import styles from "./CardContainer.module.css";

const CardContainer = () => {
  const renderedCoins = useAppSelector(selectRenderedCoins);

  const dispatch = useAppDispatch();

  const checkListIdenticaltoRenderedCoins = (list: string[]): boolean => {
    let i = 0;
    let areIdentical = true;

    list.forEach((coinName: string) => {
      if (renderedCoins[i] !== coinName) {
        areIdentical = false;
      }

      i++;
    });

    return areIdentical;
  };

  const reactSortableSetList = (newList: ItemInterface[]): void => {
    if (!newList.length) {
      return;
    }
    const newListFormated = newList.map((el) => el.coinName);

    if (checkListIdenticaltoRenderedCoins(newListFormated)) {
      return;
    }

    dispatch(setCoinsToRender(newListFormated));
  };

  const reactSortableGetList = renderedCoins.map((coinName): ItemInterface => {
    return { coinName, id: Math.random() };
  });

  return (
    <ReactSortable
      className={styles.cardContainer}
      list={reactSortableGetList}
      setList={(newList: ItemInterface[]) => reactSortableSetList(newList)}
      animation={500}
      delayOnTouchOnly={true}
      delay={500}
    >
      {renderedCoins.map((coinName, index) => (
        <TiltCoinCard coinName={coinName} key={index} />
      ))}
      <TiltCoinCardCreatorCard />
    </ReactSortable>
  );
};

export default CardContainer;
