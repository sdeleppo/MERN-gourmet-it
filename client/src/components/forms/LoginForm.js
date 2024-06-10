import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles.css";
import { Toolbar, Grow } from "@material-ui/core";
import logo from '../../images/logo.png'
import axios from 'axios';
import * as api from '../../api/apiService.js';
import { useSnackbar } from 'notistack';
import FileBase from 'react-file-base64'
import { useNavigate } from 'react-router-dom';
import { Header } from 'semantic-ui-react'
import Switch from "react-switch";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const LoginForm = ({ toggle }) => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);

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

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toggle();
        if (isSignup) {
          //do signup api actions
        } else {
          //do signin api actions
        }
      };
      const handleLogin = (data) => {

      };
      const handleSignup = (data) => {

      };

      const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    
//fill in needed fields for sign up
//write api actions for sign up/in
//error handling
    return (
        <Grow in>
            <div className="popup">
                <div className="popup-inner">
                    <Toolbar>
                        <img style={{ marginLeft: -15 }} src={logo} alt="logo" height="60" />
                        <Header as='h1' className="heading-form">Login</Header>
                        <button type="button" onClick={toggle}>X</button>
                    </Toolbar>

                    <form onSubmit={handleSubmit}>
                        <label >
                            Email:
                            <input placeholder="Enter your email" type="text" value={''} handleChange={handleChange} />
                        </label>
                        <label >
                            Password:
                            <input placeholder="Enter your password" type="text" value={''} handleChange={handleChange} />
                        </label>
                        {!0 ? (
                            <button type="submit" onClick={() => (handleSubmit)}>Login</button>
                        ) : (
                            <button type="submit" onClick={() => (handleSubmit)}>Signup</button>
                        )}
                    </form>
                </div>
            </div >
        </Grow >
    )
}
export default LoginForm;