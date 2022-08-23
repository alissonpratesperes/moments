import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

import camera from '../assets/camera.png';

    export default class MomentsFeed extends Component {
        static navigationOptions = ({ navigation }) => ({
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 20 }} onPress={ () => navigation.navigate('NewMoment') }>
                    <Image source={ camera } />
                </TouchableOpacity>
            )
        });

            render() {
                return <View/>
            }
    }