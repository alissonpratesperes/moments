import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MomentsFeed from './pages/MomentsFeed';
import NewMoment from './pages/NewMoment';

    function Routes() {
        return (
            <Switch>
                <Route path="/" exact component={ MomentsFeed }/>
                <Route path="/new" component={ NewMoment }/>
            </Switch>
        );
    };

        export default Routes;