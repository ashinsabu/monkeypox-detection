import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'
import '../App.css'
const NavBar = (props) => {
    // pages 0 - Home, About Research , Playground
    
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                Monkeypox Detection
            </div>
            <ul className='nav-links'> 
                <Link to ="/"><li className={props.curPage === 0?'active':'inactive'}>Home</li></Link>
                <Link to ="/research"><li className={props.curPage === 1?'active':'inactive'}>About the Research</li></Link>
                <Link to="/try"><li className={props.curPage === 2?'active':'inactive'}>Try the models</li></Link>
            </ul>
        </div>
    );
}

export default NavBar;