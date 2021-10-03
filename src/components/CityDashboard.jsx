import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classnames from 'classnames';
import {
    Box,
    Container,
    Typography
} from '@mui/material';
import LoadingScreen from './LoadingScreen';
import Gauge from './Gauge';
import CityDataList from './CityDataList';
import { getCityData } from '../selectors/citySelectors';
import useStyles from '../hooks/useStyles';

const CityDashboard = (props) => {
    const { cityName } = useParams();
    const formattedCityName = cityName.replace('-', ' - ')
    const [isLoading, setIsLoading] = useState(true);
    const [cityData, setCityData] = useState({});

    useEffect(() => {
        getCityData(cityName)
            .then(data => setCityData(data))
            .finally(() => { setIsLoading(false) });
    }, [cityName]);

    const classes = useStyles();
    const containerClassNames = classnames(classes.flexContainer);
    const dataContainerClassNames = classnames(classes.flexContainer, classes.cityDashboardDataContainer);

    return (
        <Box className={containerClassNames}>
            <Typography variant="h2">{formattedCityName}</Typography>
            {isLoading
                ? <LoadingScreen isOpen={true} />
                : <Box className={dataContainerClassNames}>
                    <Gauge score={cityData.score} />
                    <CityDataList data={cityData} />
                </Box>
            }
        </Box>
    );
};

export default CityDashboard;