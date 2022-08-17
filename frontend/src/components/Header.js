import React from 'react';
import { Link } from 'react-router-dom';

import camera from '../assets/camera.svg';
import './Header.css';

    export default function Header() {
        return (
            <header id="main_header">
                <div className="header_content">
                    <Link to="/">
                        <h1 className="app_title"> Moments </h1>
                    </Link>
                    <Link to="/new">
                            <img src={ camera } />
                    </Link>
                </div>
            </header>
        );
    }