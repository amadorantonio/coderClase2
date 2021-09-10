import './NavBar.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/img/logo.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'black',
      textAlign: 'right'
    },
  }));

function NavBar() {
    const classes = useStyles();
    return ( //JSX
        
        <AppBar position="static" className='main-navbar'>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Tienda</Button>
                <Button color="inherit">Contacto</Button>
                <Button color="inherit">Conoce Más</Button>
                <Typography variant="h6" className={classes.title}>
                    Tony Bikes
                </Typography>
                <div className='container-logo'>
                    <img src={logo}></img>
                </div>
            </Toolbar>
        </AppBar>
        
    );
}

export default NavBar;
