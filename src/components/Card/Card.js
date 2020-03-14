import React from 'react';
import {Link} from 'react-router-dom';

const Card = () => {
    return (
        <div className="card">
            <img src="" className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">
                    React
                </h5>
                <Link to={`profile/${null}`} className="btn btn-primary">
                    Открать
                </Link>
            </div>
        </div>
    );
};

export default Card;