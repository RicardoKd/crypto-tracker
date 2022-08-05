// import { STATE_STATUS } from "../constants";

export default interface ICoinState {
  value: string[];
  status: "succeeded" | "loading" | "idle";
  allCoins: [];
}
