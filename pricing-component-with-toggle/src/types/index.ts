export interface PricingCard {
  title: string;
  price: {
    monthly: number;
    annually: number;
  };
  features: string[];
  isPopular?: boolean;
}