import { Component, ReactNode } from 'react';

import './Footer.scss';

export class Footer extends Component {
    render(): ReactNode {
        return (
            <>
                <footer id='ffooter'>
                    <p className='copyright'>
                        &copy; 2023 Laurent Couvreur
                    </p>
                    <p><a className='btop' href='#top'>Back to top</a></p>
                </footer>
            </>
        )
    }
}