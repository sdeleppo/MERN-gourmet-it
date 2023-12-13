import express from "express";

import { getRecipes, createRecipe, getRecipe, updateRecipe, deleteRecipe } from '../controllers/recipeController.js'

const router = express.Router();

router.get('/recipes', getRecipes);
router.get('/recipe/:id', getRecipe);
router.put('/recipe/:id', updateRecipe);
router.post('/recipe', createRecipe);
router.delete('/recipe/:id', deleteRecipe);

export default router;