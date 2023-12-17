import React from "react";
import { Container, AppBar, Toolbar, Menu, MenuItem, Button, Avatar, Grow, Grid } from '@material-ui/core';
import { useState } from "react";
import NavHeader from './components/NavHeader/NavHeader.js'

import Form from './components/Form/Form.js'
import Recipes from './components/Recipes/Recipes.js'
import logo from './images/logo.png'
import menuImg from './images/menu.png'
import styles from "./styles.css";
import RecipeContainer from "./components/RecipesContainer.js";
import { HashLink as Link } from 'react-router-hash-link';

const App = () => {

    const [seen, setSeen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);

    function togglePop() {
        setSeen(!seen);
        handleClose();
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    return (
        <>
            <NavHeader />
            <div className="hero-image">
                <div className="hero-text">
                    <h1>The world's virtual cookbook</h1>
                    <button className={"button-74"} onClick={togglePop}>Share your recipe</button>
                </div>
            </div >
            <div><RecipeContainer /></div>
            {seen ? <Form toggle={togglePop} /> : null}
        </>
    )
}

export default App;