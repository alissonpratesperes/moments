import React, { Component } from 'react';

import like from '../assets/like.svg';
import './MomentsFeed.css';

    class MomentsFeed extends Component {
        render() {
            return (
                <section id="moments_list">
                    <article>
                        <header>
                            <div className="user_info">
                                <span>Alisson Prates Peres</span>
                                <span className="place">São Marcos</span>
                            </div>
                        </header>
                        <img src="http://localhost:3333/files/neverstoplearning.jpg" alt="Imagem do momento"/>
                        <footer>
                            <div className="moment_actions">
                                <img src={ like } alt="Curtir este momento"/>
                                    <strong>900 likes</strong>
                            </div>
                                
                                    <p>
                                        Um post muito massa da Semana Omnistack 7!
                                            <span> #react #omnistack #top </span>    
                                    </p>
                        </footer>
                    </article>
                    <article>
                        <header>
                            <div className="user_info">
                                <span>Alisson Prates Peres</span>
                                <span className="place">São Marcos</span>
                            </div>
                        </header>
                        <img src="http://localhost:3333/files/neverstoplearning.jpg" alt="Imagem do momento"/>
                        <footer>
                            <div className="moment_actions">
                                <img src={ like } alt="Curtir este momento"/>
                                    <strong>900 likes</strong>
                            </div>
                                <p>
                                    Um post muito massa da Semana Omnistack 7!
                                        <span> #react #omnistack #top </span>    
                                </p>
                        </footer>
                    </article>
                </section>
            );
        };
    }

        export default MomentsFeed;