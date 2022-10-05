import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{marginBottom: '32px'}}>
            <Link to={'/'} data-testid={'main-link'} style={{padding: '5px 10px'}}>main</Link>
            <Link to={'/about'} data-testid={'about-link'} style={{padding: '5px 10px'}}>about</Link>
            <Link to={'/users'} data-testid={'users-link'} style={{padding: '5px 10px'}}>users</Link>
        </div>
    );
};

export default Navbar;
