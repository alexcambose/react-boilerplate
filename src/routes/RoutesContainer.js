import React, { Fragment } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import normalize from 'normalize-path';
import { Route } from 'react-router-dom';
import allRoutes from './index';
import history from '../redux/history';

const renderRoutes = (routes, previousPath = '/') => routes.map(route => ( // looks sweet but not fully tested
    <Route
        exact={route.exact}
        strict={route.strict}
        sensitive={route.sensitive}
        path={normalize(`${previousPath}/${route.path}`)}
        render={props => (
            <route.component {...props} >
                {route.routes && <Fragment>{renderRoutes(route.routes, normalize(`${previousPath}/${route.path}`))}</Fragment>}
            </route.component>
        )}
    />
));

export default () => (
    <ConnectedRouter history={history}>
        <Fragment>
            {renderRoutes(allRoutes)}
        </Fragment>
    </ConnectedRouter>
);
