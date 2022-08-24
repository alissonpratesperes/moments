import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, View, FlatList, Text } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import camera from '../assets/camera.png';
import like from '../assets/like.png';
import api from '../services/api';

    export default class MomentsFeed extends Component {
        static navigationOptions = ({ navigation }) => ({
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 20 }} onPress={ () => navigation.navigate('NewMoment') }>
                    <Image source={ camera }/>
                </TouchableOpacity>
            )
        });

            state = {
                momentsFeed: []
            };

                async componentDidMount() {
                    //this.registerToSocket();
                        const response = await api.get('moments');
                            this.setState({
                                momentsFeed: response.data
                            });
                };

                    render() {
                        return (
                            <View style={ styles.container }>
                                <FlatList data={ this.state.momentsFeed } keyExtractor={ moment => moment._id } renderItem={ ({ item }) => (
                                    <View style={ styles.feedItem }>
                                        <View style={ styles.feedItemHeader }>
                                            <View>
                                                <Text style={ styles.author }> { item.author } </Text>
                                                <Text style={ styles.place }> { item.place } </Text>
                                            </View>
                                        </View>
                                        <AutoHeightImage width={313} style={ styles.feedItemImage } source={{ uri: `http://192.168.1.101:3333/files/${item.image}` }}/>
                                        <View style={ styles.feedItemFooter }>
                                            <View style={ styles.feedItemActions }>
                                                <TouchableOpacity onPress={ () => {} } >
                                                    <Image source={ like }/>
                                                </TouchableOpacity>
                                                        <Text style={ styles.likes }> { item.likes } </Text>
                                            </View>
                                            <View>
                                                <Text style={ styles.description }> { item.description } </Text>
                                                <Text style={ styles.hashtags }> { item.hashtags } </Text>
                                            </View>
                                        </View>
                                    </View>
                                ) }/>
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