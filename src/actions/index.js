import { types } from './types';
import axios from 'axios';

export const fetchMediaUrls = (query) => async (dispatch) => {
    await axios({
        "method": "GET",
        "url": "https://api-hoaxy.p.rapidapi.com/articles",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "api-hoaxy.p.rapidapi.com",
            "x-rapidapi-key": "9c05ea9e42mshda3289ef3ecc317p13934cjsn28ecfc906661"
        }, "params": {
            "sort_by": "relevant",
            "use_lucene_syntax": "true",
            "query": query
        }
    })
        .then((res) => {
            console.log(res);
            dispatch({
                type: types.GET_MEDIA_URLS,
                payload: res.data.articles !== null ? res.data.articles : []
            })
        })
        .catch((error) => {
            console.log(error)
        })
}