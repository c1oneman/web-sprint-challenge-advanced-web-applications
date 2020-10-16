import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = userInfo => dispatch =>{
    dispatch({ type: LOGIN_START });

    axios.post("http://localhost:5000/api/login", userInfo)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            console.log(localStorage.getItem('token'));
            dispatch({
                type: LOGIN_SUCCESS
            })
        })
        .catch(err => console.log(err));
}


export const GET_BUBBLES_START = 'GET_BUBBLES_START';
export const GET_BUBBLES_SUCCESS = 'GET_BUBBLES_SUCCESS';

export const getBubbles = () => dispatch =>{
    console.log("getting colors from server");
    dispatch({ type: GET_BUBBLES_START });

    axiosWithAuth().get('http://localhost:5000/api/colors')
        .then(res => {
            dispatch({
                type: GET_BUBBLES_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));


}


export const ADD_BUBBLES_START = 'ADD_BUBBLES_START';
export const ADD_BUBBLES_SUCCESS = 'ADD_BUBBLES_SUCCESS';

export const addBubble = bubble => dispatch =>{
    console.log("in the add friend action creator");

    dispatch({ type: ADD_BUBBLES_START});

    axiosWithAuth().post('http://localhost:5000/api/colors', bubble)
        .then(res => {
            dispatch({
                type: ADD_BUBBLES_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}