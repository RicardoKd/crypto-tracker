import React from "react";

import Tilty from "react-tilty";
import CoinCard from "./CoinCard";

import ICoinCardProps from "../../interfaces/propsInterfaces/ICoinCardProps";

import { IS_MOBILE_DEVICE, TILT_CONFIG } from "../../constants";

const TiltCoinCard = ({ coinName }: ICoinCardProps) => {
  if (IS_MOBILE_DEVICE) {
    return <CoinCard coinName={coinName} />;
  }

  return (
    <Tilty scale={TILT_CONFIG.SCALE} max={TILT_CONFIG.MAX}>
      <CoinCard coinName={coinName} />
    </Tilty>
  );
};

export default TiltCoinCard;
