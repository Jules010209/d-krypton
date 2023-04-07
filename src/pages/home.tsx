import { Component, ReactNode } from 'react';

import dk_logo from '../assets/logo-dkrypton.png';

export class Home extends Component {
    render(): ReactNode {
        return (
            <div className='jumbotron'>
                <img alt="d-krypton" src={dk_logo}></img>

                <p>Ce site est conçu pour aider les élèves de Viala Lacoste à travailler dans le cadre de leur cours.</p>
            </div>
        )
    }
}