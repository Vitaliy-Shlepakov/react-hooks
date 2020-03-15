import React, { useContext } from 'react';
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import {GithubContext} from "../../context/gihub/githubContext";

const Home = () => {
    const { state: { loading, users} } = useContext(GithubContext);

    return (
    <>
     <Search/>

     <div className="row">
         {
             loading
                 ? <p className="text-center">Загрузка ...</p>
                 : users.map(user => (
                     <div className="col-sm-4 mb-4" key={user.id}>
                         <Card user={user}/>
                     </div>
                 ))
         }
     </div>
    </>
  );
};

export default Home;
