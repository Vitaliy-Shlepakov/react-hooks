import {
    CLEAR_USERS,
    GET_REPOS,
    GET_USER,
    SEARCH_USERS,
    SET_LOADING
} from "../types";

export const githubReducer = (state, action) => {
    switch(state, action.type){
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            };
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
        };
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
        };
        case GET_USER:
            return {
                ...state,
                repos: action.payload,
                loading: false
        };
        case SET_LOADING:
            return {
                ...state,
                loading: true
        };
    }
};