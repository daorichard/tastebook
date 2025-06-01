export interface Recipe {
  id: string;
  name: string;
  ingredients: string;
  instructions: string;
  lastMade?: string; // optional
  memory?: string; // optional
}
