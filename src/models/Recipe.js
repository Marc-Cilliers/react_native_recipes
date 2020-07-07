type Ingredient = {
  ingredient: string,
  amount: string,
  orAmount?: string,
};

type Recipe = {
  method: Array<string>,
  ingredients: Array<Ingredient>,
  servings: number,
  cookingTime: number,
  title: string,
  imageUrl: string,
};

export default Recipe;
