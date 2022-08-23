import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';

import MomentsFeed from './pages/MomentsFeed';
import NewMoment from './pages/NewMoment';
import logo from './assets/logo.png';

    export default createAppContainer(
        createStackNavigator({
            MomentsFeed,
            NewMoment
        }, {
            defaultNavigationOptions: {
                headerTitle: () => <Image source={ logo } style={{ marginHorizontal: 20 }} />,
                headerBackTitleVisible: false,
                headerTintColor: '#000000'
            },
            mode: 'modal'
        })
    );