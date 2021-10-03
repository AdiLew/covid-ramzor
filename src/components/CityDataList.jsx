import React, { useMemo } from 'react';
import classnames from 'classnames';
import dayjs from 'dayjs';
import useStyles from '../hooks/useStyles';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus, faVial, faUsers } from '@fortawesome/free-solid-svg-icons'
import DataListIcon from './icons/DataListIcons';
import colors from '../consts/colors';


const CityDataList = (props) => {
    const { data = {} } = props;

    const {
        activeSick,
        activeSickTo1000,
        color,
        date,
        firstDose,
        governmentColor,
        growthLastWeek,
        name,
        positiveTests,
        score,
        secondDose
    } = data;

    const lastUpdate = useMemo(() => {
        if (!date) {
            return null;
        }
        const updateDate = dayjs(date);
        return updateDate.fromNow();
    }, [date]);

    const formatPercent = (number) => '' + Math.round(number * 100, 2) + '%'

    const getIconByScore = (score) => {
        const { name: colorName } = Object.values(colors).find(c => c.minScore < score);
        return <DataListIcon color={colorName} />
    };

    const getIconByHebrewColorName = (hebrewName) => {
        const { name: colorName } = Object.values(colors).find(c => c.hebrewName === hebrewName);
        return <DataListIcon color={colorName} />
    };


    const listItems = [
        {
            text: `ציון רמזור: ${score}`,
            icon: getIconByScore(score),
        },
        {
            text: `צבע תקנות חינוך: ${governmentColor}`,
            icon: getIconByHebrewColorName(governmentColor),
        },
        {
            text: `חולים פעילים: ${activeSick}`,
            secondaryText: `שינוי מהשבוע שעבר: ${formatPercent(growthLastWeek)}`,
            icon: <FontAwesomeIcon icon={faVirus} />
        },
        {
            text: `אחוז הבדיקות החיוביות: ${formatPercent(positiveTests)}`,
            icon: <FontAwesomeIcon icon={faVial} />
        },
        {
            text: `חולים לכל 10,000 נפש: ${activeSickTo1000}`,
            icon: <FontAwesomeIcon icon={faUsers} />
        },
        {
            text: `עודכן לאחרונה ${lastUpdate}`,
            icon: <ScheduleIcon />
        }
    ]

    const classes = useStyles();
    const containerClassNames = classnames(classes.flexContainer, classes.cityDashboardDataList)

    return (
        <Box className={containerClassNames}>
            <List>
                {listItems.map((item, index) => {
                    return (
                        <ListItem key={index} className={classes.listItem}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                secondary={item.secondaryText}
                            />
                        </ListItem>
                    )
                })}

            </List>
        </Box>
    )
}

export default CityDataList