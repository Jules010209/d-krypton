import { Component, ReactNode } from 'react';
import { motion } from 'framer-motion';

import './Box.scss';

export class Box extends Component {
    props: Readonly<{
        title: string
        body: any
        footer: any
    }> = {
        title: '',
        body: <></>,
        footer: <></>
    };

    render(): ReactNode {
        return (
            <motion.div className='box'
                initial={{
                    opacity: 0,
                    x: -70
                }} 
                transition={{
                    duration: .75
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
            >
                <h1 className='box-title'>{ this.props.title }</h1>

                <div className='box-body'>{ this.props.body }</div><br></br>

                <footer className='box-footer' style={{ textAlign: 'center' }}>{ this.props.footer }</footer>
            </motion.div>
        )
    }
}