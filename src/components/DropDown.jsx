import React from 'react';
import useStyles from '../hooks/useStyles';
import {
    Container,
    Autocomplete,
    TextField
} from '@mui/material';

const DropDown = (props) => {
    const {
        items = [],
        onChange
    } = props;

    const onChangeHandler = (event, newValue) => {
        if (onChange) {
            onChange(newValue);
        }
        else {
            console.log(`${newValue} selected`)
        }
    };

    const classes = useStyles();
    return (
        <Container className={classes.dropDownContainer}>
            <Autocomplete
                className={classes.dropDown}
                options={items}
                onChange={onChangeHandler}
                getOptionLabel={(option) => option.text}
                renderInput={(params) => <TextField {...params} label="עיר" />}
            />
        </Container>

    );
};

export default DropDown;