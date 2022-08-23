import { createAppContainer, createStackNavigator } from 'react-navigation';

import MomentsFeed from './pages/MomentsFeed';
import NewMoment from './pages/NewMoment';

    export default createAppContainer(
        createStackNavigator({
            MomentsFeed,
            NewMoment
        })
    );