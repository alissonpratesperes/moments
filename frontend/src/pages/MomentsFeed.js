import React, {Component} from 'react';
import io from 'socket.io-client';

import api from '../services/api';
import like from '../assets/like.svg';
import './MomentsFeed.css';

    class MomentsFeed extends Component {
        state = {
            momentsFeed: []
        };

            async componentDidMount() {
                this.registerToSocket();
                    const response = await api.get('moments');
                        this.setState({
                            momentsFeed: response.data
                        });
            };
            registerToSocket = () => {
                const socket = io('http://192.168.1.101:3333');
                    socket.on('moment', newMoment => {
                        this.setState({
                            momentsFeed: [newMoment, ...this.state.momentsFeed]
                        });
                    });
                    socket.on('like', likedMoment => {
                        this.setState({
                            momentsFeed: this.state.momentsFeed.map(moment =>
                                moment._id === likedMoment._id ? likedMoment : moment
                            )
                        });
                    });
            };
            handleLike = id => {
                api.post(`moments/${id}/like`);
            };

                render() {
                    return (
                        <section id="moments_list">
                            {this.state.momentsFeed.map(moment => (
                                <article key={moment._id}>
                                    <header>
                                        <div className="user_info">
                                            <span>{moment.author}</span>
                                            <span className="place">{moment.place}</span>
                                        </div>
                                    </header>
                                    <img src={`http://192.168.1.101:3333/files/${moment.image}`} alt="Imagem do momento"/>
                                    <footer>
                                        <div className="moment_actions">
                                            <button type="button" onClick={() => this.handleLike(moment._id)}>
                                                <img src={like} alt="Curtir este momento"/>
                                            </button>
                                                <strong>{moment.likes}</strong>
                                        </div>
                                            <p>
                                                {moment.description}
                                                    <span>{moment.hashtags}</span>    
                                            </p>
                                    </footer>
                                </article>
                            ))}
                        </section>
                    );
                };
    }

        export default MomentsFeed;