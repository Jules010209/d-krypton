import { Component, ReactNode } from 'react';

import dk_logo from '../assets/logo-dkrypton.png';

import './home.scss';
import { Box } from '../components/box/Box';

export class Home extends Component {
    render(): ReactNode {
        return (
            <>
                <div className='jumbotron'>
                    <img alt="d-krypton" src={dk_logo}></img>

                    <p>Ce site est conçu pour aider les élèves de Viala Lacoste à travailler dans le cadre de leur cours.</p>
                    
                    <br/>

                    <div className='box-columns'>
                        <Box title='TECH' body={<div></div>} footer={<p>Technologie</p>}/>
                        <Box title='SNT' body={<div></div>} footer={<p>SNT</p>}/>
                        <Box title='NSI' body={<div></div>} footer={<p>NSI</p>}/>
                        <Box title='SI' body={<div></div>} footer={<p>SI</p>}/>
                    </div>
                </div>
            </>
        )
    }
}