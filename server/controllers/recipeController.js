import Recipe from '../models/recipeModel.js'

export const createRecipe = async (req, res) => {
    const recipeBody = req.body;
    console.log(recipeBody);
    const newRecipe = {
        title: recipeBody.title,
        instructions: recipeBody.instructions,
        ingredients: recipeBody.ingredients,
        tags: recipeBody.tags,
        likeCount: recipeBody.likeCount,
        selectedFile: recipeBody.selectedFile
    }

    try {
        const recipe = await Recipe.create(newRecipe);
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()

        console.log(recipes)

        res.status(200).json({
            count: recipes.length,
            data: recipes
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id)

        console.log(recipe)

        res.status(200).json({
            data: recipe
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        if (
            !req.body.title ||
            !req.body.ingredients ||
            !req.body.instructions
        ) {
            return response.status(400).send({
                message: 'Title, ingredients, and instructions are required fields.'
            });
        }

        const result = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
        if (!result) {
            return res.status(404).send({ message: 'Recipe not found' })
        }
        return res.status(200).send({ message: 'Recipe updated successfully', data: result })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Recipe.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({ message: 'Recipe not found' })
        }
        return res.status(200).send({ message: 'Recipe deleted successfully' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


