import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useState } from "react";

import Form from './components/Form/Form.js'
import Posts from './components/Posts/Posts.js'
import logo from './images/logo.png'

import styles from "./styles.css";
import Toolbar from "@material-ui/core/Toolbar";
import { Header } from 'semantic-ui-react'

const App = () => {

    const [seen, setSeen] = useState(false)

    function togglePop() {
        setSeen(!seen);
    };

    return (
        <>

            <Toolbar variant="dense" className={"toolbar"}>
                <img src={logo} alt="logo" height="80" />
                <div className="button-padding">
                    <button className={"button-74"}>View Recipes</button></div>
                <div style={{ display: "flex" }}><button className={"button-74"} onClick={togglePop}>Share your Recipe</button>
                    {seen ? <Form toggle={togglePop} /> : null}</div>

                <Header as='h1' className="heading">Gourmet It</Header>
                <button className={"button-74"}>Login</button>

            </Toolbar >
            <div className="hero-image">
                <div className="hero-text">
                    <h1>The world's virtual cookbook</h1>
                    <button className={"button-74"} onClick={togglePop}>Share your recipe</button>
                    {seen ? <Form toggle={togglePop} /> : null}
                </div>
            </div >
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default App;