import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
import './League.css';
import { Link } from 'react-router-dom';

const League = (props) => {
    console.log(props.league);
    const {strLeague, strSport, idLeague} = props.league;
    const [logo, setLogo] = useState({});
    console.log(logo);
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLogo(data.leagues[0]));
    },[idLeague])
    const {strBadge} = logo;
    return (
        <div className="league-cart">
            <Card className="shadow" style={{ width: '18rem' }}>
                <Card.Img  variant="top" src={strBadge} className="badge-img"/>
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>Sports type: {strSport}</Card.Text>
                    <Link to={"/league/"+idLeague}><Button  variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default League;