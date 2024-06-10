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


const Form = (props) => {
    const [recipeData, setRecipeData] = useState({
            title: '',
            ingredients: '', 
            instructions: '', 
            tags: '', 
            selectedFile: '', 
            isVegetarian: false, 
            isVegan: false
        });
    
        useEffect(() => {
            if (props.editing) setRecipeData(props.editing);
          }, [props.editing]);
          

    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.toggle();
    }

    function toggleVegetarian() {
        setRecipeData({...recipeData, isVegetarian: !recipeData.isVegetarian});
    };

    function toggleVegan() {
        setRecipeData({...recipeData, isVegan: !recipeData.isVegan});
    }

    const handleSaveRecipe = (data) => {
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

    const handleUpdateRecipe = (data) => {
        setLoading(true);
        api
            .updateRecipe(recipeData._id, data)
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
    const handleIngredientsInput = (e) => {
        const lines = e.currentTarget.innerText.split('\n');
        setRecipeData({ ...recipeData, ingredients: lines });
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
                            <input placeholder="Cake" type="text" value={recipeData.title} onChange={e => setRecipeData({...recipeData, title: e.target.value})} />
                        </label>
                        <label>
                            Ingredients:<br></br>
                            <div
                                className="text-area"
                                contentEditable='true'
                                onInput={e => handleIngredientsInput}
                            >
                                {recipeData.ingredients.length == 0 ? (
                                    <ul><li></li></ul>
                                ) : (
                                    recipeData.ingredients.map((el, i) => <li key={i}>{el}</li>)
                                )}
                            </div>
                        </label>
                        <label>
                            Instructions:<br></br>
                            <textarea placeholder="Mix flour, egg, & butter in a bowl..." value={recipeData.instructions} onChange={e => setRecipeData({...recipeData, instructions: e.target.value})} />
                        </label>
                        <div className="toggles">
                            <div style={{alignItems:"center", display:"flex"}}>
                            <Switch
                                checked={recipeData.isVegetarian}
                                onChange={toggleVegetarian}
                                inputProps={{ 'aria-label': 'controlled' }}
                            /> Vegetarian
                            </div>
                            <div style={{alignItems:"center", display:"flex"}}>
                            <Switch
                                checked={recipeData.isVegan}
                                onChange={toggleVegan}
                                inputProps={{ 'aria-label': 'controlled' }}
                            /> Vegan
                            </div>
                        </div>
                        <label>
                            Comma Separated Tags:
                            <input placeholder="dairy, gluten, dessert" type="text" value={recipeData.tags} onChange={e => setRecipeData({...recipeData, tags:e.target.value.split(',')})} />
                        </label>
                        <div className="file-input">
                            <label>Upload Photo:</label>
                            <FileBase type="file"
                                multiple={false}
                                onDone={({ base64 }) => setRecipeData({...recipeData, selectedFile: base64})}></FileBase>
                        </div>
                        {!props.editing ? (
                            <button type="submit" onClick={() =>handleSaveRecipe(recipeData)}>Create</button>
                        ) : (
                            <button type="submit" onClick={() => handleUpdateRecipe(recipeData)}>Update</button>
                        )}
                    </form>
                </div>
            </div >
        </Grow >
    )
}
export default Form;