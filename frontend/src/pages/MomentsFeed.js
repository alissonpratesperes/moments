import React, { Component } from 'react';

import like from '../assets/like.svg';
import './MomentsFeed.css';
import api from '../services/api';

    class MomentsFeed extends Component {
        state = {
            momentsFeed: []
        };

            async componentDidMount() { 
                const response = await api.get('moments');

                    this.setState({
                        momentsFeed: response.data
                    });
            }

                render() {
                    return (
                        <section id="moments_list">
                            { this.state.momentsFeed.map(moment => (
                                <article key={moment._id}>
                                    <header>
                                        <div className="user_info">
                                            <span>{moment.author}</span>
                                            <span className="place">{moment.place}</span>
                                        </div>
                                    </header>
                                    <img src={`http://localhost:3333/files/${moment.image}`} alt="Imagem do momento"/>
                                    <footer>
                                        <div className="moment_actions">
                                            <img src={ like } alt="Curtir este momento"/>
                                                <strong>{moment.likes} likes</strong>
                                        </div>
                                            <p>
                                                {moment.description}
                                                    <span>{moment.hashtags}</span>    
                                            </p>
                                    </footer>
                                </article>
                            )) }
                        </section>
                    );
                };
    }

        export default MomentsFeed;