export interface CurrencyResponseItemProps {
  currency: string;
  name: string;
  sell_price: number | 0;
  buy_price: number | 0;
  current_change: number | 0;
  logo: string;
}

export interface CurrencyItemProps {
  currency: string;
  name: string;
  logo: string;
}
