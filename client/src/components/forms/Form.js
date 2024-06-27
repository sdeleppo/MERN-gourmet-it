import React from "react";
import { useState, useEffect, useRef } from "react";
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


const Form = (props) => {
    const [title, setTitle] = useState(props.editing ? (props.editing.title) :  (''));

    const defaultIngredients = props.editing ? (props.editing.ingredients) :  ([]);

    const [ingredients, setIngredients] = useState(defaultIngredients);
    const [instructions, setInstructions] = useState(props.editing ? (props.editing.instructions) :  (''));
    const [tags, setTags] = useState(props.editing ? (props.editing.tags) :  ([]));
    const [selectedFile, setSelectedFile] = useState(props.editing ? (props.editing.selectedFile) :  (''));
    const [isVegetarian, setIsVegetarian] = useState(props.editing ? (props.editing.isVegetarian) :  (false));
    const [isVegan, setIsVegan] = useState(props.editing ? (props.editing.isVegan) :  (false));


    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const contentEditableRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.toggle();
    }

    function toggleVegetarian() {
        setIsVegetarian(!isVegetarian);
    };

    function toggleVegan() {
        setIsVegan(!isVegan);
    }

    const handleSaveRecipe = () => {
        const data = {
            title,
            ingredients,
            instructions,
            tags,
            selectedFile,
            isVegetarian,
            isVegan
        };
        setLoading(true);
        api
            .createRecipe(data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Recipe Created.', { variant: 'success' });
                window.location.reload();
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('An error occurred while creating a recipe.', { variant: 'error' });
                console.log(error);
            });
    }

    const handleUpdateRecipe = () => {
        const data = {
            title,
            ingredients,
            instructions,
            tags,
            selectedFile,
            isVegetarian,
            isVegan
        };
        setLoading(true);
        api
            .updateRecipe(props.editing._id, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Recipe Updated.', { variant: 'success' });
                window.location.reload();
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('An error occurred while updating a recipe.', { variant: 'error' });
                console.log(error);
            });
    }

    
    useEffect(() => {
        const handleKeyDown = (e) => {
            const selection = window.getSelection();
            const range = selection.getRangeAt(0);

            if (e.key === 'Backspace') {
                if (range.startOffset === 0 && range.endOffset === 0 && !range.startContainer.previousSibling) {
                    e.preventDefault();
                }
            }
        };

        const div = contentEditableRef.current;
        div.addEventListener('keydown', handleKeyDown);

        return () => {
            div.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleInput = (e) => {
        const lines = e.currentTarget.innerText.split('\n').filter(line => line.trim() !== '');
        setIngredients(lines);
    };

    return (
        <Grow in>
            <div className="popup">
                <div className="popup-inner">
                    <Toolbar>
                        <img style={{ marginLeft: -15 }} src={logo} alt="logo" height="60" />
                        <Header as='h1' className="heading-form">Recipe</Header>
                        <button type="button" onClick={props.toggle}>X</button>
                    </Toolbar>

                    <form onSubmit={handleSubmit}>
                        <label>
                            Dish Name:
                            <input placeholder="Cake" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                        </label>
                        <label>
                            Ingredients:<br></br>
                            <div
                                ref={contentEditableRef}
                                className="text-area"
                                contentEditable='true'
                                onInput={handleInput}
                            >
                                {defaultIngredients.length == 0 ? (
                                    <li> </li>
                                ) : (
                                    defaultIngredients.map((el, i) => <li key={i}>{el}</li>)
                                )}
                            </div>
                        </label>
                        <label>
                            Instructions:<br></br>
                            <textarea placeholder="Mix flour, egg, & butter in a bowl..." value={instructions} onChange={e => setInstructions(e.target.value)} />
                        </label>
                        <div className="toggles">
                            <div style={{alignItems:"center", display:"flex"}}>
                            <Switch
                                checked={isVegetarian}
                                onChange={toggleVegetarian}
                                inputProps={{ 'aria-label': 'controlled' }}
                            /> Vegetarian
                            </div>
                            <div style={{alignItems:"center", display:"flex"}}>
                            <Switch
                                checked={isVegan}
                                onChange={toggleVegan}
                                inputProps={{ 'aria-label': 'controlled' }}
                            /> Vegan
                            </div>
                        </div>
                        <label>
                            Comma Separated Tags:
                            <input placeholder="dairy, gluten, dessert" type="text" value={tags} onChange={e => setTags(e.target.value.split(','))} />
                        </label>
                        <div className="file-input">
                            <label>Upload Photo:</label>
                            <FileBase type="file"
                                multiple={false}
                                onDone={({ base64 }) => setSelectedFile(base64)}></FileBase>
                        </div>
                        {!props.editing ? (
                            <button type="submit" onClick={handleSaveRecipe}>Create</button>
                        ) : (
                            <button type="submit" onClick={handleUpdateRecipe}>Update</button>
                        )}
                    </form>
                </div>
            </div >
        </Grow >
    )
}
export default Form;