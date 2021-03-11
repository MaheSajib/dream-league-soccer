import React from 'react';
import './Header.css';

const Header = (props) => {
    const showHeaderLogo = props.displayHeaderLogo;
    const logo = <img className="logo-top" src={props.headerLogo} alt=""/>;
    const headerText = <h1>Dream League Soccer</h1>;
    return (
        <div className="header-container">
            {
                showHeaderLogo?logo:headerText
            }
        </div>
    );
};

export default Header;