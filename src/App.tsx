import { Routes, Route } from 'react-router-dom';
import './App.scss';

import { Home } from './pages/home';

export default function App() {
    return (
        <Routes>
            {/* HOME */}
            <Route path='/' element={<Home/>}></Route>

            {/* PRICIPAL ROUTES */}
            <Route path='/technologie' element={<div>tech</div>}></Route>
            <Route path='/aeronautic' element={<div>aero</div>}></Route>

            {/* 404 PAGE */}
            <Route path='*' element={<div>404</div>}></Route>
        </Routes>
    );
}