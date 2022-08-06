export default interface ICoinAPI {
  name: string;
  symbol: string;
  image: { large: string };
  market_data: { current_price: { usd: number } };
}
