import axios from 'axios';

const url = 'http://localhost:5000/recipe';

export const fetchRecipes = () => axios.get('${url}s');
export const createRecipe = (newRecipe) => axios.post(url, newRecipe);
export const updateRecipe = (id, updatedRecipe) => axios.patch('${url}/${id}', updatedRecipe);
export const deleteRecipe = (id) => axios.delete('${url}/${id}/likeRecipe');