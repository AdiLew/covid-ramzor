import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import {
    CheckCircle as CheckCircleIcon,
    Help as HelpIcon,
    Error as ErrorIcon,
    Cancel as CancelIcon,
} from '@mui/icons-material';
import colors from '../../consts/colors';

const allIcons = {
    green: CheckCircleIcon,
    yellow: HelpIcon,
    orange: ErrorIcon,
    red: CancelIcon
};
const stylesDef = Object.values(colors).reduce((acc, color) => {
    acc[color.name] = {
        color: color.color
    }
    return acc;
}, {});

const getIconComponent = (color) => allIcons[color]

const DataListIcon = (props) => {
    const { color } = props;

    const useStyles = makeStyles(stylesDef);
    const IconComponent = getIconComponent(color);
    const classes = useStyles();
    const iconClassName = classes[color];
    
    return <IconComponent className={iconClassName} />
};

export default DataListIcon;