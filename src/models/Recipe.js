type Ingredient = {
  ingredient: string,
  amount: string,
  orAmount?: string,
};

export type Recipe = {
  method: Array<string>,
  ingredients: Array<Ingredient>,
  servings: number,
  cookingTime: number,
  title: string,
  imageUrl: string,
};
