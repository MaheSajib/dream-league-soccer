import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import leagueBanner from '../../images/Photo/Rectangle 28.png';
import facebook from '../../images/Icon/Facebook.png';
import twitter from '../../images/Icon/Twitter.png';
import youtube from '../../images/Icon/YouTube.png';
import './LeagueDetails.css';
import Header from '../Header/Header';

const LeagueDetails = () => {
    const {leagueId} = useParams();
    const [league, setLeague] = useState({});
    console.log(league)
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]));
    },[leagueId])
    const {strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strDescriptionFR, strLogo} = league;
    return (
        <div>
            <Header displayHeaderLogo={true} headerLogo={strLogo}></Header>
            <div className="container ">
                <div className="row details">
                    <div className="col info">
                        <h4>{strLeague}</h4>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                    </div>
                    <div className="col banner">
                        <img src={leagueBanner} alt=""/>
                    </div>
                </div>
                <div className="row">
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionFR}</p>
                </div>
                <div className="row footer-icon">
                    <a href=""><img className="social-icons" src={twitter} alt=""/></a>
                    <a href=""><img className="social-icons" src={facebook} alt=""/></a>
                    <a href=""><img className="social-icons" src={youtube} alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;