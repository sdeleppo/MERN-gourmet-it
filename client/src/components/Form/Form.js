import React from "react";
import { useState } from "react";
import styles from "./styles.css";
import { Toolbar } from "@material-ui/core";
import logo from '../../images/logo.png'

const Form = (props) => {

    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [tags, setTags] = useState('')
    const [instructions, setInstructions] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        props.toggle();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <Toolbar>
                    <img style={{ marginLeft: -15 }} src={logo} alt="logo" height="60" />
                    <h2 style={{ margin: "auto", textAlign: "center" }}>Add your delicious creation!</h2>
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
                    <button type="submit">Create</button>
                </form>
            </div>
        </div >
    )
}
export default Form;