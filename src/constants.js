export const TOP_50_COINS =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50";

export const SLICE_NAMES = {
  COIN_SLICE: "coins",
};

export const STATE_STATUS = {
  SUCCESS: "succeeded",
  LOADING: "loading",
  IDLE: "idle",
};

export const LOCAL_STORAGE_RENDERED_CARDS_KEY = "renderedCoins";

export const IS_MOBILE_DEVICE = window.navigator.userAgentData.mobile;

export const TILT_CONFIG = { MAX: 10, SCALE: 0.95 };
