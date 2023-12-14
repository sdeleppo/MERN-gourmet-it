import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <SnackbarProvider>
            <App />
        </SnackbarProvider>
    </BrowserRouter>
);
//Will need POST endpoint createRecipe
//will need get all posts
//will probably need get post by id or something
//will need PUT updateRecipe endpoint