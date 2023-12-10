import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useState } from "react";

import Form from './components/Form/Form.js'
import Posts from './components/Posts/Posts.js'
import logo from './images/logo.png'
import useStyles from './styles';
import styles from "./styles.css";
import Toolbar from "@material-ui/core/Toolbar";

const App = () => {
    const classes = useStyles();
    const [seen, setSeen] = useState(false)

    function togglePop() {
        setSeen(!seen);
    };

    return (
        <Container maxidth="lg">
            <AppBar className={"appbar"} position="static" color="inheret">
                <Toolbar className={"toolbar"}>
                    <img src={logo} alt="logo" height="60" />
                    <Typography className={"heading"} variant="h2">Gourmet It</Typography>
                    <button className={"button"} onClick={togglePop}>Create Recipe</button>
                    {seen ? <Form toggle={togglePop} /> : null}
                </Toolbar>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container >
    )
}

export default App;