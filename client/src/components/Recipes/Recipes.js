import React, { useState } from "react";
import Recipe from "./Recipe/Recipe.js"
import styles from "./styles.css";
import { Grid, CircularProgress } from '@material-ui/core';
import cooking from '../../images/chef-sloth.gif'

const Recipes = ({ recipes }) => {
    const [loading, setLoading] = useState(false);

    return (
        !recipes.length ? (
            <>
                <h1>No recipes found, add yours today!</h1>
                <img src={cooking} height="30%" alt="loading..." />
            </>
        ) : (
            <Grid className="mainContainer" container alignItems="stretch" spacing={3}>
                {recipes.map((recipe) => (
                    <Grid key={recipe._id} item xs={12} sm={6} md={6}>
                        <Recipe recipe={recipe} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}
export default Recipes;