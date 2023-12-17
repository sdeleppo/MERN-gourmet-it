import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchRecipes = () => axios.get(`${url}/recipes`);
export const createRecipe = (newRecipe) => axios.post(`${url}/recipe`, newRecipe);
export const updateRecipe = (id, updatedRecipe) => axios.put(`${url}/recipe/${id}`, updatedRecipe);
export const deleteRecipe = (id) => axios.delete(`${url}/recipe/${id}`);
export const likeRecipe = (id) => axios.put(`${url}/recipe/${id}/likeRecipe`);