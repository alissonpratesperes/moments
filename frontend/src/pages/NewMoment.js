import React, {Component} from 'react';

import api from '../services/api';
import send from '../assets/send.svg';
import './NewMoment.css';

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
                    [event.target.name]: event.target.value
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
                                    value={this.state.author}
                                    onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                name="place"
                                placeholder="Local do momento"
                                    value={this.state.place}
                                    onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                name="description"
                                placeholder="Descrição do momento"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                name="hashtags"
                                placeholder="Hashtags do momento"
                                    value={this.state.hashtags}
                                    onChange={this.handleChange}
                            />
                                <button type="submit">
                                    <img src={send} alt="Cadastrar momento"/>
                                </button>
                        </form>
                    );
                };
    }

        export default NewMoment;