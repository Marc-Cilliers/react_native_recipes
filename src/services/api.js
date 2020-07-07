// @ flow

const getAllRecipes = async () => {
  try {
    const result = await fetch('https://www.secondnature.io/api/test-recipes');
    const data = await result.json();
    return data.recipes;
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.export({
  getAllRecipes,
});
