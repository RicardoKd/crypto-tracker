const TOP_50_COINS = "https://api.coingecko.com/api/v3/coins";

const SLICE_NAMES = {
  COIN_SLICE: "coins",
};

const STATE_STATUS = {
  SUCCESS: "succeeded",
  LOADING: "loading",
  IDLE: "idle",
};

const LOCAL_STORAGE_RENDERED_CARDS_KEY = "renderedCoins";

const IS_MOBILE_DEVICE = window.navigator.userAgentData.mobile;

const TILT_CONFIG = { MAX: 10, SCALE: 0.95 };

export {
  TOP_50_COINS,
  IS_MOBILE_DEVICE,
  TILT_CONFIG,
  LOCAL_STORAGE_RENDERED_CARDS_KEY,
  STATE_STATUS,
  SLICE_NAMES,
};
