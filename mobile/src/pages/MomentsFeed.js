import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, View, FlatList, Text} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import io from 'socket.io-client';

import api from '../services/api';
import camera from '../assets/camera.png';
import like from '../assets/like.png';

    export default class MomentsFeed extends Component {
        static navigationOptions = ({navigation}) => ({
            headerRight: () => (
                <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.navigate('NewMoment')}>
                    <Image source={camera}/>
                </TouchableOpacity>
            )
        });

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
                            <View style={styles.container}>
                                <FlatList data={this.state.momentsFeed} keyExtractor={moment => moment._id} renderItem={({item}) => (
                                    <View style={styles.feedItem}>
                                        <View style={styles.feedItemHeader}>
                                            <View>
                                                <Text style={styles.author}>{item.author}</Text>
                                                <Text style={styles.place}>{item.place}</Text>
                                            </View>
                                        </View>
                                        <AutoHeightImage width={313} source={{uri: `http://192.168.1.101:3333/files/${item.image}`}}/>
                                        <View style={styles.feedItemFooter}>
                                            <View style={styles.feedItemActions}>
                                                <TouchableOpacity onPress={() => this.handleLike(item._id)} >
                                                    <Image source={like}/>
                                                </TouchableOpacity>
                                                        <Text style={styles.likes}>{item.likes}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.description}>{item.description}</Text>
                                                <Text style={styles.hashtags}>{item.hashtags}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )}/>
                            </View>
                        )
                    }
    }

        const styles = StyleSheet.create({
            container: {
                flex: 1
            },
            feedItem: {
                marginVertical: 15,
                marginHorizontal: 30,
                backgroundColor: '#FFFFFF',
                borderWidth: 1,
                borderColor: '#DDDDDD',
                borderRadius: 10
            },
            feedItemHeader: {
                paddingVertical: 20,
                paddingHorizontal: 20
            },
            author: {
                fontSize: 20,
                color: '#000000'
            },
            place: {
                marginTop: 5,
                fontSize: 15,
                color: '#666666'
            },
            feedItemFooter: {
                paddingVertical: 20,
                paddingHorizontal: 20
            },
            feedItemActions: {
                flexDirection: 'row',
                justifyContent: 'flex-end'
            },
            likes: {
                marginLeft: 5,
                fontWeight: 'bold'
            },
            description: {
                fontSize: 20,
                color: '#000000'
            },
            hashtags: {
                marginTop: 5,
                fontSize: 15,
                color: '#666666'
            }
        });