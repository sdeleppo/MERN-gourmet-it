import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipes from './Recipes/Recipes.js'
import cooking from '../images/chef-sloth.gif'

const RecipeContainer = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5000/recipes')
            .then((response) => {
                setRecipes(response.data.data);
                setLoading(false);
                console.log(recipes);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    {loading ? (
                        <img src={cooking} height="30%" alt="loading..." />
                    ) : (
                        <Recipes recipes={recipes} />
                    )}
                </Grid>
                <Grid item xs={12} sm={4}>
                    <input></input>
                    <button>Search</button>
                </Grid>
            </Grid>
        </Container>
    )
}
export default RecipeContainer;