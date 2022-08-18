import React, { Component } from 'react';

import send from '../assets/send.svg';
import './NewMoment.css';
import api from '../services/api';

    class NewMoment extends Component {
        state = {
            image: null,
            author: '',
            place: '',
            description: '',
            hashtags: ''
        };

            handleImageChange = event => {
                this.setState({
                    image: event.target.files[0]
                });
            };
            handleChange = event => {
                this.setState({
                    [ event.target.name ]: event.target.value
                });
            };
            handleSubmit = async event => {
                event.preventDefault();
                    const momentData = new FormData();
                        momentData.append('image', this.state.image);
                        momentData.append('author', this.state.author);
                        momentData.append('place', this.state.place);
                        momentData.append('description', this.state.description);
                        momentData.append('hashtags', this.state.hashtags);
                            await api.post('moments', momentData);
                                this.props.history.push('/');
            };

                render() {
                    return (
                        <form id="new_moment" onSubmit={this.handleSubmit}>
                            <input type="file"
                                onChange={this.handleImageChange}
                            />
                            <input
                                type="text"
                                name="author"
                                placeholder="Autor do momento"
                                    onChange={this.handleChange}
                                    value={this.state.author}
                            />
                            <input
                                type="text"
                                name="place"
                                placeholder="Local do momento"
                                    onChange={this.handleChange}
                                    value={this.state.place}
                            />
                            <input
                                type="text"
                                name="description"
                                placeholder="Descrição do momento"
                                    onChange={this.handleChange}
                                    value={this.state.description}
                            />
                            <input
                                type="text" name="hashtags"
                                placeholder="Hashtags do momento"
                                    onChange={this.handleChange}
                                    value={this.state.hashtags}
                            />
                                <button type="submit">
                                    <img src={send} alt="Cadastrar momento"/>
                                </button>
                        </form>
                    );
                };
    }

        export default NewMoment;