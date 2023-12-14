import React from "react";
import { useState } from "react";
import styles from "./styles.css";
import { Toolbar, Grow } from "@material-ui/core";
import logo from '../../images/logo.png'
import axios from 'axios';
import * as api from '../../api/index.js'
import { useSnackbar } from 'notistack';
import FileBase from 'react-file-base64'
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [tags, setTags] = useState('')
    const [selectedFile, setSelectedFile] = useState('')


    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.toggle();
    }

    const handleSaveRecipe = () => {
        const data = {
            title,
            ingredients,
            instructions,
            tags,
            selectedFile,
        };
        setLoading(true);
        api
            .createRecipe(data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Recipe Created successfully', { variant: 'success' });
                window.location.reload();
            })
            .catch((error) => {
                setLoading(false);
                // alert('An error happened. Please Chack console');
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    }

    return (
        <Grow in>
            <div className="popup">
                <div className="popup-inner">
                    <Toolbar>
                        <img style={{ marginLeft: -15 }} src={logo} alt="logo" height="60" />
                        <h2 style={{ paddingLeft: "80px", margin: "auto", textAlign: "center", fontFamily: 'Playfair Display' }}>Add your delicious creation!</h2>
                        <button type="button" onClick={props.toggle}>X</button>
                    </Toolbar>

                    <form onSubmit={handleSubmit}>
                        <label>
                            Dish Name:
                            <input placeholder="Cake" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                        </label>
                        <label>
                            Ingredients:<br></br>
                            <textarea placeholder="3 cups of flour, 1 stick of butter, 2 eggs..." style={{ height: 70 }} value={ingredients} onChange={e => setIngredients(e.target.value)} />
                        </label>
                        <label>
                            Instructions:<br></br>
                            <textarea placeholder="Mix flour, egg, & butter in a bowl..." value={instructions} onChange={e => setInstructions(e.target.value)} />
                        </label>
                        <label>
                            Comma Separated Tags:
                            <input placeholder="dairy, gluten, dessert" type="text" value={tags} onChange={e => setTags(e.target.value)} />
                        </label>
                        <div className="file-input">
                            <FileBase type="file"
                                multiple={false}
                                onDone={({ base64 }) => setSelectedFile(base64)}></FileBase>
                        </div>
                        <button type="submit" onClick={handleSaveRecipe}>Create</button>
                    </form>
                </div>
            </div >
        </Grow >
    )
}
export default Form;