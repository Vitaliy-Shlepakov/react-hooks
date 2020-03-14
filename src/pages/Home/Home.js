import React from 'react';
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";

const Home = () => {
    const cards = new Array(10)
        .fill('')
        .map((_, index) => {
            return index
        });

    return (
    <>
     <Search/>

     <div className="row">
         {
             cards.map((_, index) => {
                 return (
                     <div className="col-sm-4 mb-4" key={index}>
                         <Card/>
                     </div>
                 )
             })
         }
     </div>
    </>
  );
};

export default Home;
