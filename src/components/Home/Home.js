import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
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
    const [headerLogo, setHeaderLogo] = useState([]);
    const handleClick = (logo) =>{
        setHeaderLogo(logo);
    }
    return (
        <div>
            <Header displayHeaderLogo={false} headerLogo={headerLogo}></Header>
            <div className="league-container">
                {
                    league.map(league => <League handleClick={handleClick} league={league}></League>)
                }
            </div>
        </div>
    );
};

export default Home;