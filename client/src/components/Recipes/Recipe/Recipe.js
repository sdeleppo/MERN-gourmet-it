import React from "react";
import styles from "./styles.css";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const Recipe = ({
    recipe
}) => {
    const { enqueueSnackbar } = useSnackbar();
    const handleDeleteRecipe = (id) => {
        axios
            .delete(`http://localhost:5000/recipe/${id}`)
            .then(() => {
                enqueueSnackbar('Recipe Deleted successfully', { variant: 'success' });
                window.location.reload()
            })
            .catch((error) => {
                // alert('An error happened. Please Chack console');
                enqueueSnackbar(id, { variant: 'error' });
                console.log(error);
            });
    };
    return (
        <Card className={"card"}>
            <CardMedia className={"media"} image={recipe.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={recipe.title} />
            <div className={"overlay"}>
                <Typography variant="h6">{recipe.creator}</Typography>
                <Typography variant="body2">{moment(recipe.createdAt).fromNow()}</Typography>
            </div>
            <div className={"details"}>
                <Typography variant="body2" color="textSecondary" component="h2">{recipe.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={"title"} gutterBottom variant="h5" component="h2">{recipe.title}</Typography>
            <CardContent>
                <Typography style={{ marginRight: "auto" }} variant="body2" color="textSecondary" component="p">{recipe.ingredients}</Typography>
            </CardContent>
            <CardActions className={"cardActions"}>
                <Button size="small" color="primary" onClick={() => { }}><ThumbUpAltIcon fontSize="small" /> Like {recipe.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => handleDeleteRecipe(recipe._id)}> Delete</Button>
            </CardActions>
        </Card >
    )
}
export default Recipe;