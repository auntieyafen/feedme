import axios from 'axios';

var token = ''
token = JSON.parse(localStorage.getItem('user')).token
axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 

const userRequest = axios.create({
    baseURL: 'http://localhost:8000/api/user'
});

const recipeRequest = axios.create({
    baseURL: 'http://localhost:8000/api/recipe'
});

export const apiEditProfile = data => userRequest.post('/edit-profile', data);
export const apiEditFridge = data => userRequest.put('/edit-fridge', data);
export const apiKeepRecipes = data => userRequest.put('/keep-recipes', data);
export const apiUploadImage = formData => userRequest.post('/upload-image', formData);
export const apiGetUserImage = () => userRequest.get('/get-myimage');
export const apiUpdateUserImage = data => userRequest.put('/update-image', data);
export const apiDeleteUserImage = data => userRequest.delete('/delete-image', data); 

export const apiQueryRecipeByID = id => recipeRequest.get('/query/id', {params:{ id }});
export const apiQueryRecipeByName = name => recipeRequest.get('/query/name', {params:{ name }});
export const apiQueryRecipeByLabel = label => recipeRequest.get('/query/label', {params:{ label }});
export const apiQueryRecipeByTop = () => recipeRequest.get('/query/top');
export const apiQueryRecipeByIngredient = ingredient => recipeRequest.get('/query/ingredient', {params:{ ingredient }});

export const apiGetRecipeComment = id => recipeRequest.get('/get/comment-data', {params:{ id }});

export const apiUpdateLikeCount = data => recipeRequest.put('/update/likeCount', data);
export const apiUpdateRecipe = data => recipeRequest.put('/update/recipe', data);

export const apiAddNew = data => recipeRequest.put('/add/new', data);
export const apiAddComment = data => recipeRequest.put('/add/comment', data);
