import React, {useContext, useEffect} from 'react';
import {GithubContext} from "../../context/gihub/githubContext";
import {Link} from "react-router-dom";
import Repos from "../../components/Repos/Repos";

const Profile = ({match}) => {
    const {getUser, getRepos, state} = useContext(GithubContext);
    const {loading, user, repos} = state;
    const urlName = match.params.name;

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        //eslint-disable-next-line
    }, [])

    if(loading && !user){
        return <p>Загрузка...</p>
    };

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        html_url,
        followers,
        public_repos,
        public_gists,
        following,
        login
    } = user;

    return (
        <>
            <Link to={'/'} className="btn btn-link">
                На главную
            </Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={"name"} style={{width: 150}}/>
                            <h1>{name}</h1>
                            {
                                location && <p>Местоположение: {location}</p>
                            }
                        </div>
                        <div className="col">
                            {
                                bio && <>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            <a
                                href={html_url}
                                target="_blank"
                                className="btn btn-dark"
                                rel="noopener noreferrer"
                            >
                                Открыть профиль
                            </a>
                            <ul>
                                {
                                    login && <li><strong>Username: </strong>{login}</li>
                                }
                                {
                                    company && <li><strong>Компания: </strong>{company}</li>
                                }
                                {
                                    blog && <li><strong>Website: </strong>{blog}</li>
                                }
                            </ul>
                            <div className="badge badge-primary">
                                Подписчики: {followers}
                            </div>
                            <div className="badge badge-success">
                                Подписан: {following}
                            </div>
                            <div className="badge badge-info">
                                Репозитории: {public_repos}
                            </div>
                            <div className="badge badge-dark">
                                Репозитории: {public_gists}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Repos repos={repos}/>
        </>
    )
};

export default Profile;
