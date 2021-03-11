import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    
    const league = leagues.slice(0 , 17);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues));
    }, [])
    return (
        <div className="league-container">
            {
                league.map(league => <League league={league}></League>)
            }
        </div>
    );
};

export default Home;