import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, TextInput } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import api from '../services/api';

    export default class NewMoment extends Component {
        state = {
            preview: null,
            image: null,
            author: '',
            place: '',
            description: '',
            hashtags: ''
        };

            handleSelectImage = async () => {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images
                });
                let based64 = await FileSystem.readAsStringAsync(result.uri, {
                    encoding: FileSystem.EncodingType.Base64
                });

                    const preview = {
                        uri : `data:image/jpeg;base64,${based64}`
                    };
                
                let prefix;
                let ext;

                if(result.fileName) {
                    [prefix, ext] = result.fileName.split('.');
                        ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
                } else {
                    prefix = new Date().getTime();
                        ext = 'jpg';
                }

                    const image = {
                        uri: result.uri,
                        type: result.type,
                        name: `${prefix}.${ext}`
                    };

                        this.setState({
                            preview,
                            image
                        });
            };
            handleSubmit = async() => {
                const momentData = new FormData();

                    momentData.append('image', this.state.image);
                    momentData.append('author', this.state.author);
                    momentData.append('place', this.state.place);
                    momentData.append('description', this.state.description);
                    momentData.append('hashtags', this.state.hashtags);

                        await api.post('moments', momentData);

                            this.props.navigation.navigate('MomentsFeed');
            };

            render() {
                return (
                    <ScrollView>
                        <View style={ styles.container }>
                            <TouchableOpacity style={ styles.selectButton } onPress={ this.handleSelectImage }>
                                <Text style={ styles.selectButtonText }> Selecionar Imagem </Text>
                            </TouchableOpacity>
                                { this.state.preview &&
                                    <AutoHeightImage width={253} style={ styles.imagePreview } source={this.state.preview}/>
                                }
                                    <TextInput
                                    style={ styles.input }
                                    autoCorrect={ false }
                                    autoCapitalize="none"
                                    placeholder="Autor do momento"
                                    placeholderTextColor="#DCDCE6"
                                    value={ this.state.author }
                                    onChangeText={ author => this.setState({ author }) }
                                    />
                                    <TextInput
                                    style={ styles.input }
                                    autoCorrect={ false }
                                    autoCapitalize="none"
                                    placeholder="Local do momento"
                                    placeholderTextColor="#DCDCE6"
                                    value={ this.state.place }
                                    onChangeText={ place => this.setState({ place }) }
                                    />
                                    <TextInput
                                    style={ styles.input }
                                    autoCorrect={ false }
                                    autoCapitalize="none"
                                    placeholder="Descrição do momento"
                                    placeholderTextColor="#DCDCE6"
                                    value={ this.state.description }
                                    onChangeText={ description => this.setState({ description }) }
                                    />
                                    <TextInput
                                    style={ styles.input }
                                    autoCorrect={ false }
                                    autoCapitalize="none"
                                    placeholder="Hashtags do momento"
                                    placeholderTextColor="#DCDCE6"
                                    value={ this.state.hashtags }
                                    onChangeText={ hashtags => this.setState({ hashtags }) }
                                    />
                            <TouchableOpacity style={ styles.shareButton } onPress={ this.handleSubmit }>
                                <Text style={ styles.shareButtonText }> Compartilhar </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                )
            }
    }

        const styles = StyleSheet.create({
            container: {
                marginTop: 15,
                marginBottom: 15,
                marginHorizontal: 30,
                paddingVertical: 15,
                paddingHorizontal: 30,
                backgroundColor: '#FFFFFF',
                borderWidth: 1,
                borderColor: '#DDDDDD',
                borderRadius: 10
            },

            selectButton: {
                height: 42,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#DDDDDD',
                borderStyle: 'dashed',
                borderRadius: 10
            },

            selectButtonText: {
                fontSize: 15,
                color: '#666666'
            },

            imagePreview: {
                marginTop: 20,
                alignSelf: 'center',
                borderRadius: 10
            },

            input: {
                marginTop: 20,
                padding: 20,
                fontSize: 15,
                borderWidth: 1,
                borderColor: '#DDDDDD',
                borderRadius: 5
            },

            shareButton: {
                marginTop: 20,
                paddingVertical: 10,
                paddingHorizontal: 20,
                height: 42,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000000',
                borderRadius: 10
            },

            shareButtonText: {
                fontSize: 15,
                fontWeight: 'bold',
                color: '#FFFFFF'
            }
        });