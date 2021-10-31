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

export interface TopPage {
  status: number;
  continents: ContinentType[];
  foods: FoodType[];
}

export interface FoodsPage {
  status: number;
  foods: FoodType[];
}

export interface FoodDetailPage {
  status: number;
  food: FoodType;
  coffees: CoffeeType[];
}

export interface CoffeesPage {
  status: number;
  coffees: CoffeeType[];
}

export interface CoffeeDetailPage {
  status: number;
  coffee: CoffeeType;
  foods: FoodType[];
}
