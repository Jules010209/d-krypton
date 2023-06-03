import { Component, ReactNode } from 'react';
import { motion } from 'framer-motion';

import './Navbar.scss';

import logo from '../../assets/logo.png';

export class Navbar extends Component {
    state: Readonly<{ clicked: boolean }> = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render(): ReactNode {
        return (
            <motion.nav>
                <a href='/'><img id='main-logo' alt='logo' width='65px' height='60px' src={logo}></img></a>
    
                <div>
                    <ul id='navbar' className={this.state.clicked ? 'active' : ''}>
                        <li><a href='/technology'>Technologie</a></li>
                        <li><a href='/technology'>Informatique</a></li>
                        <li><a href='/technology'>Sciences de l'ingénieur</a></li>
                        <li><a href='/technology'>Aéronautique</a></li>

                        <li id='login'><a href='/login'>Connexion</a></li>
                    </ul>
                </div>

                <div id='mobile' onClick={this.handleClick}>
                    <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </motion.nav>
        )   
    }
}