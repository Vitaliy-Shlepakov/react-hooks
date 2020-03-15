import React, {useReducer} from 'react';
import {GithubContext} from "./githubContext";
import {githubReducer} from "./githubReducer";
import {SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING} from "../types";

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
        //request
        dispatch({
            type: SEARCH_USERS,
            payload: []
        });
    };

    const getUser = async name => {
        setLoading();
        //request
        dispatch({
            type: GET_USER,
            payload: []
        });
    };

    const getRepos = async name => {
        setLoading();
        //request
        dispatch({
            type: GET_REPOS,
            payload: []
        });
    };
    console.log(process.env.REACT_APP_CLIENT_SECRET);
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