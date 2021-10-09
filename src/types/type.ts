export interface ContinentType {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface FoodType {
  id: number;
  name: string;
  description: string | null;
  taste: string | null;
  sweet: string | null;
  created_at: string;
  updated_at: string;
}

export interface CoffeeType {
  id: number;
  continent_id: number;
  name: string;
  description: string | null;
  bitter: number | null;
  sour: number | null;
  rich: number | null;
  created_at: string;
  updated_at: string;
}
