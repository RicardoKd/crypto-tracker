const TOP_50_COINS: string = "https://api.coingecko.com/api/v3/coins";

const SLICE_NAMES: { [key: string]: string } = {
  COIN_SLICE: "coins",
};

const STATE_STATUS: { [key: string]: string } = {
  SUCCESS: "succeeded",
  LOADING: "loading",
  IDLE: "idle",
};

const LOCAL_STORAGE_RENDERED_CARDS_KEY = "renderedCoins";

export {
  TOP_50_COINS,
  // IS_MOBILE_DEVICE,
  // TILT_CONFIG,
  LOCAL_STORAGE_RENDERED_CARDS_KEY,
  STATE_STATUS,
  SLICE_NAMES,
};
