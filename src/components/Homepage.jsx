import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import {
    Box,
    Container,
    Typography
} from '@mui/material';
import DropDown from './DropDown';
import { getAllCities } from '../selectors/citySelectors';
import useStyles from '../hooks/useStyles';


const Homepage = () => {
    const [citiesList, setCitiesList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getAllCities()
            .then(cities => setCitiesList(cities))

    }, [])

    const citiesItemsForDropDown = citiesList.map(cityName => ({ text: cityName, value: cityName }))
    const onCitySelected = (selectedItem) => {
        const { value } = selectedItem;
        history.push(`/city/${value}`)
    }

    const classes = useStyles();
    const containerClassNames = classnames(classes.flexContainer, classes.homepageWrapper);
    const dataClassNames = classnames(classes.flexContainer, classes.homepageContent);

    return (

        <Box className={containerClassNames}>
            <Typography variant="h2" paragraph={true}>הרמזור של נפתלי!</Typography>
            <Box className={dataClassNames}>
                <Typography variant="h6" paragraph={true}>בחר עיר מהרשימה מטה</Typography>
                <DropDown items={citiesItemsForDropDown} onChange={onCitySelected} />
            </Box>
        </Box>

    );
};

export default Homepage;