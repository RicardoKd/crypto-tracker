import React from "react";

import Tilt from "react-tilty";
import CoinCardCreatorCard from "./CoinCardCreatorCard";

import { IS_MOBILE_DEVICE, TILT_CONFIG } from "../../constants";

const TiltCoinCardCreatorCard = () => {
  if (IS_MOBILE_DEVICE) {
    <CoinCardCreatorCard />;
  }

  return (
    <Tilt scale={TILT_CONFIG.SCALE} max={TILT_CONFIG.MAX}>
      <CoinCardCreatorCard />
    </Tilt>
  );
};

export default TiltCoinCardCreatorCard;
