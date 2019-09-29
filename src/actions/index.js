import { types } from './types';
import axios from 'axios';

export const fetchMediaUrls = () => async (dispatch) => {
    await axios.get('/links')
    .then(res => {
        dispatch({
            types: types.GET_MEDIA_URLS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}