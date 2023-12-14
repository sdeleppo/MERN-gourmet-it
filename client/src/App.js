import React from "react";
import { Container, AppBar, Toolbar, Menu, MenuItem, Button, Avatar, Grow, Grid } from '@material-ui/core';
import { useState } from "react";
import { Header } from 'semantic-ui-react'

import Form from './components/Form/Form.js'
import Recipes from './components/Recipes/Recipes.js'
import logo from './images/logo.png'
import menuImg from './images/menu.png'
import styles from "./styles.css";
import RecipeContainer from "./components/RecipesContainer.js";
import { HashLink as Link } from 'react-router-hash-link';

const App = () => {

    const [seen, setSeen] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);

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
            <AppBar position="static">
                <Toolbar variant="dense" className={"toolbar"}>
                    <img src={logo} alt="logo" height="80" />
                    <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}>
                        {<Avatar src={menuImg} />}
                    </Button>
                    <Menu
                        keepMounted
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        open={Boolean(anchorEl)}>
                        <MenuItem onClick={handleClose}>
                            <Link to="/#recipes">View Recipes</Link>
                        </MenuItem>
                        <MenuItem onClick={togglePop}>
                            Share your Recipe
                        </MenuItem>
                        {seen ? <Form toggle={togglePop} /> : null}
                    </Menu>
                    {seen ? <Form toggle={togglePop} /> : null}
                    <Header as='h1' className="heading">Gourmet It</Header>
                    <button className={"button-74"}>Login</button>
                </Toolbar ></AppBar>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>The world's virtual cookbook</h1>
                    <button className={"button-74"} onClick={togglePop}>Share your recipe</button>
                </div>
            </div >
            <div id="recipes"><RecipeContainer /></div>
        </>
    )
}

export default App;