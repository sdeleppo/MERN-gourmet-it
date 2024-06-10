import React from "react";
import { AppBar, Toolbar, Menu, MenuItem, Button, Avatar } from '@material-ui/core';
import { useState } from "react";
import { Header } from 'semantic-ui-react'

import Form from '../Forms/Form.js'

import logo from '../../images/logo.png'
import menuImg from '../../images/menu.png'
import styles from "./styles.css";

import { HashLink as Link } from 'react-router-hash-link';
import zIndex from "@material-ui/core/styles/zIndex.js";
import LoginForm from '../Forms/LoginForm.js'

const NavHeader = () => {

    const [isFormVisible, setFormVisible] = useState(false);
    const [isLoginFormVisible, setLoginFormVisible] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const toggleForm = () => {
        setFormVisible(!isFormVisible);
        setLoginFormVisible(false); // Ensure LoginForm is hidden when Form is shown
        handleClose();
    };

    const toggleLoginForm = () => {
        setLoginFormVisible(!isLoginFormVisible);
        setFormVisible(false); // Ensure Form is hidden when LoginForm is shown
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    return (
        <AppBar position="sticky" style={{zIndex:1}}>
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
                    <MenuItem onClick={toggleForm}>
                        Share your Recipe
                    </MenuItem>
                </Menu>
                <Header as='h1' className="heading">Gourmet It</Header>
                <button className={"login-button"} onClick={toggleLoginForm}>Login</button>
                {isFormVisible && <Form toggle={toggleForm} />}
                {isLoginFormVisible && <LoginForm toggle={toggleLoginForm} />}
            </Toolbar ></AppBar >
    )
}
export default NavHeader;