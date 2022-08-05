export default interface ICoinState {
  value: string[];
  status: "succeeded" | "loading" | "idle";
  allCoins: [];
}
