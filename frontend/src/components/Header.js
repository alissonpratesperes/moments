import React from 'react';
import {Link} from 'react-router-dom';

import camera from '../assets/camera.svg';
import favicon from '../assets/favicon.png';
import './Header.css';

    export default function Header() {
        return (
            <header id="main_header">
                <div className="header_content">
                    <Link to="/">
                        <div className="brand">
                            <img src={favicon} alt="Moments logotype"/>
                                <h1 className="app_title">Moments</h1>
                        </div>
                    </Link>
                    <Link to="/new">
                        <img src={camera} alt="Enviar momento"/>
                    </Link>
                </div>
            </header>
        );
    }