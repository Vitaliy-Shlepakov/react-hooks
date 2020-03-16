import React, {useReducer} from 'react';
import {GithubContext} from "./githubContext";
import {githubReducer} from "./githubReducer";
import axios from 'axios';
import {SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING} from "../types";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    const search = async value => {
        setLoading();

        const response = await axios({
            method: 'GET',
            url: `https://api.github.com/search/users?q=${value}&client_id=501bcf7b5eb21cb614f0&client_secret=81ddff898e73fccb1e9ac3f92a6bea48876e8f52`
        });
        //request
        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        });
    };

    const getUser = async name => {
        setLoading();
        const response = await axios({
            method: 'GET',
            url: `https://api.github.com/users/${name}?client_id=501bcf7b5eb21cb614f0&client_secret=81ddff898e73fccb1e9ac3f92a6bea48876e8f52`
        });
        dispatch({
            type: GET_USER,
            payload: response.data
        });
    };

    const getRepos = async name => {
        setLoading();
        const response = await axios({
            method: 'GET',
            url: `https://api.github.com/users/${name}/repos?per_page=5&client_id=501bcf7b5eb21cb614f0&client_secret=81ddff898e73fccb1e9ac3f92a6bea48876e8f52`
        });
        dispatch({
            type: GET_REPOS,
            payload: response.data
        });
    };

    const clearUsers = () => dispatch({type: CLEAR_USERS});
    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <GithubContext.Provider value={{
            search,
            getUser,
            getRepos,
            clearUsers,
            setLoading,
            state
        }}>
            { children }
        </GithubContext.Provider>
    );
};

export default GithubState;
