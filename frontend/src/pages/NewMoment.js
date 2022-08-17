import React, { Component } from 'react';

import './NewMoment.css';

    class NewMoment extends Component {
        render() {
            return (
                <form id="new_moment">
                    <input type="file"/>
                    <input type="text" name="author" placeholder="Autor do momento" />
                    <input type="text" name="place" placeholder="Local do momento" />
                    <input type="text" name="description" placeholder="Descrição do momento" />
                    <input type="text" name="hashtags" placeholder="Hashtags do momento" />
                        <button type="submit">Enviar</button>
                </form>
            );
        };
    }

        export default NewMoment;