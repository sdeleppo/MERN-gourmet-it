import React from "react";
import { Container, AppBar, Toolbar, Menu, MenuItem, Button, Avatar, Grow, Grid } from '@material-ui/core';
import { useState } from "react";
import { Header } from 'semantic-ui-react'

import Form from '../Form/Form.js'

import logo from '../../images/logo.png'
import menuImg from '../../images/menu.png'
import styles from "./styles.css";

import { HashLink as Link } from 'react-router-hash-link';

const NavHeader = () => {

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
        <AppBar position="sticky">
            <Toolbar variant="dense" className={"toolbar"}>
                <img src={logo} alt="logo" className="logo" />
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    style={{ backgroundColor: "#7a2604b6", padding: "0" }}
                >
                    {< Avatar src={menuImg} />}
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
                <button className={"login-button"}>Login</button>
            </Toolbar ></AppBar >
    )
}
export default NavHeader;