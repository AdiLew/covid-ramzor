import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import classnames from 'classnames'
import { Box } from '@mui/material';
import NavBar from './NavBar';
import Homepage from './Homepage';
import CityDashboard from './CityDashboard';
import useStyles from '../hooks/useStyles';

const AppRouter = () => {
    const classes = useStyles();
    const appWrapperClassNames = classnames('appWrapper', classes.appWrapper);
    const contentWrapperClassNames = classnames('contentWrapper', classes.contentWrapper, classes.flexContainer);
    return (
        <BrowserRouter>
            <Box className={appWrapperClassNames}>
                <NavBar />
                    <Box className={contentWrapperClassNames}>
                        <Switch>
                            <Route path="/city/:cityName">
                                <CityDashboard />
                            </Route>
                            <Route>
                                <Homepage path="/" />
                            </Route>
                        </Switch>
                    </Box>
            </Box>
        </BrowserRouter>
    );
};

export default AppRouter;