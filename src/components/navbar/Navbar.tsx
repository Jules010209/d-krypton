import { Component, ReactNode } from 'react';

import './Navbar.scss';

import logo from '../../assets/logo.png';

export class Navbar extends Component {
    state: Readonly<{ clicked: boolean }> = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render(): ReactNode {
        return (
            <nav>
                <a href='/'><img id='main-logo' alt='logo' width='65px' height='60px' src={logo}></img></a>
    
                <div>
                    <ul id='navbar' className={this.state.clicked ? 'active' : ''}>
                        <li><a href='/technologie'>Technologie</a></li>
                        <li><a href='/technologie'>Informatique</a></li>
                        <li><a href='/technologie'>Sciences de l'ingénieur</a></li>
                        <li><a href='/technologie'>Aéronautique</a></li>

                        <li id='login'><a href='/login'>Connexion</a></li>
                    </ul>
                </div>

                <div id='mobile' onClick={this.handleClick}>
                    <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        )   
    }
}