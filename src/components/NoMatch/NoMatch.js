import React from 'react';
import denger from '../../images/Photo/danger.jpg';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className="error">
            <h1>Something is missing. 404 Error !!! Please Try Again </h1>
            <img src={denger} alt=""/>
        </div>
    );
};

export default NoMatch;