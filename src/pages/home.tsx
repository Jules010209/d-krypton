import { Component, ReactNode } from 'react';
import { motion } from 'framer-motion';

import dk_logo from '../assets/logo-dkrypton.png';

import './home.scss';
import { Box } from '../components/box/Box';

export class Home extends Component {
    render(): ReactNode {
        return (
            <>
                <motion.div className='jumbotron'
                    initial={{
                        opacity: 0
                    }} 
                    transition={{
                        duration: .5
                    }}
                    animate={{
                        opacity: 1
                    }}
                >
                    <img alt="d-krypton" src={dk_logo}></img>

                    <p>Ce site est conçu pour aider les élèves de Viala Lacoste à travailler dans le cadre de leur cours.</p>
                        
                    <br/>

                    <div className='box-columns'>
                        <Box title='TECH' body={<div></div>} footer={<p>Technologie</p>}/>
                        <Box title='SNT' body={<div></div>} footer={<p>SNT</p>}/>
                        <Box title='NSI' body={<div></div>} footer={<p>NSI</p>}/>
                        <Box title='SI' body={<div></div>} footer={<p>SI</p>}/>
                    </div>
                </motion.div>
            </>
        )
    }
}