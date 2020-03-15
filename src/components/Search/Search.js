import React, { useContext, useState } from 'react';
import {AlertContext} from "../../context/alert/alertContext";

const Search = () => {
    const [value, setValue] = useState('');
    const { show } = useContext(AlertContext);

    const submit = e => {
        if(e.key === 'Enter'){
            if(value.length){

            }else{
                show("Введите данные пользователя")
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