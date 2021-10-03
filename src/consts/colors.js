import { green, yellow, orange, red } from '@mui/material/colors';

const colors = {
    RED: {
        name: 'red',
        hebrewName: 'אדום',
        iconName: 'Cancel',
        color: red[500],
        minScore: 7.5,
    },
    ORANGE: {
        name: 'orange',
        hebrewName: 'כתום',
        iconName: 'Error',
        color: orange[500],
        minScore: 6,
    },
    YELLOW: {
        name: 'yellow',
        hebrewName: 'צהוב',
        iconName: 'Help',
        color: yellow[500],
        minScore: 4.5,
    },
    GREEN: {
        name: 'green',
        hebrewName: 'ירוק',
        iconName: 'CheckCircle',
        color: green[500],
        minScore: 0,
    },
}

export default colors;