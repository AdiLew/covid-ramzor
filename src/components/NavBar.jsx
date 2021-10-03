import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@mui/material';
import {
    Home as HomeIcon
} from '@mui/icons-material';
import useStyles from '../hooks/useStyles';

const NavBar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.navBar} position="static" color="primary">
            <Toolbar>
                <Link to="/">
                    <IconButton edge="start" color="inherit" aria-label="home" size="large">
                        <HomeIcon className={classes.navBarIcon} />
                    </IconButton>
                </Link>
                <Typography variant="h6" >
                    רמזור אלטרנטיבי
                </Typography>

            </Toolbar>

        </AppBar>
    );
}

export default NavBar;