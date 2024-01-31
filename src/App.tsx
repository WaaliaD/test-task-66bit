import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

export default function App() {
    return (
        <BrowserRouter basename='/test-task-66bit'>
            <AppRouter/>
            <Navbar />
        </BrowserRouter>
    );
}