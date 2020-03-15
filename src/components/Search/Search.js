import React, { useContext, useState } from 'react';
import {AlertContext} from "../../context/alert/alertContext";
import {GithubContext} from "../../context/gihub/githubContext";

const Search = () => {
    const [value, setValue] = useState('');
    const { show, hide } = useContext(AlertContext);
    const { search, clearUsers } = useContext(GithubContext);

    const submit = e => {
        if(e.key === 'Enter'){
            if(value.length){
                search(value.trim());
                hide()
            }else{
                show("Введите данные пользователя");
                clearUsers()
            }

        }
    };

    return (
        <div className="form-group">
            <input
                type="text"
                value={value}
                className="form-control"
                placeholder="Введите ник пользователя..."
                onChange={e => setValue(e.target.value)}
                onKeyPress={(e) => submit(e)}
            />
        </div>
    );
};

export default Search;