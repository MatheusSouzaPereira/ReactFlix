import React from 'react';
import Logo from '../../assets/img/StrerFlix.png'
import './Menu.css'; 
import Button from '../Button/index'

function Menu() {
    return (
    <nav className="Menu">
        <a href="/">
            <img class="Logo"src={Logo} alt="StrerFlix logo"/>
        </a>
        <Button as="a" className="ButtonLink" href="/" >
            Novo Video
        </Button>
    </nav>       
    
 );
}

export default Menu ;