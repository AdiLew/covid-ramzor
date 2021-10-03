import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    flexContainer: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    appWrapper: {
        alignItems: 'center'
    },
    contentWrapper:{
        paddingTop: '1em',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
        [theme.breakpoints.up('md')]: {
            width: '60%'
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    navBar: {
        background: '#333'
    },
    navBarIcon: {
        color: '#fff',
        marginLeft: '20px'
    },
    listItem: {
        textAlign: 'right'
    },
    dropDownContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    dropDown: {
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '90%'
        },
        [theme.breakpoints.up('md')]: {
            width: '20em'
        }
    },
    cityDashboardDataContainer:{
        paddingTop: '3em'
    },
    cityDashboardDataList: {
        justifyContent: 'flex-start',
        [theme.breakpoints.down('md')]: {
            marginTop: '2em'
        },
    },
    homepageWrapper: {
        justifyContent: 'flex-start'
    },
    homepageContent: {
        justifyContent: 'flex-start',
        marginTop: '2em',
        [theme.breakpoints.down('md')]: {
        },
    }
}));

export default useStyles;
