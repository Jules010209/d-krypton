import { Component, ReactNode } from 'react';

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
            <div className='box'>
                <h1 className='box-title'>{ this.props.title }</h1>

                <div className='box-body'>{ this.props.body }</div>

                <footer className='box-footer'>{ this.props.footer }</footer>
            </div>
        )
    }
}