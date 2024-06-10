import React, { useState } from "react";
import styles from "./styles.css";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Menu, MenuItem, Avatar, } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import * as api from '../../../api/apiService.js'
import Form from '../../Forms/Form.js'

const Recipe = ({
    recipe
}) => {
    const [likes, setLikes] = useState(recipe.likeCount);
    const { enqueueSnackbar } = useSnackbar();

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

    const handleDeleteRecipe = (id) => {
        api
            .deleteRecipe(id)
            .then(() => {
                enqueueSnackbar('Recipe Deleted.', { variant: 'success' });
                window.location.reload()
            })
            .catch((error) => {
                enqueueSnackbar('An error occurred while deleting recipes.', { variant: 'error' });
                console.log(error);
            });
    };
    const handleLikeRecipe = (id) => {
        api
            .likeRecipe(id)
            .then((res) => {
                setLikes(res.data.data.likeCount)
            })
            .catch((error) => {
                enqueueSnackbar('An error occurred while liking recipe.', { variant: 'error' });
                console.log(error);
            });
    }

    return (
        <Card className={"card"}>
            <CardMedia className={"media"} image={recipe.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={recipe.title} />
            <div className={"overlay"}>
                <Typography variant="h6">{recipe.creator}</Typography>
                <Typography variant="body2">{moment(recipe.createdAt).fromNow()}</Typography>
            </div>
            <div className={"overlay2"}>
                <Button
                    style={{ color: 'white' }}
                    size="small"
                    onClick={handleClick}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
                <Menu
                    keepMounted
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    open={Boolean(anchorEl)}>
                    <MenuItem onClick={togglePop}>
                        Edit
                    </MenuItem>
                    {seen ? <Form toggle={togglePop} editing={recipe} /> : null}
                </Menu>
                {seen ? <Form toggle={togglePop} editing={recipe} /> : null}

            </div>
            <div className={"details"}>
                <Typography variant="body2" color="textSecondary" component="h2">{recipe.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={"title"} gutterBottom variant="h5" component="h2">{recipe.title}</Typography>
            <CardContent>
                <Typography style={{ marginRight: "auto" }} variant="body2" color="textSecondary" component="p">{recipe.instructions}</Typography>
            </CardContent>
            <CardActions className={"cardActions"}>
                <Button size="small" color="primary" onClick={() => handleLikeRecipe(recipe._id)}><ThumbUpAltIcon fontSize="small" /> Like {likes} </Button>
                <Button size="small" color="primary" onClick={() => handleDeleteRecipe(recipe._id)}> Delete</Button>
            </CardActions>
        </Card >
    )
}
export default Recipe;