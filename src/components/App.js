// html element above another page (higher z index)

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Home';
import Category from './Category';
import { getProducts } from '../actions/productsActions';
import ProductDetails from './ProductDetails';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { setSearchTerm } from '../actions/appActions';
import SearchResultOverlay from './SearchResultOverlay';

const useStyles = makeStyles((theme) => ({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { activePage, searchValue } = useSelector(state => state.app);

  useEffect(() => dispatch(getProducts()), [dispatch]);

  const handleChange = event => {
    dispatch(setSearchTerm(event.target.value));
  }
  function activePageSwitch() {
    switch (activePage) {
      case 'category':
        return <Category />
      case 'product':
        return <ProductDetails />
      case 'home':
        return <Home />
      default:
        return null;
    }
  }

  return (
    <div className={classes.app}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Mock Store
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                type="text"
                value={searchValue}
                onChange={handleChange}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <SearchResultOverlay />
        {activePageSwitch()}
    </div>
  )
}

export default App;
