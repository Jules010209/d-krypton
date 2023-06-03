import { Routes, Route } from 'react-router-dom';
import './App.scss';

import { Home } from './pages/home';
import { Component, ReactNode } from 'react';

export class App extends Component {
    render(): ReactNode {
        return (
            <Routes>
                {/* HOME */}
                <Route path='/' element={<Home/>}></Route>

                {/* PRICIPAL ROUTES */}
                <Route path='/technology' element={<div>tech</div>}></Route>
                <Route path='/aeronautic' element={<div>aero</div>}></Route>
                <Route path='/si' element={<div>si</div>}></Route>

                {/* 404 PAGE */}
                <Route path='*' element={<div>404</div>}></Route>
            </Routes>
        );
    }
}