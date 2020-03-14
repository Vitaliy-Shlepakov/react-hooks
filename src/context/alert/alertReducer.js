import React from 'react';
import {SHOW_ALERT} from "../types";

const AlertReducer = (state, action) => {

    switch(action.type) {
        case SHOW_ALERT:
            return { ...state }
    }
};

export default AlertReducer;