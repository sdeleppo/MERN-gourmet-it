import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipes from './Recipes/Recipes.js'
import cooking from '../images/chef-sloth.gif'
import * as api from '../api/apiService.js'
import { useSnackbar } from 'notistack';
import Search from './Search/Search.js';
import styles from '../styles.css'

const RecipeContainer = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        api
            .fetchRecipes()
            .then((response) => {
                setRecipes(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                enqueueSnackbar('An error occurred while loading recipes, see console for details.', { variant: 'error' })
            });
    }, []);
    return (
        <Container id="recipes">
            <Grid container className="recipes-container" justifyContent="space-between" alignItems="stretch" spacing={3} >
                <Grid item xs={12} sm={7}>
                    {loading ? (
                        <img src={cooking} height="30%" alt="loading..." />
                    ) : (
                        <Recipes recipes={recipes} />
                    )}
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Search />
                </Grid>
            </Grid>
        </Container>
    )
}
export default RecipeContainer;